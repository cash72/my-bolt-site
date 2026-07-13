#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIDEO="$ROOT/output/ai-proof-job-playbook-promo-short.mp4"
THUMB="$ROOT/reference/thumbnail.jpg"
TITLE="Worried AI Will Replace Your Job? 30-Day Plan #Shorts"

echo "=== YouTube Short upload ==="
echo
echo "Video: $VIDEO"
echo "Title: $TITLE"
echo
echo "Opening YouTube Studio upload..."
xdg-open "https://studio.youtube.com/channel/upload" >/dev/null 2>&1 || true
sleep 1
xdg-open "$ROOT/output" >/dev/null 2>&1 || true

echo
echo "--- TITLE ---"
echo "$TITLE"
echo
echo "--- DESCRIPTION ---"
cat "$ROOT/scripts/youtube-short-upload-description.txt"
echo
echo "Notes:"
echo "  Upload the SHORT file (1080x1920 vertical)"
echo "  YouTube will auto-detect it as a Short"
echo "  Thumbnail: optional for Shorts; use reference/thumbnail.jpg if offered"
echo "  Audience: Not made for kids | Visibility: Public"
