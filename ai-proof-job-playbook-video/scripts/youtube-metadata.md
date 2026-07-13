# YouTube upload metadata

## Ready-to-upload files

| Item | Path |
|------|------|
| Video | `output/ai-proof-job-playbook-promo-with-preview.mp4` |
| Thumbnail | `reference/thumbnail.jpg` (1280×720) |
| Description | `scripts/youtube-upload-description.txt` |
| Pinned comment | `scripts/youtube-upload-pinned-comment.txt` |
| Full config | `scripts/youtube-upload-config.json` |

## Product link (description + pinned comment)

https://cashflow552.gumroad.com/l/ai-proof-job-playbook

## Title (use this)

**Worried AI Will Replace Your Job? Do This 30-Day Plan (2026 Playbook)**

## Tags

AI job security, future of work, career advice 2026, AI proof career, office worker AI, ChatGPT at work, job anxiety AI, upskilling, LinkedIn tips, resume tips, project manager career, customer success career, AI playbook, career planning

## YouTube Studio settings

- **Category:** Education
- **Audience:** Not made for kids
- **Visibility:** Public
- **Thumbnail:** Upload `reference/thumbnail.jpg` after processing
- **End screen (optional):** Link card → Gumroad URL above

## Quick upload

```bash
cd ai-proof-job-playbook-video
npm run upload:open
```

This opens YouTube Studio upload + the output folder and prints all copy to paste.

## API upload (optional, one-time setup)

1. Enable [YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com)
2. Create OAuth **Desktop** credentials → save as `scripts/client_secret.json`
3. Redirect URI: `http://localhost:53682/callback`
4. Run:

```bash
npm install
npm run upload:youtube
```

The script uploads the video, sets the thumbnail, posts the pinned comment, and saves the video URL to `scripts/youtube-upload-result.json`.

## Thumbnail text ideas

- "AI-PROOF YOUR JOB"
- "30-DAY PLAN"
- "2026 PLAYBOOK"
