/* AlagaLegal PH – Fault-Tolerant Offline Service Worker with Offline MP3 Audio Support */
const CACHE_VERSION = 'alagalegal-ph-v1.2.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DATA_CACHE = `${CACHE_VERSION}-data`;

const CORE_SHELL_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './favicon.svg',
  './css/styles.css',
  './js/storage.js',
  './js/accessibility.js',
  './js/navigation.js',
  './js/legal-guides.js',
  './js/checklist.js',
  './js/app.js'
];

const OPTIONAL_MEDIA_ASSETS = [
  './audio/full_5min_tagalog_guide.mp3',
  './favicon.ico',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const DATA_ASSETS = [
  './data/legal-guides.json',
  './data/documents.json',
  './data/legal-aid.json',
  './data/faqs.json'
];

async function createPartialRangeResponse(request, cachedResponse) {
  const rangeHeader = request.headers.get('range');
  if (!rangeHeader) return cachedResponse;

  const buffer = await cachedResponse.arrayBuffer();
  const totalBytes = buffer.byteLength;
  const match = /bytes=(\d+)-(\d*)/.exec(rangeHeader);
  if (!match) return cachedResponse;

  const start = Number(match[1]);
  const end = match[2] ? Math.min(Number(match[2]), totalBytes - 1) : totalBytes - 1;

  if (start >= totalBytes || start > end) {
    return new Response(null, {
      status: 416,
      statusText: 'Range Not Satisfiable',
      headers: { 'Content-Range': `bytes */${totalBytes}` }
    });
  }

  const sliced = buffer.slice(start, end + 1);
  return new Response(sliced, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${totalBytes}`,
      'Content-Length': String(sliced.byteLength),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(async (cache) => {
        await cache.addAll(CORE_SHELL_ASSETS);
        await Promise.allSettled(
          OPTIONAL_MEDIA_ASSETS.map((asset) => cache.add(asset).catch(() => null))
        );
      }),
      caches.open(DATA_CACHE).then((cache) => cache.addAll(DATA_ASSETS))
    ])
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DATA_CACHE)
          .map((oldKey) => caches.delete(oldKey))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Handle HTML5 <audio> byte-range requests cleanly offline & online
  if (request.headers.has('range')) {
    event.respondWith(
      caches.match(request.url).then(async (cached) => {
        if (cached) {
          return createPartialRangeResponse(request, cached);
        }
        return fetch(request);
      })
    );
    return;
  }

  // Network-first for JSON legal datasets so updated guides sync when online
  if (url.pathname.includes('/data/') && url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(DATA_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Navigation requests: serve cached index.html or custom offline.html fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedIndex = await caches.match('./index.html');
          return cachedIndex || caches.match('./offline.html');
        })
    );
    return;
  }

  // Cache-first for static assets & MP3 audio
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./offline.html'));
    })
  );
});