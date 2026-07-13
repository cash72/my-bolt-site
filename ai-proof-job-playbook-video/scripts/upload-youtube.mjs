import { createServer } from 'node:http';
import { createReadStream, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, 'youtube-upload-config.json');
const tokenPath = join(__dirname, '.youtube-token.json');
const secretsPath = join(__dirname, 'client_secret.json');

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.force-ssl'];

function loadConfig() {
  const config = JSON.parse(readFileSync(configPath, 'utf8'));
  config.description = readFileSync(join(__dirname, config.descriptionFile), 'utf8').trim();
  config.pinnedComment = readFileSync(join(__dirname, config.pinnedCommentFile), 'utf8').trim();
  config.videoPath = join(__dirname, config.videoFile);
  config.thumbnailPath = join(__dirname, config.thumbnailFile);
  return config;
}

function loadOAuthClient() {
  if (!existsSync(secretsPath)) {
    console.error(`Missing ${secretsPath}`);
    console.error('Create OAuth credentials at https://console.cloud.google.com/apis/credentials');
    console.error('Download as client_secret.json into scripts/ and rerun.');
    process.exit(1);
  }

  const secrets = JSON.parse(readFileSync(secretsPath, 'utf8'));
  const installed = secrets.installed ?? secrets.web;
  const { client_id, client_secret, redirect_uris } = installed;
  return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
}

async function authorize(oauth2Client) {
  if (existsSync(tokenPath)) {
    oauth2Client.setCredentials(JSON.parse(readFileSync(tokenPath, 'utf8')));
    return oauth2Client;
  }

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });

  console.log('\nOpen this URL in your browser and approve access:\n');
  console.log(authUrl);
  console.log('\nWaiting for OAuth callback on http://localhost:53682/callback ...\n');

  const code = await waitForAuthCode();
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  writeFileSync(tokenPath, JSON.stringify(tokens, null, 2));
  console.log(`Saved token to ${tokenPath}`);
  return oauth2Client;
}

function waitForAuthCode() {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost:53682');
      if (url.pathname !== '/callback') {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');
      if (error) {
        res.writeHead(400);
        res.end(`Auth failed: ${error}`);
        server.close();
        reject(new Error(error));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>YouTube auth complete.</h1><p>You can close this tab and return to the terminal.</p>');
      server.close();
      resolve(code);
    });

    server.listen(53682, '127.0.0.1', () => {});
    server.on('error', reject);
  });
}

async function uploadVideo(auth, config) {
  const youtube = google.youtube({ version: 'v3', auth });
  const fileSize = readFileSync(config.videoPath).length;

  console.log(`Uploading ${config.videoPath} (${(fileSize / 1024 / 1024).toFixed(1)} MB)...`);

  const response = await youtube.videos.insert(
    {
      part: ['snippet', 'status'],
      requestBody: {
        snippet: {
          title: config.title,
          description: config.description,
          tags: config.tags,
          categoryId: config.categoryId,
          defaultLanguage: 'en',
          defaultAudioLanguage: 'en',
        },
        status: {
          privacyStatus: config.privacyStatus,
          selfDeclaredMadeForKids: config.madeForKids,
        },
      },
      media: {
        mimeType: 'video/mp4',
        body: createReadStream(config.videoPath),
      },
    },
    {
      onUploadProgress: (event) => {
        const pct = Math.round((event.bytesRead / fileSize) * 100);
        process.stdout.write(`\rUpload progress: ${pct}%`);
      },
    },
  );

  console.log('\nUpload complete.');
  return response.data;
}

async function setThumbnail(auth, videoId, thumbnailPath) {
  const youtube = google.youtube({ version: 'v3', auth });
  await youtube.thumbnails.set({
    videoId,
    media: {
      mimeType: 'image/jpeg',
      body: createReadStream(thumbnailPath),
    },
  });
  console.log('Thumbnail uploaded.');
}

async function postPinnedComment(auth, videoId, text) {
  const youtube = google.youtube({ version: 'v3', auth });
  const comment = await youtube.commentThreads.insert({
    part: ['snippet'],
    requestBody: {
      snippet: {
        videoId,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    },
  });

  const commentId = comment.data.snippet?.topLevelComment?.id;
  if (!commentId) {
    console.warn('Comment posted but could not pin automatically.');
    return;
  }

  await youtube.comments.setModerationStatus({
    id: commentId,
    moderationStatus: 'pinned',
  });
  console.log('Pinned comment posted.');
}

async function main() {
  const config = loadConfig();

  if (!existsSync(config.videoPath)) {
    throw new Error(`Video not found: ${config.videoPath}`);
  }

  const oauth2Client = loadOAuthClient();
  const auth = await authorize(oauth2Client);
  const video = await uploadVideo(auth, config);

  const videoId = video.id;
  const url = `https://youtu.be/${videoId}`;
  console.log(`Video URL: ${url}`);

  if (existsSync(config.thumbnailPath)) {
    await setThumbnail(auth, videoId, config.thumbnailPath);
  }

  try {
    await postPinnedComment(auth, videoId, config.pinnedComment);
  } catch (error) {
    console.warn('Could not pin comment automatically. Paste manually from youtube-upload-pinned-comment.txt');
    console.warn(String(error));
  }

  writeFileSync(
    join(__dirname, 'youtube-upload-result.json'),
    JSON.stringify({ videoId, url, title: config.title, gumroadUrl: config.gumroadUrl }, null, 2),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
