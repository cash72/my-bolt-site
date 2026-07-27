#!/usr/bin/env python3
"""Download free Pexels food photos for each recipe slug."""
from __future__ import annotations

import json
import re
import urllib.request
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RECIPES_TS = ROOT / "src/lib/recipes/recipes.ts"
OUT_DIR = ROOT / "public/recipes/images"
MANIFEST_PATH = OUT_DIR / "manifest.json"
SRC_MANIFEST = ROOT / "src/lib/recipes/imageManifest.json"

# Curated Pexels photo IDs — free to use (https://www.pexels.com/license/)
RECIPE_PHOTOS: dict[str, dict[str, str]] = {
    "scrambled-eggs-spinach": {"id": "37547474", "photographer": "Aleyna Yetkin"},
    "chicken-salad-lettuce-cups": {"id": "29208504", "photographer": "Fernanda da Silva Lopes"},
    "baked-salmon-broccoli": {"id": "5864586", "photographer": "Rachel Claire"},
    "cauliflower-rice-stir-fry": {"id": "7974813", "photographer": "Mateusz Feliksik"},
    "greek-yogurt-berries": {"id": "6133458", "photographer": "Regina Ferraz"},
    "taco-bowl-no-tortilla": {"id": "32536642", "photographer": "Calvin Seng"},
    "egg-muffins": {"id": "34501152", "photographer": "İdil Ceren Çelikler"},
    "zucchini-noodles-meat-sauce": {"id": "6123074", "photographer": "Jenna Hamra"},
    "cottage-cheese-cucumber": {"id": "4198142", "photographer": "Kaboompics"},
    "sheet-pan-sausage-peppers": {"id": "38085042", "photographer": "vikesh zen"},
    "avocado-egg-boats": {"id": "33009983", "photographer": "Vero Lova"},
    "smoked-salmon-cream-cheese-roll-ups": {"id": "35144163", "photographer": "Jean-Francois Frenel"},
    "turkey-avocado-roll-ups": {"id": "29535640", "photographer": "Nano Erdozain"},
    "tuna-salad-stuffed-peppers": {"id": "37297749", "photographer": "Gu Ko"},
    "steak-salad-arugula": {"id": "31846558", "photographer": "PEEP THIS PHOTO"},
    "lemon-garlic-chicken-thighs": {"id": "24902945", "photographer": "FOX"},
    "pork-chops-green-beans": {"id": "724298", "photographer": "Cats Coming"},
    "shrimp-garlic-butter-zucchini": {"id": "5597691", "photographer": "Kenan Giffard"},
    "hard-boiled-eggs-everything-seasoning": {"id": "806457", "photographer": "Mona Sabha Cabrera"},
    "cheese-olive-nut-plate": {"id": "11405383", "photographer": "Nadin Sh"},
    "break-fast-bone-broth-eggs": {"id": "37183920", "photographer": "Caio Niceas"},
    "chia-pudding-coconut": {"id": "5589030", "photographer": "AI25 Studio"},
    "cobb-salad-jar": {"id": "38166368", "photographer": "Ann H"},
    "shakshuka-spinach-feta": {"id": "35672951", "photographer": "Valeria Boltneva"},
    "lettuce-wrap-burger-bowl": {"id": "32536642", "photographer": "Calvin Seng"},
    "ginger-chicken-bone-broth-soup": {"id": "37183920", "photographer": "Caio Niceas"},
    "salmon-avocado-poke-bowl": {"id": "5864586", "photographer": "Rachel Claire"},
    "sheet-pan-chicken-thighs-cabbage": {"id": "24902945", "photographer": "FOX"},
}

PEXELS_URL = (
    "https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"
    "?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
)
TARGET_SIZE = (1200, 800)


def parse_recipe_slugs() -> list[str]:
    text = RECIPES_TS.read_text(encoding="utf-8")
    return re.findall(r"slug:\s*'([^']+)'", text)


