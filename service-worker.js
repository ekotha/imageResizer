const cacheName = 'image-resizer-v1';
const cacheAssets = [
  '/',
  'index.html',
  'script.js',
  'icon.png',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
