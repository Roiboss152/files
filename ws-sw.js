/* 월드센스 × KT — 대표 휴대폰 알림 조각 (v1.01, 2026-11-20 — 기본 제목 'KT 상담 요청'). ws.html 대표 화면이 등록한다. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('push', (e) => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'KT 상담 요청', {
    body: d.body || '', tag: d.tag || 'ws-' + Date.now(), renotify: true, vibrate: [120, 60, 120],
    data: { url: d.url || '/ws.html#admin' }
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/ws.html#admin';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((ws) => {
    for (const w of ws) { if (w.url.indexOf('/ws.html') >= 0 && 'focus' in w) { w.navigate(url).catch(() => {}); return w.focus(); } }
    return self.clients.openWindow(url);
  }));
});
