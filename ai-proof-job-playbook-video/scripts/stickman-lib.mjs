import { createCanvas } from 'canvas';

export const W = 1920;
export const H = 1080;
const INK = '#111111';
const MUTED = '#555555';
export const ACCENT = '#e53935';

export function createSurface() {
  const c = createCanvas(W, H);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = INK;
  ctx.fillStyle = INK;
  return { c, ctx };
}

function motionLines(ctx, x, y, count, dir, phase) {
  ctx.lineWidth = 3;
  for (let i = 0; i < count; i++) {
    const shift = Math.sin(phase * Math.PI * 2 + i) * 6;
    ctx.beginPath();
    ctx.moveTo(x + dir * (20 + i * 12), y - 8 + i * 6 + shift);
    ctx.lineTo(x + dir * (8 + i * 12), y - 8 + i * 6 + shift);
    ctx.stroke();
  }
}

function face(ctx, x, y, r, expression) {
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 3;

  if (expression === 'worried') {
    ctx.fillRect(x - 16, y - 10, 8, 8);
    ctx.fillRect(x + 8, y - 10, 8, 8);
    ctx.beginPath();
    ctx.arc(x, y + 12, 10, 0.2, Math.PI - 0.2);
    ctx.stroke();
  } else if (expression === 'overwhelmed') {
    ctx.beginPath();
    ctx.moveTo(x - 16, y - 2);
    ctx.lineTo(x - 4, y - 6);
    ctx.moveTo(x + 4, y - 6);
    ctx.lineTo(x + 16, y - 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 8, y + 14);
    ctx.quadraticCurveTo(x, y + 6, x + 8, y + 14);
    ctx.stroke();
  } else if (expression === 'happy') {
    ctx.beginPath();
    ctx.arc(x - 12, y - 4, 5, 0, Math.PI * 2);
    ctx.arc(x + 12, y - 4, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y + 10, 14, 0.2, Math.PI - 0.2);
    ctx.stroke();
  } else if (expression === 'confident') {
    ctx.beginPath();
    ctx.moveTo(x - 14, y - 6);
    ctx.lineTo(x - 4, y - 2);
    ctx.moveTo(x + 4, y - 2);
    ctx.lineTo(x + 14, y - 6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y + 10, 12, 0.1, Math.PI - 0.1);
    ctx.stroke();
  } else if (expression === 'thinking') {
    ctx.beginPath();
    ctx.moveTo(x - 16, y - 4);
    ctx.lineTo(x - 6, y - 4);
    ctx.moveTo(x + 6, y - 4);
    ctx.lineTo(x + 16, y - 4);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(x - 12, y - 4, 4, 0, Math.PI * 2);
    ctx.arc(x + 12, y - 4, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x - 10, y + 12);
    ctx.lineTo(x + 10, y + 12);
    ctx.stroke();
  }
}

function limb(ctx, x, y, angle, length, width) {
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
  ctx.stroke();
}

export function stickman(ctx, x, y, scale, expression, arms, legs, headTilt = 0) {
  const s = scale;
  const bobY = y;
  const headY = bobY - 110 * s;
  const headX = x + headTilt;

  face(ctx, headX, headY, 34 * s, expression);

  ctx.lineWidth = 5 * s;
  ctx.beginPath();
  ctx.moveTo(headX, headY + 34 * s);
  ctx.lineTo(x, bobY - 10 * s);
  ctx.stroke();

  const shoulderY = bobY - 55 * s;
  limb(ctx, x, shoulderY, arms[0], 50 * s, 5 * s);
  limb(ctx, x, shoulderY, arms[1], 50 * s, 5 * s);

  const hipY = bobY - 10 * s;
  limb(ctx, x, hipY, legs[0], 62 * s, 5 * s);
  limb(ctx, x, hipY, legs[1], 62 * s, 5 * s);
}

