self.addEventListener('install', event => {
  console.log('🛠 Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker activated');
});

self.addEventListener('fetch', event => {
  // Basic fetch handler (optional for now)
});
