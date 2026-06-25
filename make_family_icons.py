from PIL import Image, ImageDraw
import os

BASE = os.path.dirname(__file__)
ICONS = os.path.join(BASE, "icons")
PHOTOS = os.path.join(BASE, "photos")
os.makedirs(ICONS, exist_ok=True)

photo = Image.open(os.path.join(PHOTOS, "family.jpg")).convert("RGB")
W, H = photo.size                      # 1600 x 1200

# Square crop, centered horizontally, full height (keeps all five faces)
side = H
left = (W - side) // 2
sq = photo.crop((left, 0, left + side, H))   # 1200 x 1200

# Italian tricolore
GREEN = (0, 140, 69)
WHITE = (244, 245, 240)
RED = (205, 33, 42)

def rounded_mask(size, radius):
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m

def add_tricolore(img, size):
    """Slim tricolore bar along the bottom with a soft scrim above it."""
    d = ImageDraw.Draw(img, "RGBA")
    bar_h = max(6, int(size * 0.060))
    y0 = size - bar_h
    # soft dark scrim so the bar reads cleanly over the photo
    scrim_h = int(size * 0.16)
    for i in range(scrim_h):
        y = size - bar_h - scrim_h + i
        a = int(90 * (i / scrim_h))
        d.line([(0, y), (size, y)], fill=(20, 14, 10, a))
    w3 = size / 3.0
    d.rectangle([0, y0, w3, size], fill=GREEN + (255,))
    d.rectangle([w3, y0, 2 * w3, size], fill=WHITE + (255,))
    d.rectangle([2 * w3, y0, size, size], fill=RED + (255,))

def make(size, name, maskable=False):
    img = sq.resize((size, size), Image.LANCZOS).convert("RGBA")
    add_tricolore(img, size)
    if not maskable:
        mask = rounded_mask(size, int(size * 0.225))
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        out.paste(img, (0, 0), mask)
        img = out
    img.save(os.path.join(ICONS, name))
    print("wrote", name, size)

make(192, "icon-192.png")
make(512, "icon-512.png")
make(512, "icon-maskable-512.png", maskable=True)
make(180, "apple-touch-180.png", maskable=True)   # iOS rounds it itself

# Hero image for the home screen (landscape, optimized)
hero_w = 1080
hero = photo.resize((hero_w, int(H * hero_w / W)), Image.LANCZOS)
hero.save(os.path.join(PHOTOS, "family-hero.jpg"), quality=82, optimize=True)
print("wrote family-hero.jpg", hero.size)
print("done")
