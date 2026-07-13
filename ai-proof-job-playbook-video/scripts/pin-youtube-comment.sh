#!/usr/bin/env bash
set -euo pipefail

VIDEO_ID="${1:-svqyoEKuRBA}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
COMMENT_FILE="$ROOT/scripts/youtube-upload-pinned-comment.txt"
STUDIO_URL="https://studio.youtube.com/video/${VIDEO_ID}/comments/inbox"

echo "Opening YouTube Studio comments for video ${VIDEO_ID}..."
xdg-open "$STUDIO_URL" >/dev/null 2>&1 || true

echo
echo "1. In Studio, paste this comment and click Post:"
echo
cat "$COMMENT_FILE"
echo
echo "2. Click the three dots on your new comment -> Pin"
