// Cache version — update this string any time you change app files
const CACHE = 'mku-mks-v' + new Date().toISOString().slice(0, 10);

const STATIC = [
  '/mku-sales-app/',
  '/mku-sales-app/index.html',
  '/mku-sales-app/sales.css',
  '/mku-sales-app/sales.js',
  '/mku-sales-app/products.js',
  '/mku-sales-app/stock_map.js',
  '/mku-sales-app/manifest.json',
  '/mku-sales-app/logo-mku-mks.png',
  '/mku-sales-app/icon-192.png',
];

// Install — cache static files
self.addEventListener('install', e => {
  self.skipWaiting(); // activate immediately
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC))
  );
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - data_sales.js and data.js → always network first (must be fresh)
// - everything else → cache first
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Always fetch data files fresh from network
  if (url.includes('data_sales.js') || url.includes('data.js')) {
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

  // Cache first for everything else
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
  );
});
