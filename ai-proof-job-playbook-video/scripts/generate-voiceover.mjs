import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EdgeTTS } from 'edge-tts-universal';
import ffmpegPath from 'ffmpeg-static';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const scriptPath = join(__dirname, 'youtube-short-script.txt');
const outDir = join(root, 'assets');
const segmentDir = join(outDir, 'voice-segments');
const outFile = join(outDir, 'voiceover.mp3');
const metaPath = join(outDir, 'voiceover-meta.json');

// Warm and natural — non-multilingual avoids language glitches.
const VOICE = 'en-US-AndrewNeural';

// Subtle variation so it doesn't sound flat or over-processed.
const PROSODY = [
  { rate: '-4%', pitch: '-1Hz' }, // hook — calm, relatable
  { rate: '+0%', pitch: '+0Hz' },
  { rate: '-2%', pitch: '+1Hz' },
  { rate: '+3%', pitch: '+1Hz' }, // product intro — slight lift
  { rate: '+1%', pitch: '+0Hz' },
  { rate: '+2%', pitch: '+1Hz' },
  { rate: '+0%', pitch: '-1Hz' },
  { rate: '+2%', pitch: '+0Hz' },
  { rate: '+1%', pitch: '+1Hz' },
  { rate: '+0%', pitch: '+0Hz' },
  { rate: '+2%', pitch: '+1Hz' },
  { rate: '+1%', pitch: '+0Hz' }, // close — grounded
  { rate: '-2%', pitch: '-1Hz' }, // CTA — direct, not shouty
];

const PAUSE_SECONDS = 0.48;

mkdirSync(segmentDir, { recursive: true });
for (const file of readdirSync(segmentDir)) {
  rmSync(join(segmentDir, file));
}

const paragraphs = readFileSync(scriptPath, 'utf8')
  .split(/\n\s*\n/)
  .map((p) => p.replace(/\s+/g, ' ').trim())
  .filter(Boolean);

console.log(`Synthesizing ${paragraphs.length} segments with ${VOICE}...`);

const segmentFiles = [];

for (let i = 0; i < paragraphs.length; i++) {
  const prosody = PROSODY[i] ?? { rate: '+1%', pitch: '+0Hz' };
  const segmentFile = join(segmentDir, `seg-${String(i + 1).padStart(2, '0')}.mp3`);

  const tts = new EdgeTTS(paragraphs[i], VOICE, {
    rate: prosody.rate,
    pitch: prosody.pitch,
    volume: '+0%',
  });

  const result = await tts.synthesize();
  writeFileSync(segmentFile, Buffer.from(await result.audio.arrayBuffer()));
  segmentFiles.push(segmentFile);
  console.log(`  [${i + 1}/${paragraphs.length}] ${prosody.rate}, ${prosody.pitch}`);
}

const silenceFile = join(segmentDir, 'pause.mp3');
spawnSync(
  ffmpegPath,
  ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', String(PAUSE_SECONDS), '-q:a', '9', silenceFile],
  { stdio: 'pipe' },
);

const concatList = join(segmentDir, 'concat.txt');
const lines = [];
for (let i = 0; i < segmentFiles.length; i++) {
  lines.push(`file '${segmentFiles[i].replace(/'/g, "'\\''")}'`);
  if (i < segmentFiles.length - 1) {
    lines.push(`file '${silenceFile.replace(/'/g, "'\\''")}'`);
  }
}
writeFileSync(concatList, `${lines.join('\n')}\n`);

const concatResult = spawnSync(
  ffmpegPath,
  ['-y', '-f', 'concat', '-safe', '0', '-i', concatList, '-c', 'copy', outFile],
  { encoding: 'utf8' },
);

if (concatResult.status !== 0) {
  console.error(concatResult.stderr);
  process.exit(concatResult.status ?? 1);
}

const probe = spawnSync(ffmpegPath, ['-i', outFile, '-f', 'null', '-'], { encoding: 'utf8' });
const match = probe.stderr.match(/Duration: (\d+):(\d+):(\d+(?:\.\d+)?)/);
const duration = match
  ? Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3])
  : 90;

console.log(`Voiceover saved: ${outFile} (${duration.toFixed(1)}s)`);

writeFileSync(
  metaPath,
  JSON.stringify(
    { duration, voice: VOICE, tone: 'natural-conversational', segments: paragraphs.length, pauseSeconds: PAUSE_SECONDS },
    null,
    2,
  ),
);
