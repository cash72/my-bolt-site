import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegPath from 'ffmpeg-static';

export function buildVideo({ imagePaths, durations, voiceoverPath, outFile, listName }) {
  if (!existsSync(voiceoverPath)) {
    throw new Error(`Missing voiceover: ${voiceoverPath}`);
  }
  if (imagePaths.length === 0) {
    throw new Error('No images provided');
  }
  if (imagePaths.length !== durations.length) {
    throw new Error('imagePaths and durations length mismatch');
  }

  const outputDir = dirname(outFile);
  const listFile = join(outputDir, listName);
  const lines = [];

  for (let i = 0; i < imagePaths.length; i++) {
    lines.push(`file '${imagePaths[i].replace(/'/g, "'\\''")}'`);
    lines.push(`duration ${durations[i].toFixed(3)}`);
  }
  lines.push(`file '${imagePaths.at(-1).replace(/'/g, "'\\''")}'`);
  writeFileSync(listFile, `${lines.join('\n')}\n`);

  const tempVideo = join(outputDir, `${listName.replace('.txt', '')}-temp.mp4`);
  const args = [
    '-y',
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    listFile,
    '-vf',
    'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,format=yuv420p',
    '-r',
    '30',
    '-c:v',
    'libx264',
    '-pix_fmt',
    'yuv420p',
    tempVideo,
  ];

  console.log(`Rendering ${imagePaths.length} frames...`);
  const slideResult = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (slideResult.status !== 0) process.exit(slideResult.status ?? 1);

  const finalArgs = [
    '-y',
    '-i',
    tempVideo,
    '-i',
    voiceoverPath,
    '-c:v',
    'copy',
    '-c:a',
    'aac',
    '-b:a',
    '192k',
    '-shortest',
    outFile,
  ];

  console.log('Muxing audio...');
  const finalResult = spawnSync(ffmpegPath, finalArgs, { stdio: 'inherit' });
  if (finalResult.status !== 0) process.exit(finalResult.status ?? 1);

  console.log(`\nDone! Video saved to:\n${outFile}`);
}
