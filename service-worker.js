self.addEventListener('install', function (event) {
  console.log('[Service Worker] تم التثبيت');
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] تم التفعيل');
});

self.addEventListener('fetch', function (event) {
  // حالياً لا يتم تخزين المحتوى، فقط تمرير الطلبات
  return;
});
