const cacheName = 'bbff_2021_08_01'
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
          './index.js',
          './venues.html',
          './whatson.html'
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

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (name) {
          return name !== cacheName
        }).map(function (cacheName) {
          console.log('Deleting expired cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});