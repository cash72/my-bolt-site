import { createCanvas } from 'canvas';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'assets', 'slides');
mkdirSync(outDir, { recursive: true });

const W = 1920;
const H = 1080;

const slides = [
  {
    bg: '#0f172a',
    accent: '#ff90e8',
    title: 'Worried AI Will\nReplace Your Job?',
    subtitle: 'Most workers have zero AI training from their employer.',
  },
  {
    bg: '#111827',
    accent: '#60a5fa',
    title: 'The Gap Is\nYour Opportunity',
    subtitle: 'Turn uncertainty into a 30-day action plan you can start today.',
  },
  {
    bg: '#1e1b4b',
    accent: '#fbbf24',
    title: '2026 AI-Proof\nJob Playbook',
    subtitle: '31 pages • Instant PDF • Start today, run for 30 days.',
  },
  {
    bg: '#0f172a',
    accent: '#34d399',
    title: 'What You Get',
    bullets: [
      '15-min role audit: automatable vs. irreplaceable',
      '10 human edge skills + 10 copy-paste AI prompts',
      'Manager scripts + 7-day upskilling sprint',
      'LinkedIn/resume templates + 30-day calendar',
      '48-hour layoff plan + team AI guidelines',
    ],
  },
  {
    bg: '#172554',
    accent: '#ff90e8',
    title: 'Who It\'s For',
    bullets: [
      'Office workers & admins',
      'Coordinators & project managers',
      'Marketers & customer success',
      'Anyone who wants to work smarter—not get replaced',
    ],
  },
  {
    bg: '#0f172a',
    accent: '#f472b6',
    title: 'Get the Playbook',
    subtitle: 'Link in description ↓',
    cta: 'cashflow552.gumroad.com/l/ai-proof-job-playbook',
  },
];

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawSlide(slide, index) {
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = slide.bg;
  ctx.fillRect(0, 0, W, H);

  // Accent bar
  ctx.fillStyle = slide.accent;
  ctx.fillRect(80, 80, 8, 120);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 86px sans-serif';
  const titleLines = slide.title.split('\n');
  titleLines.forEach((line, i) => {
    ctx.fillText(line, 110, 160 + i * 96);
  });

  if (slide.subtitle) {
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '36px sans-serif';
    const subLines = wrapText(ctx, slide.subtitle, W - 160);
    subLines.forEach((line, i) => {
      ctx.fillText(line, 110, 320 + i * 48);
    });
  }

  if (slide.bullets) {
    ctx.font = '34px sans-serif';
    slide.bullets.forEach((bullet, i) => {
      ctx.fillStyle = slide.accent;
      ctx.fillText('•', 110, 360 + i * 72);
      ctx.fillStyle = '#e2e8f0';
      const lines = wrapText(ctx, bullet, W - 200);
      lines.forEach((line, j) => {
        ctx.fillText(line, 150, 360 + i * 72 + j * 44);
      });
    });
  }

  if (slide.cta) {
    ctx.fillStyle = slide.accent;
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText(slide.cta, 110, 480);
  }

  // MindWizard branding
  ctx.fillStyle = '#64748b';
  ctx.font = '28px sans-serif';
  ctx.fillText('MindWizard', 110, H - 80);

  const file = join(outDir, `slide-${String(index + 1).padStart(2, '0')}.png`);
  writeFileSync(file, canvas.toBuffer('image/png'));
  console.log(`Slide saved: ${file}`);
}

slides.forEach(drawSlide);

writeFileSync(
  join(outDir, 'manifest.json'),
  JSON.stringify({ count: slides.length, width: W, height: H }, null, 2),
);
