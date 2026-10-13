#!/usr/bin/env python3
"""Generate the original three-block I Me Mine icon for the Capacitor iOS asset catalog."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
img = Image.new("RGB", (SIZE, SIZE), "#ffffff")
draw = ImageDraw.Draw(img)
# Original identity: blue I, pink me, green mine, on white.
tiles = [
    (46, 348, 258, 674, "#2862f1", "I"),
    (280, 348, 565, 674, "#ed4398", "me"),
    (587, 348, 978, 674, "#1da66d", "mine"),
]
font_path = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
if not Path(font_path).exists():
    font_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
for x0, y0, x1, y1, color, label in tiles:
    draw.rounded_rectangle((x0, y0, x1, y1), radius=62, fill=color)
    font_size = 178 if label == "mine" else 202
    font = ImageFont.truetype(font_path, font_size)
    # Use a shared typographic baseline instead of centering each word's
    # individual bounding box. Different word shapes and font sizes otherwise
    # make "me" appear to float above "mine".
    baseline_y = 565
    draw.text(((x0 + x1) / 2, baseline_y), label, font=font,
              anchor="ms", fill="white")
out = Path("ios/App/App/Assets.xcassets/AppIcon.appiconset")
out.mkdir(parents=True, exist_ok=True)
img.save(out / "AppIcon-512@2x.png", format="PNG")
(out / "Contents.json").write_text('{"images":[{"filename":"AppIcon-512@2x.png","idiom":"universal","platform":"ios","size":"1024x1024"}],"info":{"author":"xcode","version":1}}\n')
print("Created 1024x1024 I Me Mine app icon")
