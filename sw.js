/* Service worker — איטליה 2026
   Strategy: network-first for app code (always fresh online),
   cache fallback for offline. Fonts cache-first. */
const CACHE = "italy26-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/data.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./photos/family-hero.jpg",
  "./docs/flight-elal.pdf",
  "./docs/car-europcar.pdf",
  "./docs/lodging-milan.pdf",
  "./docs/lodging-garda.pdf",
  "./docs/lodging-dolomites.pdf",
  "./docs/itinerary-draft.jpg",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))  // tolerate any single miss
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: cache-first (they rarely change)
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      try { const res = await fetch(req); c.put(req, res.clone()); return res; } catch { return hit; }
    }));
    return;
  }

  // Same-origin app code: NETWORK-FIRST → fresh when online, cache when offline
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
  }
});
