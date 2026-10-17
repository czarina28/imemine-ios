#!/usr/bin/env python3
"""Generate a balanced three-block I Me Mine iOS app icon."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
img = Image.new("RGB", (SIZE, SIZE), "#ffffff")
draw = ImageDraw.Draw(img)
# Equal-height blocks, proportional widths, consistent gaps and text padding.
tiles = [
    (80, 355, 325, 669, "#2862f1", "I"),
    (341, 355, 626, 669, "#ed4398", "me"),
    (642, 355, 944, 669, "#1da66d", "mine"),
]
font_candidates = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
font_path = next((p for p in font_candidates if Path(p).exists()), None)
if font_path is None:
    raise FileNotFoundError("A bold TrueType font is required for icon generation")

for x0, y0, x1, y1, color, label in tiles:
    draw.rounded_rectangle((x0, y0, x1, y1), radius=65, fill=color)
    # Fit each word to a generous minimum horizontal inset.
    max_width = x1 - x0 - 48
    font_size = 190
    while font_size > 40:
        font = ImageFont.truetype(font_path, font_size)
        if draw.textbbox((0, 0), label, font=font)[2] <= max_width:
            break
        font_size -= 2
    bbox = draw.textbbox((0, 0), label, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (x0 + x1 - text_width) / 2 - bbox[0]
    y = (y0 + y1 - text_height) / 2 - bbox[1]
    draw.text((x, y), label, font=font, fill="white")

out = Path("ios/App/App/Assets.xcassets/AppIcon.appiconset")
out.mkdir(parents=True, exist_ok=True)
img.save(out / "AppIcon-512@2x.png", format="PNG")
(out / "Contents.json").write_text('{"images":[{"filename":"AppIcon-512@2x.png","idiom":"universal","platform":"ios","size":"1024x1024"}],"info":{"author":"xcode","version":1}}\n')
print("Created 1024x1024 balanced I Me Mine app icon")
