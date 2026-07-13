#!/usr/bin/env python3
"""Download category hero images for guide pages (Pexels, free license)."""
from __future__ import annotations

import json
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public/guides/images"

# One image per guide category
CATEGORY_PHOTOS = {
    "fasting": {"id": "4056535", "photographer": "MART PRODUCTION"},
    "insulin-resistance": {"id": "1640777", "photographer": "Ella Olsson"},
    "metabolic-health": {"id": "1095550", "photographer": "Dana Tentis"},
}

PEXELS_URL = (
    "https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"
    "?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"
)


def download(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "metaboliclowcarb-guide-images/1.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest: dict[str, dict[str, str]] = {}

    for category, meta in CATEGORY_PHOTOS.items():
        url = PEXELS_URL.format(photo_id=meta["id"])
        print(f"Downloading {category} <- Pexels {meta['id']} …")
        raw = download(url)
        img = ImageOps.exif_transpose(Image.open(BytesIO(raw)))
        img = ImageOps.fit(img, (1200, 630), method=Image.Resampling.LANCZOS)
        out_path = OUT_DIR / f"{category}.jpg"
        img.save(out_path, "JPEG", quality=88, optimize=True)
        manifest[category] = {
            "path": f"/guides/images/{category}.jpg",
            "source": "Pexels",
            "photoId": meta["id"],
            "photographer": meta["photographer"],
            "url": f"https://www.pexels.com/photo/{meta['id']}/",
        }

    manifest_path = OUT_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"Saved {len(CATEGORY_PHOTOS)} guide category images")


if __name__ == "__main__":
    main()
