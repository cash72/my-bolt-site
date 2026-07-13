# AI-Proof Job Playbook — YouTube Promo Video

Generate a voiceover + slide promo video for [The 2026 AI-Proof Job Playbook](https://cashflow552.gumroad.com/l/ai-proof-job-playbook).

## Step 1: Download the PDF from Gumroad

You're not logged into Gumroad in the browser session here, so download the file manually:

1. Log in at [gumroad.com/login](https://gumroad.com/login)
2. Open **Products** → **The 2026 AI-Proof Job Playbook**
3. In the product editor, open the **Content** tab and download the PDF  
   *(or open your [Library](https://app.gumroad.com/library) if you purchased your own copy)*
4. Save it as:

```
assets/playbook.pdf
```

(Already copied from `~/Documents/1-playbook.pdf`.)

Optional — extract preview page images for a longer “inside the playbook” cut:

```bash
npm run pdf
npm run video:preview
```

This creates `output/ai-proof-job-playbook-promo-with-preview.mp4` with real PDF pages in the middle.

## Step 2: Install dependencies

```bash
cd ai-proof-job-playbook-video
npm install
```

## Step 3: Generate the promo video

```bash
npm run all
```

Output: `output/ai-proof-job-playbook-promo.mp4`

Individual steps:

| Command | What it does |
|---------|----------------|
| `npm run voice` | Creates AI voiceover (`assets/voiceover.mp3`) |
| `npm run slides` | Renders 6 marketing slides |
| `npm run video` | Combines slides + voiceover with ffmpeg |

## Step 4: Upload to YouTube

Use the copy in `scripts/youtube-metadata.md` for title, description, tags, and pinned comment.

**Product link for description:**

https://cashflow552.gumroad.com/l/ai-proof-job-playbook

## Customize

- Edit `scripts/youtube-short-script.txt` before running `npm run voice`
- Edit slide content in `scripts/generate-slides.mjs`
- Swap voice in `scripts/generate-voiceover.mjs` (e.g. `en-US-GuyNeural`)

## Notes

- Voice uses Microsoft Edge TTS (free, no API key)
- Video is 1920×1080 — good for YouTube; crop to 9:16 in YouTube Studio for Shorts
- Price shown on Gumroad: ~$14 USD / ~CA$19.90
