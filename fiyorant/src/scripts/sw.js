import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'restaurant-apps',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url:
        'https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap',
      revision: 1,
    },
    {
      url: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
  new StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 1000,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com' ||
               url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 1000,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://maxcdn.bootstrapcdn.com',
  new StaleWhileRevalidate({
    cacheName: 'maxcdn-bootstrapcdn',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 1000,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

cleanupOutdatedCaches();
