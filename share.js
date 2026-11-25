"use strict";
/* FreeLearn Hub — share sheet with QR code (website and app).
   Replaces the share button's click: opens a sheet with apps + QR. */
(function () {
  var SITE = "https://sbd-r.github.io/freelearnhub/";
  var APK = "https://github.com/sbd-r/freelearn-hub/releases/latest/download/freelearn-release.apk";
  var TXT = {
    bn: { t: "FreeLearn Hub শেয়ার করুন", p: "বন্ধু ও পরিবারকে জানান: ফ্রি কোর্স, বই ও সফটওয়্যার এক জায়গায়।", qr: "স্ক্যান করে নামান", qrp: "ক্যামেরা বা QR স্ক্যানারে ধরলেই অ্যাপ নামানোর লিংক খুলবে।", wa: "হোয়াটসঅ্যাপ", tg: "টেলিগ্রাম", fb: "ফেসবুক", sms: "এসএমএস", em: "ইমেইল", cp: "লিংক কপি", ot: "অন্য অ্যাপে", done: "কপি হয়েছে", close: "বন্ধ করুন", msg: "FreeLearn Hub — ফ্রি কোর্স, বই ও সফটওয়্যার এক জায়গায়।" },
    en: { t: "Share FreeLearn Hub", p: "Tell friends and family: free courses, books and software in one place.", qr: "Scan to install", qrp: "Point a phone camera or QR scanner here to open the app download.", wa: "WhatsApp", tg: "Telegram", fb: "Facebook", sms: "SMS", em: "Email", cp: "Copy link", ot: "Other apps", done: "Copied", close: "Close", msg: "FreeLearn Hub — free courses, books and software in one place." },
    hi: { t: "FreeLearn Hub शेयर करें", p: "दोस्तों और परिवार को बताएँ: मुफ़्त कोर्स, किताबें और सॉफ़्टवेयर एक जगह।", qr: "स्कैन करके इंस्टॉल करें", qrp: "कैमरा या QR स्कैनर से ऐप डाउनलोड लिंक खुलेगा।", wa: "व्हाट्सऐप", tg: "टेलीग्राम", fb: "फ़ेसबुक", sms: "एसएमएस", em: "ईमेल", cp: "लिंक कॉपी", ot: "अन्य ऐप", done: "कॉपी हो गया", close: "बंद करें", msg: "FreeLearn Hub — मुफ़्त कोर्स, किताबें और सॉफ़्टवेयर एक जगह।" },
    ur: { t: "FreeLearn Hub شیئر کریں", p: "دوستوں اور گھر والوں کو بتائیں: مفت کورسز، کتابیں اور سافٹ ویئر ایک جگہ۔", qr: "اسکین کر کے انسٹال کریں", qrp: "کیمرا یا QR اسکینر سے ایپ ڈاؤنلوڈ کا لنک کھلے گا۔", wa: "واٹس ایپ", tg: "ٹیلیگرام", fb: "فیس بک", sms: "ایس ایم ایس", em: "ای میل", cp: "لنک کاپی", ot: "دوسری ایپس", done: "کاپی ہو گیا", close: "بند کریں", msg: "FreeLearn Hub — مفت کورسز، کتابیں اور سافٹ ویئر ایک جگہ۔" }
  };
  var CSS = ".fs-scrim{position:fixed;inset:0;z-index:61;background:rgba(10,8,30,.45)}" +
    ".fs-sheet{position:fixed;left:0;right:0;bottom:0;z-index:62;max-width:560px;margin:0 auto;padding:18px 18px calc(18px + env(safe-area-inset-bottom));border-radius:22px 22px 0 0;background:var(--card,#fff);color:var(--ink,#1c1a33);box-shadow:0 -10px 40px rgba(0,0,0,.25);max-height:88vh;overflow:auto}" +
    ".fs-sheet h2{margin:0 0 4px;font-size:19px}.fs-sheet>div>p{margin:0;color:var(--mut,#65617f);font-size:14px}" +
    ".fs-head{display:flex;gap:12px;align-items:flex-start;margin-bottom:14px}" +
    ".fs-qr{display:flex;gap:14px;align-items:center;border:1px solid var(--line,#e3e0f0);border-radius:16px;padding:12px;margin-bottom:14px}" +
    ".fs-qr .fs-qb{background:#fff;border-radius:12px;padding:8px;flex:none;line-height:0}" +
    ".fs-qr b{display:block;margin-bottom:4px}.fs-qr p{margin:0;color:var(--mut,#65617f);font-size:13.5px}" +
    ".fs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}" +
    ".fs-grid button{border:1px solid var(--line,#e3e0f0);background:transparent;border-radius:14px;padding:12px 4px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;color:var(--ink,#1c1a33)}" +
    ".fs-grid i{display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:var(--line,#e3e0f0)}" +
    ".fs-grid small{font-size:12px;font-weight:600}" +
    ".fs-x{margin-top:14px;width:100%;min-height:46px;border:0;border-radius:14px;background:var(--ink,#1c1a33);color:var(--bg,#fff);font-weight:700;font-size:15px;cursor:pointer}" +
    ".fs-qb svg,.fs-qb svg *{fill:revert;stroke:none !important}.fs-qb svg rect{fill:#fff !important}.fs-qb svg path{fill:#000 !important}" +
    "@media (max-width:360px){.fs-grid{grid-template-columns:repeat(3,1fr)}}";

  var ICONS = {
    wa: "<path d='M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z'/>",
    tg: "<path d='M21 4 3.5 10.8l5.6 2.1L11 19l3.2-3.6 4.3 3.2z'/><path d='M9.1 12.9 16 7.5'/>",
    fb: "<circle cx='12' cy='12' r='9'/><path d='M3 12h18'/><path d='M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z'/>",
    sms: "<path d='M4 5h16v11H8l-4 4z'/>",
    em: "<rect x='3' y='5' width='18' height='14' rx='2'/><path d='m4 7 8 6 8-6'/>",
    cp: "<rect x='8' y='8' width='12' height='12' rx='2'/><path d='M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2'/>",
    ot: "<path d='M12 3v12'/><path d='M7.5 7.5 12 3l4.5 4.5'/><path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7'/>"
  };
  function icon(k) { return "<svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'>" + ICONS[k] + "</svg>"; }

  function lang() { var l = (document.documentElement.lang || "bn").slice(0, 2); return TXT[l] ? l : "bn"; }
  function enc(x) { return encodeURIComponent(x); }
  function nativeShare(d) {
    var P = window.Capacitor && window.Capacitor.Plugins;
    if (P && P.Share) return P.Share.share({ title: d.title || "", text: d.text || "", url: d.url || "", dialogTitle: "শেয়ার করুন" });
    return Promise.reject(new Error("no share"));
  }
  function close() { document.querySelectorAll(".fs-scrim,.fs-sheet").forEach(function (n) { n.remove(); }); }

  function openSheet() {
    close();
    var L = TXT[lang()];
    var MSG = L.msg + "\n" + SITE + "\n" + "Android app: " + APK;
    var st = document.getElementById("fs-style");
    if (!st) { st = document.createElement("style"); st.id = "fs-style"; st.textContent = CSS; document.head.appendChild(st); }
    var scrim = document.createElement("div"); scrim.className = "fs-scrim";
    var sheet = document.createElement("div"); sheet.className = "fs-sheet"; sheet.setAttribute("role", "dialog"); sheet.setAttribute("aria-modal", "true");
    var opts = [
      ["wa", L.wa, function () { window.open("https://wa.me/?text=" + enc(MSG), "_blank", "noopener"); }],
      ["tg", L.tg, function () { window.open("https://t.me/share/url?url=" + enc(SITE) + "&text=" + enc(L.msg), "_blank", "noopener"); }],
      ["fb", L.fb, function () { window.open("https://www.facebook.com/sharer/sharer.php?u=" + enc(SITE), "_blank", "noopener"); }],
      ["sms", L.sms, function () { location.href = "sms:?&body=" + enc(MSG); }],
      ["em", L.em, function () { location.href = "mailto:?subject=" + enc("FreeLearn Hub") + "&body=" + enc(MSG); }],
      ["cp", L.cp, function (btn) {
        var done = function () { var t = btn.querySelector("small"); if (t) t.textContent = L.done; };
        try { navigator.clipboard.writeText(MSG).then(done, done); } catch (e) {
          var ta = document.createElement("textarea"); ta.value = MSG; document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); } catch (x) {} ta.remove(); done();
        }
      }],
      ["ot", L.ot, function () { nativeShare({ title: "FreeLearn Hub", text: L.msg, url: SITE }).catch(function () {}); }]
    ];
    sheet.innerHTML =
      '<div class="fs-head"><div><h2>' + L.t + "</h2><p>" + L.p + "</p></div></div>" +
      '<div class="fs-qr"><div class="fs-qb">' + qrSvg(APK, 124) + "</div><div><b>" + L.qr + "</b><p>" + L.qrp + "</p></div></div>" +
      '<div class="fs-grid"></div>' +
      '<button type="button" class="fs-x">' + L.close + "</button>";
    var grid = sheet.querySelector(".fs-grid");
    opts.forEach(function (o) {
      var b = document.createElement("button"); b.type = "button";
      b.innerHTML = "<i>" + icon(o[0]) + "</i><small>" + o[1] + "</small>";
      b.addEventListener("click", function () { o[2](b); });
      grid.appendChild(b);
    });
    sheet.querySelector(".fs-x").addEventListener("click", close);
    scrim.addEventListener("click", close);
    document.body.appendChild(scrim);
    document.body.appendChild(sheet);
    var first = sheet.querySelector("button"); if (first) first.focus();
  }

  /* hook the existing share button (replace it to drop the old click handler) */
  var old = document.getElementById("shareBtn");
  if (old) {
    var nb = old.cloneNode(true);
    old.parentNode.replaceChild(nb, old);
    nb.addEventListener("click", openSheet);
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  window.FLShare = { open: openSheet };

  /* ---------- QR encoder (offline) ---------- */
  /* ---------- tiny offline QR code maker (byte mode, level L, versions 1-9) ---------- */
  function qrMatrix(text) {
    var bytes = unescape(encodeURIComponent(text)).split("").map(function (c) { return c.charCodeAt(0); });
    /* version: [data codewords per block, ec per block, blocks] */
    var VER = [null, [19, 7, 1], [34, 10, 1], [55, 15, 1], [80, 20, 1], [108, 26, 1], [68, 18, 2], [78, 20, 2], [97, 24, 2], [116, 30, 2]];
    var ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46]];
    var v = 0, i, j;
    for (i = 1; i <= 9; i++) { if (bytes.length + 2 <= VER[i][0] * VER[i][2]) { v = i; break; } }
    if (!v) return null;
    var cfg = VER[v], dpb = cfg[0], epb = cfg[1], nb = cfg[2], total = dpb * nb;
    /* bit stream */
    var bits = [];
    function put(val, n) { for (var k = n - 1; k >= 0; k--) bits.push((val >> k) & 1); }
    put(4, 4); put(bytes.length, 8);
    bytes.forEach(function (b) { put(b, 8); });
    put(0, Math.min(4, total * 8 - bits.length));
    while (bits.length % 8) bits.push(0);
    var data = [];
    for (i = 0; i < bits.length; i += 8) { var x = 0; for (j = 0; j < 8; j++) x = (x << 1) | bits[i + j]; data.push(x); }
    for (var pad = 0; data.length < total; pad++) data.push(pad % 2 ? 17 : 236);
    /* Reed-Solomon */
    var EXP = [], LOG = [], g = 1;
    for (i = 0; i < 255; i++) { EXP[i] = g; LOG[g] = i; g <<= 1; if (g & 256) g ^= 285; }
    function mul(a, b) { return a && b ? EXP[(LOG[a] + LOG[b]) % 255] : 0; }
    var gen = [1];
    for (i = 0; i < epb; i++) {
      var ng = new Array(gen.length + 1).fill(0);
      for (j = 0; j < gen.length; j++) { ng[j] ^= gen[j]; ng[j + 1] ^= mul(gen[j], EXP[i]); }
      gen = ng;
    }
    var blocks = [], ecs = [];
    for (i = 0; i < nb; i++) {
      var d = data.slice(i * dpb, (i + 1) * dpb), r = new Array(epb).fill(0);
      d.forEach(function (b) {
        var f = b ^ r[0]; r.shift(); r.push(0);
        for (var k = 0; k < epb; k++) r[k] ^= mul(gen[k + 1], f);
      });
      blocks.push(d); ecs.push(r);
    }
    var all = [];
    for (i = 0; i < dpb; i++) blocks.forEach(function (b) { all.push(b[i]); });
    for (i = 0; i < epb; i++) ecs.forEach(function (b) { all.push(b[i]); });
    var stream = [];
    all.forEach(function (b) { for (var k = 7; k >= 0; k--) stream.push((b >> k) & 1); });
    /* matrix */
    var n = 17 + 4 * v, M = [], F = [];
    for (i = 0; i < n; i++) { M.push(new Array(n).fill(0)); F.push(new Array(n).fill(false)); }
    function set(r, c, val) { M[r][c] = val ? 1 : 0; F[r][c] = true; }
    function finder(r0, c0) {
      for (var r = -1; r <= 7; r++) for (var c = -1; c <= 7; c++) {
        var rr = r0 + r, cc = c0 + c;
        if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
        var on = (r >= 0 && r <= 6 && (c === 0 || c === 6)) || (c >= 0 && c <= 6 && (r === 0 || r === 6)) || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
        set(rr, cc, on);
      }
    }
    finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
    for (i = 8; i < n - 8; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    var al = ALIGN[v];
    al.forEach(function (ar) { al.forEach(function (ac) {
      if (F[ar][ac]) return;
      for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) set(ar + r, ac + c, Math.max(Math.abs(r), Math.abs(c)) !== 1);
    }); });
    set(n - 8, 8, 1);
    for (i = 0; i < 9; i++) { if (!F[8][i]) set(8, i, 0); if (!F[i][8]) set(i, 8, 0); }
    for (i = 0; i < 8; i++) { if (!F[8][n - 1 - i]) set(8, n - 1 - i, 0); if (!F[n - 1 - i][8]) set(n - 1 - i, 8, 0); }
    if (v >= 7) {
      var rem = v;
      for (i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >> 11) * 0x1F25);
      var vi = (v << 12) | rem;
      for (i = 0; i < 18; i++) { var bit = (vi >> i) & 1, a = Math.floor(i / 3), b = n - 11 + (i % 3); set(a, b, bit); set(b, a, bit); }
    }
    /* place data */
    var idx = 0, up = true;
    var places = [];
    for (var col = n - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      for (var k = 0; k < n; k++) {
        var row = up ? n - 1 - k : k;
        for (var cc2 = 0; cc2 < 2; cc2++) { var c2 = col - cc2; if (!F[row][c2]) places.push([row, c2]); }
      }
      up = !up;
    }
    var masks = [
      function (r, c) { return (r + c) % 2 === 0; }, function (r) { return r % 2 === 0; }, function (r, c) { return c % 3 === 0; },
      function (r, c) { return (r + c) % 3 === 0; }, function (r, c) { return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; },
      function (r, c) { return (r * c) % 2 + (r * c) % 3 === 0; }, function (r, c) { return ((r * c) % 2 + (r * c) % 3) % 2 === 0; },
      function (r, c) { return ((r + c) % 2 + (r * c) % 3) % 2 === 0; }
    ];
    function build(mk) {
      var Q = M.map(function (row) { return row.slice(); });
      places.forEach(function (p, t) { var bit = t < stream.length ? stream[t] : 0; Q[p[0]][p[1]] = bit ^ (masks[mk](p[0], p[1]) ? 1 : 0); });
      /* format info: level L = 01 */
      var fd = (1 << 3) | mk, fr = fd;
      for (var z = 0; z < 10; z++) fr = (fr << 1) ^ ((fr >> 9) * 0x537);
      var fmt = ((fd << 10) | fr) ^ 0x5412;
      function fb(i) { return (fmt >> i) & 1; }
      for (z = 0; z < 6; z++) Q[z][8] = fb(z);
      Q[7][8] = fb(6); Q[8][8] = fb(7); Q[8][7] = fb(8);
      for (z = 9; z < 15; z++) Q[8][14 - z] = fb(z);
      for (z = 0; z < 8; z++) Q[8][n - 1 - z] = fb(z);
      for (z = 8; z < 15; z++) Q[n - 15 + z][8] = fb(z);
      return Q;
    }
    function penalty(Q) {
      var p = 0, r, c, run, dark = 0;
      for (r = 0; r < n; r++) { run = 1; for (c = 1; c < n; c++) { if (Q[r][c] === Q[r][c - 1]) { run++; if (run === 5) p += 3; else if (run > 5) p++; } else run = 1; } }
      for (c = 0; c < n; c++) { run = 1; for (r = 1; r < n; r++) { if (Q[r][c] === Q[r - 1][c]) { run++; if (run === 5) p += 3; else if (run > 5) p++; } else run = 1; } }
      for (r = 0; r < n - 1; r++) for (c = 0; c < n - 1; c++) { var s = Q[r][c]; if (s === Q[r][c + 1] && s === Q[r + 1][c] && s === Q[r + 1][c + 1]) p += 3; }
      for (r = 0; r < n; r++) for (c = 0; c < n; c++) dark += Q[r][c];
      p += Math.floor(Math.abs(dark * 20 - n * n * 10) / (n * n)) * 10;
      return p;
    }
    var best = null, bp = 1e9;
    for (var mk = 0; mk < 8; mk++) { var Q = build(mk), pp = penalty(Q); if (pp < bp) { bp = pp; best = Q; } }
    return best;
  }
  function qrSvg(text, px) {
    var Q = qrMatrix(text);
    if (!Q) return "";
    var n = Q.length, q = 3, d = "";
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (Q[r][c]) d += "M" + (c + q) + " " + (r + q) + "h1v1h-1z";
    var s = n + q * 2;
    return '<svg width="' + px + '" height="' + px + '" viewBox="0 0 ' + s + " " + s + '" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect width="' + s + '" height="' + s + '" fill="#fff"/><path d="' + d + '" fill="#000"/></svg>';
  }


})();
