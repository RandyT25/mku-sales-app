const CACHE = 'mku-mks-sales-v1';
const STATIC = [
  '/mku-sales-app/',
  '/mku-sales-app/index.html',
  '/mku-sales-app/sales.css',
  '/mku-sales-app/sales.js',
  '/mku-sales-app/products.js',
  '/mku-sales-app/stock_map.js',
  '/mku-sales-app/manifest.json',
  '/mku-sales-app/icon-192.png',
  '/mku-sales-app/icon-512.png',
  '/mku-sales-app/logo-mku-mks.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // For data.js (dashboard repo) — network first, fallback to cache
  if (e.request.url.includes('raw.githubusercontent.com')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // For everything else — cache first, fallback to network
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
