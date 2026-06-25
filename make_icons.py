from PIL import Image, ImageDraw
import math, os

OUT = os.path.join(os.path.dirname(__file__), "icons")
os.makedirs(OUT, exist_ok=True)

TERRA = (199, 93, 60)
TERRA2 = (177, 74, 46)
OLIVE = (62, 96, 67)
CREAM = (251, 246, 238)
GOLD = (220, 170, 90)

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def gradient(size):
    img = Image.new("RGB", (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)          # diagonal
            top = lerp(TERRA, TERRA2, min(1, t * 1.4))
            col = lerp(top, OLIVE, t)
            px[x, y] = col
    return img

def rounded_mask(size, radius):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m

def draw_motif(img, scale, cx_off=0.0, cy_off=0.0):
    """Sun + layered mountains over a warm ground, centered."""
    s = img.size[0]
    d = ImageDraw.Draw(img, "RGBA")
    base = s * (0.74 + cy_off)             # horizon baseline

    # Sun (soft cream disc)
    r = s * 0.082
    sun_x, sun_y = s * 0.665, s * 0.345
    d.ellipse([sun_x - r, sun_y - r, sun_x + r, sun_y + r], fill=(251, 246, 238, 240))

    # Back ridge (muted)
    d.polygon([(s*0.06, base), (s*0.37, s*0.36), (s*0.66, base)], fill=(243, 232, 214, 205))
    # Front peak (cream)
    d.polygon([(s*0.37, base), (s*0.655, s*0.255), (s*0.96, base)], fill=(251, 246, 238, 255))
    # Snow cap zig-zag on the front peak
    peak_x, peak_y = s*0.655, s*0.255
    d.polygon([(peak_x, peak_y),
               (peak_x - s*0.055, peak_y + s*0.10),
               (peak_x - s*0.022, peak_y + s*0.068),
               (peak_x + s*0.010, peak_y + s*0.105),
               (peak_x + s*0.040, peak_y + s*0.072),
               (peak_x + s*0.058, peak_y + s*0.10)], fill=(255, 255, 255, 255))

    # Warm ground band below the horizon (deep olive, keeps icon from going white)
    grad_bottom = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grad_bottom)
    for i, y in enumerate(range(int(base), s)):
        t = (y - base) / max(1, (s - base))
        col = lerp((74, 110, 78), (54, 84, 60), t)
        gd.line([(0, y), (s, y)], fill=col + (255,))
    img.alpha_composite(grad_bottom)
    # thin highlight at horizon
    d.rectangle([0, base - max(1, s//220), s, base], fill=(255, 255, 255, 70))

def make(size, radius_ratio=0.22, maskable=False, name="icon.png"):
    img = gradient(size).convert("RGBA")
    if maskable:
        # full-bleed, motif kept within safe zone (~80%)
        draw_motif(img, 1.0, cy_off=-0.02)
    else:
        draw_motif(img, 1.0)
        mask = rounded_mask(size, int(size * radius_ratio))
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        out.paste(img, (0, 0), mask)
        img = out
    img.save(os.path.join(OUT, name))
    print("wrote", name, size)

make(192, name="icon-192.png")
make(512, name="icon-512.png")
make(512, maskable=True, name="icon-maskable-512.png")
# Apple touch icon (no transparency, square-ish with rounding handled by iOS)
make(180, radius_ratio=0.0, name="apple-touch-180.png")
print("done")
