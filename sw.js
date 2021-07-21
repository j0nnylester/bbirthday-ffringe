const cacheName = 'bbff_2021_07'
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(
        [
          './about.html',
          './bbff_128.png',
          './bbff_512.png',
          './bbff_mask.png',
          './food.html',
          './index.css',
          './whatson.html',
          './index.js',
          './venues.html'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});