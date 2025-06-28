// service-worker.js

self.addEventListener('install', event => {
  // تخطي انتظار التثبيت القديم
  self.skipWaiting();
  console.log('[SW] Installed and skipWaiting');
});

self.addEventListener('activate', event => {
  // السيطرة على العملاء فورًا بعد التفعيل
  event.waitUntil(self.clients.claim());
  console.log('[SW] Activated and claimed');
});

self.addEventListener('fetch', event => {
  // دائماً جلب من الشبكة لتحديث المحتوى
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
