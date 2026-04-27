// Service worker disabled — unregister and clear all caches
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => {
        // Tell all open tabs to reload
        return self.clients.matchAll({ type: 'window' }).then(clients => {
          clients.forEach(c => c.navigate(c.url));
        });
      })
  );
});
// Pass everything through — no caching at all
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