function robot(ctx, x, y, scale, phase) {
  const s = scale;
  const bob = Math.sin(phase * Math.PI * 2) * 8;
  const ry = y + bob;
  ctx.lineWidth = 4 * s;
  ctx.strokeRect(x - 55 * s, ry - 130 * s, 110 * s, 100 * s);
  const blink = Math.sin(phase * Math.PI * 4) > 0.7;
  if (!blink) {
    ctx.fillRect(x - 38 * s, ry - 112 * s, 22 * s, 14 * s);
    ctx.fillRect(x + 16 * s, ry - 112 * s, 22 * s, 14 * s);
  }
  const antAngle = Math.sin(phase * Math.PI * 2) * 0.15;
  ctx.beginPath();
  ctx.moveTo(x, ry - 130 * s);
  ctx.lineTo(x + Math.sin(antAngle) * 20, ry - 168 * s);
  ctx.arc(x + Math.sin(antAngle) * 20, ry - 173 * s, 8 * s, 0, Math.PI * 2);
  ctx.stroke();
  ctx.font = `${22 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('AI', x, ry - 72 * s);
}

function laptop(ctx, x, y, w, h) {
  ctx.lineWidth = 4;
  ctx.strokeRect(x, y, w, h * 0.7);
  ctx.beginPath();
  ctx.moveTo(x - 20, y + h * 0.7);
  ctx.lineTo(x + w + 20, y + h * 0.7);
  ctx.lineTo(x + w + 40, y + h);
  ctx.lineTo(x - 40, y + h);
  ctx.closePath();
  ctx.stroke();
}

function bubble(ctx, x, y, w, text) {
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(x, y, w, 80, 12);
  ctx.stroke();
  ctx.fillStyle = MUTED;
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, x + w / 2, y + 48);
  ctx.fillStyle = INK;
}

function standPose(phase, i = 0) {
  const p = phase * Math.PI * 2 + i;
  return {
    arms: [Math.PI * 0.85 + Math.sin(p) * 0.08, Math.PI * 0.15 - Math.sin(p) * 0.08],
    legs: [Math.PI / 2 + 0.15, Math.PI / 2 - 0.15],
    y: Math.sin(p) * 6,
  };
}

function runPose(phase) {
  const swing = Math.sin(phase * Math.PI * 2);
  return {
    arms: [Math.PI * 0.55 + swing * 0.45, Math.PI * 0.05 - swing * 0.45],
    legs: [Math.PI / 2 + 0.35 + swing * 0.55, Math.PI / 2 - 0.35 - swing * 0.55],
    y: Math.abs(swing) * -10,
    x: -swing * 35,
  };
}

function celebratePose(phase) {
  const swing = Math.sin(phase * Math.PI * 2);
  return {
    arms: [Math.PI * 1.15 + swing * 0.12, -Math.PI * 0.15 - swing * 0.12],
    legs: [Math.PI / 2 + 0.12, Math.PI / 2 - 0.12],
    y: Math.sin(phase * Math.PI * 4) * 8,
  };
}

function pointPose(phase) {
  const swing = Math.sin(phase * Math.PI * 2);
  return {
    arms: [Math.PI * 0.95, -Math.PI * 0.05 + swing * 0.08],
    legs: [Math.PI / 2 + 0.12, Math.PI / 2 - 0.12],
    y: Math.sin(phase * Math.PI * 2) * 4,
  };
}

function talkPose(phase) {
  const swing = Math.sin(phase * Math.PI * 2);
  return {
    arms: [Math.PI * 0.75 + swing * 0.25, Math.PI * 0.2],
    legs: [Math.PI / 2 + 0.12, Math.PI / 2 - 0.12],
    y: 0,
  };
}

function worriedPose(phase) {
  const shiver = Math.sin(phase * Math.PI * 8) * 0.04;
  return {
    arms: [Math.PI * 0.95 + shiver, Math.PI * 0.05 - shiver],
    legs: [Math.PI / 2 + 0.08, Math.PI / 2 - 0.08],
    y: Math.sin(phase * Math.PI * 2) * 5,
    headTilt: shiver * 40,
  };
}

function deskPose(phase) {
  return {
    arms: [Math.PI * 0.95, Math.PI * 0.35 + Math.sin(phase * Math.PI * 2) * 0.08],
    legs: [Math.PI / 2 + 0.1, Math.PI / 2 - 0.1],
    y: Math.sin(phase * Math.PI * 2) * 3,
    headTilt: Math.sin(phase * Math.PI * 2) * 8,
  };
}

export const SCENE_NAMES = [
  'hook-worried',
  'hook-laptop',
  'hook-crowd',
  'hook-opportunity',
  'manager-talk',
  'audience-lineup',
  'action-start',
  'cta-point',
];

export function drawScene(name, ctx, t) {
  const phase = t;

  switch (name) {
    case 'hook-worried': {
      const p = worriedPose(phase);
      stickman(ctx, 700, 640 + p.y, 1.15, 'worried', p.arms, p.legs, p.headTilt);
      robot(ctx, 1220, 640, 1.15, phase);
      bubble(ctx, 760, 160, 400, 'Will AI replace me?');
      motionLines(ctx, 1220, 500, 3, 1, phase);
      break;
    }
    case 'hook-laptop': {
      laptop(ctx, 760, 520, 400, 180);
      const p = deskPose(phase);
      stickman(ctx, 960, 700 + p.y, 1.05, 'overwhelmed', p.arms, p.legs, p.headTilt);
      bubble(ctx, 1180, 220, 340, 'Too much. Cannot start.');
      break;
    }
    case 'hook-crowd': {
      const xs = [480, 720, 960, 1200, 1440];
      const expr = ['worried', 'thinking', 'overwhelmed', 'thinking', 'worried'];
      xs.forEach((x, i) => {
        const p = standPose(phase, i * 0.7);
        stickman(ctx, x, 640 + p.y, 0.85, expr[i], p.arms, p.legs);
      });
      bubble(ctx, 700, 180, 520, 'Using AI alone. Zero employer training.');
      break;
    }
    case 'hook-opportunity': {
      const p = celebratePose(phase);
      stickman(ctx, 760, 640 + p.y, 1.15, 'happy', p.arms, p.legs);
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(1120, 520);
      ctx.lineTo(1120, 380);
      ctx.lineTo(1040, 430);
      ctx.moveTo(1120, 380);
      ctx.lineTo(1200, 430);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(1120, 340, 55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.font = 'bold 30px sans-serif';
      ctx.fillStyle = ACCENT;
      ctx.textAlign = 'center';
      ctx.fillText('GAP', 1120, 352);
      break;
    }
    case 'manager-talk': {
      const left = talkPose(phase);
      const right = standPose(phase, 1);
      stickman(ctx, 620, 640 + left.y, 1.05, 'confident', left.arms, left.legs);
      stickman(ctx, 1040, 640 + right.y, 1.05, 'neutral', right.arms, right.legs);
      bubble(ctx, 500, 220, 360, 'Can we use AI tools?');
      bubble(ctx, 980, 220, 320, 'Smart question.');
      break;
    }
    case 'audience-lineup': {
      const roles = [
        ['Admin', 420],
        ['Marketing', 640],
        ['CS', 860],
        ['PM', 1080],
        ['You', 1300],
      ];
      roles.forEach(([label, x], i) => {
        const p = i === 4 ? celebratePose(phase + i * 0.1) : standPose(phase, i * 0.5);
        stickman(
          ctx,
          x,
          640 + p.y,
          0.8,
          i === 4 ? 'happy' : 'confident',
          p.arms,
          p.legs,
        );
        ctx.font = '22px sans-serif';
        ctx.fillStyle = MUTED;
        ctx.textAlign = 'center';
        ctx.fillText(label, x, 780);
      });
      break;
    }
    case 'action-start': {
      const p = runPose(phase);
      stickman(ctx, 760 + p.x, 640 + p.y, 1.15, 'happy', p.arms, p.legs);
      motionLines(ctx, 620, 660, 4, -1, phase);
      ctx.lineWidth = 4;
      ctx.strokeRect(1040, 380, 360, 260);
      ctx.font = '28px sans-serif';
      ctx.fillStyle = MUTED;
      ctx.textAlign = 'center';
      ctx.fillText('Day 1 → Day 30', 1220, 470);
      ctx.fillStyle = ACCENT;
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText('Plan, not panic', 1220, 560);
      break;
    }
    case 'cta-point': {
      const p = pointPose(phase);
      stickman(ctx, 720, 640 + p.y, 1.15, 'confident', p.arms, p.legs);
      ctx.lineWidth = 4;
      ctx.strokeRect(980, 420, 320, 380);
      ctx.font = 'bold 34px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('AI-Proof Playbook', 1140, 590);
      ctx.fillStyle = ACCENT;
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText('Link in description', 960, 920);
      break;
    }
    default:
      break;
  }
}
