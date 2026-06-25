import os, glob
from PIL import Image
d = os.path.join(os.path.dirname(__file__), "photos", "recos")
tot = 0
files = sorted(glob.glob(os.path.join(d, "*.jpg")))
for f in files:
    im = Image.open(f).convert("RGB")
    w, h = im.size
    if w > 720:
        im = im.resize((720, int(h * 720 / w)), Image.LANCZOS)
    im.save(f, "JPEG", quality=80, optimize=True)
    kb = os.path.getsize(f) // 1024
    tot += kb
    print(f"{os.path.basename(f):20} {im.size[0]}x{im.size[1]} {kb}KB")
print("TOTAL", tot, "KB,", len(files), "files")
