const CACHE = 'byu-trip-v5';
const AUDIO_CACHE = 'byu-audio-v1';
const WEATHER_HOST = 'wttr.in';

const PRECACHE = [
  '/',
  '/index.html',
  '/images/day-1.jpg',
  '/images/day-2.jpg',
  '/images/day-3.jpg',
  '/images/day-4.jpg',
  '/images/day-5.jpg',
  '/images/day-6.jpg',
  '/images/day-7.jpg',
  '/images/day-8.jpg',
  '/images/day-9.jpg',
  '/images/day-10.jpg',
  '/images/day-11.jpg',
  '/images/day-12.jpg',
  '/images/day-13.jpg',
  '/images/day-14.jpg',
  '/images/day-15.jpg',
  '/images/day-16.jpg',
  '/images/day-17.jpg',
  '/images/day-18.jpg',
  '/images/day-19.jpg',
  '/images/day-20.jpg',
  '/images/day-21.jpg',
  '/images/day-22.jpg',
  '/images/day-23.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      // Preserve audio cache across app updates
      Promise.all(keys.filter(k => k !== CACHE && k !== AUDIO_CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Network-first for navigation so new deployments are always picked up
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Network-first for weather API
  if (url.hostname.includes(WEATHER_HOST)) {
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

  // Audio files: cache-first in a separate persistent cache so they survive app updates
  if (url.pathname.startsWith('/audio/')) {
    e.respondWith(
      caches.open(AUDIO_CACHE).then(audioCache =>
        audioCache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res.ok) audioCache.put(e.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // Cache-first for everything else (hashed JS/CSS, images)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => {
        if (e.request.mode === 'navigate') return caches.match('/index.html');
      });
    })
  );
});