def download(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "metaboliclowcarb-recipe-images/1.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()


def save_recipe_image(slug: str, raw: bytes) -> None:
    # Lazy import so CI can reuse committed images without Pillow installed.
    from PIL import Image, ImageOps

    img = Image.open(BytesIO(raw))
    img = ImageOps.exif_transpose(img)
    img = ImageOps.fit(img, TARGET_SIZE, method=Image.Resampling.LANCZOS)
    out_path = OUT_DIR / f"{slug}.jpg"
    img.save(out_path, "JPEG", quality=88, optimize=True)


def load_existing_manifest() -> dict[str, dict[str, str]]:
    for path in (SRC_MANIFEST, MANIFEST_PATH):
        if path.is_file():
            try:
                data = json.loads(path.read_text(encoding="utf-8"))
                if isinstance(data, dict):
                    return data
            except json.JSONDecodeError:
                pass
    return {}


def download_with_retries(url: str, attempts: int = 3) -> bytes:
    last_err: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            return download(url)
        except Exception as err:  # noqa: BLE001 — network errors vary
            last_err = err
            print(f"  retry {attempt}/{attempts}: {err}")
    assert last_err is not None
    raise last_err


def main() -> None:
    slugs = parse_recipe_slugs()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    missing = [slug for slug in slugs if slug not in RECIPE_PHOTOS]
    if missing:
        raise SystemExit(f"Missing Pexels mapping for: {', '.join(missing)}")

    existing_manifest = load_existing_manifest()
    manifest: dict[str, dict[str, str]] = {}
    skipped = 0
    downloaded = 0

    cached_slugs = [
        slug
        for slug in slugs
        if (OUT_DIR / f"{slug}.jpg").is_file() and (OUT_DIR / f"{slug}.jpg").stat().st_size > 10_000
    ]
    if len(cached_slugs) == len(slugs):
        for slug in slugs:
            meta = RECIPE_PHOTOS[slug]
            manifest[slug] = existing_manifest.get(
                slug,
                {
                    "path": f"/recipes/images/{slug}.jpg",
                    "source": "Pexels",
                    "photoId": meta["id"],
                    "photographer": meta["photographer"],
                    "url": f"https://www.pexels.com/photo/{meta['id']}/",
                },
            )
        MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        SRC_MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        print(
            f"Recipe photos ready in {OUT_DIR.relative_to(ROOT)} "
            f"(downloaded 0, cached {len(slugs)}, total {len(slugs)}) — skipped network/Pillow"
        )
        return

    for slug in slugs:
        meta = RECIPE_PHOTOS[slug]
        photo_id = meta["id"]
        out_path = OUT_DIR / f"{slug}.jpg"
        entry = {
            "path": f"/recipes/images/{slug}.jpg",
            "source": "Pexels",
            "photoId": photo_id,
            "photographer": meta["photographer"],
            "url": f"https://www.pexels.com/photo/{photo_id}/",
        }

        # Reuse cached images in CI/local so flaky Pexels does not fail deploy.
        if out_path.is_file() and out_path.stat().st_size > 10_000:
            print(f"Skip {slug} (cached {out_path.stat().st_size} bytes)")
            manifest[slug] = existing_manifest.get(slug, entry)
            skipped += 1
            continue

        url = PEXELS_URL.format(photo_id=photo_id)
        print(f"Downloading {slug} <- Pexels {photo_id} …")
        try:
            raw = download_with_retries(url)
            save_recipe_image(slug, raw)
            downloaded += 1
        except Exception as err:  # noqa: BLE001
            if out_path.is_file() and out_path.stat().st_size > 10_000:
                print(f"  warn: download failed ({err}); keeping cached file")
                skipped += 1
            else:
                raise SystemExit(f"Failed to download {slug}: {err}") from err
        manifest[slug] = entry

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    SRC_MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(
        f"Recipe photos ready in {OUT_DIR.relative_to(ROOT)} "
        f"(downloaded {downloaded}, cached {skipped}, total {len(slugs)})"
    )


if __name__ == "__main__":
    main()
