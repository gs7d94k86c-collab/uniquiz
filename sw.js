const CACHE_NAME = 'uniquiz-v5-antigravity-v9';
const APP_FILES = [
  "./",
  "./index.html",
  "./assets/styles.css",
  "./assets/apple-touch-icon.png",
  "./assets/icon-512.png",
  "./data/catalog.js",
  "./data/psicologia/closed.js",
  "./data/psicologia/open.js",
  "./data/storia/closed.js",
  "./data/storia/open.js",
  "./data/filosofia/closed.js",
  "./data/filosofia/open.js",
  "./data/cybercrime/closed.js",
  "./data/cybercrime/open.js",
  "./data/diritto_romano/closed.js",
  "./data/diritto_romano/open.js",
  "./data/diritto_processuale_civile/closed.js",
  "./data/diritto_processuale_civile/open.js",
  "./data/modules.js",
  "./js/app.js",
  "./manifest.webmanifest"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
    )),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html'))),
  );
});
