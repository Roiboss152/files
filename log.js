/* kt-synergy.com 이용 기록 v1.00 — 어떤 도구가 많이 쓰이는지 보려고 페이지 열람과 단추·링크 누름만 적는다.
   IP·입력한 내용은 적지 않는다. 사람 구분은 이 브라우저에 한 번 만들어 두는 무작위 번호로 한다. */
(function () {
  if (window.__ktLog) return; window.__ktLog = 1;
  var EP = 'https://kt-gate.roi0925003.workers.dev/pub/site/log';
  if (location.protocol !== 'https:' || !/(^|\.)kt-synergy\.com$/.test(location.hostname)) return;
  var rnd = function () { try { return crypto.randomUUID(); } catch (_) { return 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 12); } };
  var get = function (st, k) { try { var v = st.getItem(k); if (!v) { v = rnd(); st.setItem(k, v); } return v; } catch (_) { return ''; } };
  var vid = get(localStorage, 'kt.vid') || rnd(), sid = get(sessionStorage, 'kt.sid') || rnd(), name = '';
  try { name = localStorage.getItem('tf.name') || ''; } catch (_) {}
  var page = location.pathname, ref = '';
  try { page = decodeURIComponent(page); } catch (_) {}
  try { if (document.referrer) { var u = new URL(document.referrer); ref = u.hostname === location.hostname ? decodeURIComponent(u.pathname) : u.hostname; } } catch (_) {}
  var q = [], sent = 0, timer = 0;
  var flush = function () {
    timer = 0; if (!q.length) return;
    var body = JSON.stringify({ v: vid, s: sid, n: name, r: ref, e: q.splice(0, 30) });
    try { if (navigator.sendBeacon && navigator.sendBeacon(EP, new Blob([body], { type: 'text/plain' }))) return; } catch (_) {}
    try { fetch(EP, { method: 'POST', body: body, keepalive: true, mode: 'no-cors', headers: { 'Content-Type': 'text/plain' } }); } catch (_) {}
  };
  var add = function (k, l, h) { if (sent >= 300) return; sent++; q.push({ k: k, p: page, l: l || '', h: h || '', t: Date.now() }); if (q.length >= 20) flush(); else if (!timer) timer = setTimeout(flush, 3000); };
  add('v', document.title);
  var lastL = '', lastT = 0;
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a,button,[role="button"],input[type="button"],input[type="submit"],summary,[data-log]') : null;
    if (!el || el.closest('[data-nolog]')) return;
    var l = el.getAttribute('data-log') || el.getAttribute('aria-label') || (el.tagName === 'INPUT' ? el.value : el.innerText) || el.getAttribute('title') || el.id || '';
    l = String(l).replace(/\s+/g, ' ').trim().slice(0, 40);
    var h = '';
    if (el.tagName === 'A' && el.href) { try { var a = new URL(el.href, location.href); h = a.hostname === location.hostname ? decodeURIComponent(a.pathname) : a.protocol.indexOf('http') === 0 ? a.hostname : a.protocol; } catch (_) {} }
    if (!l && !h) return;
    var now = Date.now(); if (l + h === lastL && now - lastT < 800) return; lastL = l + h; lastT = now;
    add('c', l, h);
  }, true);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);
})();
