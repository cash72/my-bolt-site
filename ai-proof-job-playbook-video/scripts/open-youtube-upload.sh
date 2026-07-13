#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIDEO="$ROOT/output/ai-proof-job-playbook-promo-with-preview.mp4"
THUMB="$ROOT/reference/thumbnail.jpg"
TITLE="Worried AI Will Replace Your Job? Do This 30-Day Plan (2026 Playbook)"
DESC_FILE="$ROOT/scripts/youtube-upload-description.txt"
PIN_FILE="$ROOT/scripts/youtube-upload-pinned-comment.txt"

echo "=== YouTube upload package ==="
echo
echo "Video:  $VIDEO"
echo "Thumb:  $THUMB"
echo "Title:  $TITLE"
echo
echo "Opening YouTube Studio upload page..."
xdg-open "https://studio.youtube.com/channel/upload" >/dev/null 2>&1 || true
sleep 1
xdg-open "$ROOT/output" >/dev/null 2>&1 || true

echo
echo "Paste these during upload:"
echo
echo "--- TITLE ---"
echo "$TITLE"
echo
echo "--- DESCRIPTION ---"
cat "$DESC_FILE"
echo
echo "--- TAGS ---"
echo "AI job security, future of work, career advice 2026, AI proof career, office worker AI, ChatGPT at work, job anxiety AI, upskilling, LinkedIn tips, resume tips, project manager career, customer success career, AI playbook, career planning"
echo
echo "--- PINNED COMMENT (after publish) ---"
cat "$PIN_FILE"
echo
echo "Studio settings:"
echo "  Category: Education"
echo "  Audience: Not made for kids"
echo "  Visibility: Public"
echo "  Thumbnail: upload reference/thumbnail.jpg after processing finishes"
