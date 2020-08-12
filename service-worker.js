importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.routing.registerRoute(
  // Cache style resources, i.e. CSS files.
  /\.(?:css|js)$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    "cacheName": 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|mp4)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    "cacheName": 'image-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Cache only 20 images.
        maxEntries: 50,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);