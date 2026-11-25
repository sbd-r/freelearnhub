"use strict";
/* FreeLearn Hub — website logic (no build step).
   Data: ITEMS (data*.js) as [type, category, name, url]. Labels: labels.js (T, CAT). */
(function () {
  var LANGS = [["bn", "বাং"], ["en", "EN"], ["hi", "हि"], ["ur", "اردو"]];
  var TYPES = ["c", "b", "y", "t", "a", "s"];
  var UI = {
    bn: { jdT: "জনদূত — অভিযোগ ও দরখাস্ত", jdP: "থানা, দুদক, UNO ও সরকারি দপ্তরে অভিযোগ বা দরখাস্ত লিখে সঠিক ঠিকানায় পাঠান। ফ্রি।", jdS: "মাদক, চাঁদাবাজি, ঘুষ-দুর্নীতি, জমি দখল, যৌন হয়রানি, সাইবার প্রতারণা, ভাতা-ত্রাণ, এনআইডি-ভূমি সেবাসহ ৪৮টি বিষয়ে সাহায্য করে। ইন্টারনেট দুর্বল হলেও লেখা যায়, PDF সেভ ও শেয়ার করা যায়।", jdA: "অ্যাপ নামান", jdW: "ওয়েবসাইট", tag: "বিশ্বের ফ্রি কোর্স, বই ও সফটওয়্যার এক জায়গায়", h1: "ফ্রি শেখার সব উপকরণ, এক জায়গায়", search: "কোর্স, বই বা সফটওয়্যার খুঁজুন…", all: "সব", saved: "সেভ করা", more: "আরও দেখান", none: "কিছু পাওয়া যায়নি", count: "{n}টি ফলাফল", open: "খুলুন", save: "সেভ করুন", unsave: "সেভ সরান", getT: "অ্যাপ নামান", getP: "অ্যান্ড্রয়েডের জন্য ফ্রি অ্যাপ। একবার নামালে সব কোর্স ও বই ফোনেই পাবেন।", getA: "APK ডাউনলোড", disc: "সব লিংক বাইরের স্বাধীন প্রতিষ্ঠানের। এই সাইট তাদের কারও সাথে যুক্ত নয়।", share: "শেয়ার", copied: "লিংক কপি হয়েছে", theme: { auto: "ফোন অনুযায়ী", light: "দিনের আলো", dark: "রাত" }, brand: "FreeLearn Hub", kindsLabel: "ধরন", saveTitle: "সেভ" },
    en: { jdT: "Jonodut — complaints & petitions", jdP: "Write complaints and petitions to police, ACC, UNO and government offices, and send them to the right place. Free.", jdS: "Helps with 48 issues: drugs, extortion, bribery, land grabbing, harassment, cyber fraud, allowances, NID and land services. Works on weak internet; save and share as PDF.", jdA: "Download app", jdW: "Website", tag: "Free courses, books & software from around the world", h1: "Every free learning resource, in one place", search: "Search courses, books or software…", all: "All", saved: "Saved", more: "Show more", none: "Nothing found", count: "{n} results", open: "Open", save: "Save", unsave: "Remove from saved", getT: "Get the app", getP: "Free Android app. Install once and keep every course and book on your phone.", getA: "Download APK", disc: "All links go to independent third-party sites. This website is not affiliated with any of them.", share: "Share", copied: "Link copied", theme: { auto: "Match device", light: "Light", dark: "Dark" }, brand: "FreeLearn Hub", kindsLabel: "Type", saveTitle: "Save" },
    hi: { jdT: "जनदूत — शिकायत और आवेदन", jdP: "पुलिस, ACC, UNO और सरकारी दफ़्तरों को शिकायत या आवेदन लिखकर सही जगह भेजें। मुफ़्त।", jdS: "48 विषयों में मदद: नशा, वसूली, घूस, ज़मीन पर कब्ज़ा, उत्पीड़न, साइबर धोखाधड़ी, भत्ता, NID और भूमि सेवा। कमज़ोर इंटरनेट पर भी काम करता है; PDF सेव और शेयर।", jdA: "ऐप डाउनलोड", jdW: "वेबसाइट", tag: "दुनिया भर के मुफ़्त कोर्स, किताबें और सॉफ़्टवेयर एक जगह", h1: "मुफ़्त सीखने की हर सामग्री, एक ही जगह", search: "कोर्स, किताब या सॉफ़्टवेयर खोजें…", all: "सभी", saved: "सहेजे गए", more: "और दिखाएँ", none: "कुछ नहीं मिला", count: "{n} परिणाम", open: "खोलें", save: "सहेजें", unsave: "सहेजा हुआ हटाएँ", getT: "ऐप डाउनलोड करें", getP: "Android के लिए मुफ़्त ऐप। एक बार इंस्टॉल करें और सभी कोर्स व किताबें फ़ोन में रखें।", getA: "APK डाउनलोड", disc: "सभी लिंक स्वतंत्र तीसरे पक्ष की साइटों के हैं। यह साइट किसी से संबद्ध नहीं है।", share: "शेयर", copied: "लिंक कॉपी हो गया", theme: { auto: "डिवाइस के अनुसार", light: "दिन", dark: "रात" }, brand: "FreeLearn Hub", kindsLabel: "प्रकार", saveTitle: "सहेजें" },
    ur: { jdT: "جندوت — شکایات اور درخواستیں", jdP: "پولیس، ACC، UNO اور سرکاری دفاتر کو شکایت یا درخواست لکھ کر درست جگہ بھیجیں۔ مفت۔", jdS: "48 معاملات میں مدد: منشیات، بھتہ، رشوت، زمین پر قبضہ، ہراسانی، سائبر فراڈ، وظائف، NID اور زمین کی خدمات۔ کمزور انٹرنیٹ پر بھی چلتی ہے؛ PDF محفوظ اور شیئر۔", jdA: "ایپ ڈاؤنلوڈ", jdW: "ویب سائٹ", tag: "دنیا بھر کے مفت کورسز، کتابیں اور سافٹ ویئر ایک جگہ", h1: "مفت سیکھنے کا ہر وسیلہ، ایک ہی جگہ", search: "کورس، کتاب یا سافٹ ویئر تلاش کریں…", all: "سب", saved: "محفوظ شدہ", more: "مزید دکھائیں", none: "کچھ نہیں ملا", count: "{n} نتائج", open: "کھولیں", save: "محفوظ کریں", unsave: "محفوظ سے ہٹائیں", getT: "ایپ حاصل کریں", getP: "اینڈرائیڈ کے لیے مفت ایپ۔ ایک بار انسٹال کریں اور تمام کورسز اور کتابیں فون میں رکھیں۔", getA: "APK ڈاؤنلوڈ", disc: "تمام لنکس آزاد تیسرے فریق کی سائٹس کے ہیں۔ یہ سائٹ ان میں سے کسی سے منسلک نہیں۔", share: "شیئر", copied: "لنک کاپی ہو گیا", theme: { auto: "ڈیوائس کے مطابق", light: "دن", dark: "رات" }, brand: "فری لرن حب", kindsLabel: "قسم", saveTitle: "محفوظ" }
  };
  var ICON = {
    save: '<path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z"/>',
    open: '<path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"/>',
    share: '<circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="m8 11 8-4M8 13l8 4"/>',
    theme: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17z" fill="currentColor"/>'
  };
  function svg(name, cls) { return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + ICON[name] + "</svg>"; }
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var host = function (u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };

  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var savedSet = {};
  try { JSON.parse(load("fl-saved", "[]")).forEach(function (u) { savedSet[u] = true; }); } catch (e) {}
  function persistSaved() { save("fl-saved", JSON.stringify(Object.keys(savedSet))); }

  var guess = (navigator.language || "bn").slice(0, 2);
  var S = {
    lang: load("fl-lang", ""), theme: load("fl-theme", "auto"),
    type: "all", cat: "all", q: "", savedOnly: false, shown: 24
  };
  if (!UI[S.lang]) S.lang = UI[guess] ? guess : "bn";

  function toRows(list) { return list.map(function (x) { return { t: x[0], c: x[1], n: x[2], u: x[3] }; }); }
  /* start with the built-in list, then switch to data.json (kept up to date by the link checker) */
  var ALL = toRows(ITEMS);

  function L(k) { return (UI[S.lang] || UI.bn)[k]; }
  function typeName(t) { return (T[S.lang] || T.bn)[t] || t; }
  function catName(t, c) {
    if (t === "s" && c === "sec") return CAT_S_SEC[S.lang];
    return (CAT[c] && (CAT[c][S.lang] || CAT[c].en)) || c;
  }

  /* ---------- static text ---------- */
  function paintStatic() {
    document.documentElement.lang = S.lang;
    document.documentElement.dir = S.lang === "ur" ? "rtl" : "ltr";
    document.title = S.lang === "bn" ? "FreeLearn Hub — ফ্রি কোর্স, বই ও সফটওয়্যার" : (UI[S.lang].brand + " — " + UI[S.lang].tag);
    $("brand").textContent = L("brand");
    $("tag").textContent = L("tag");
    $("h1").textContent = L("h1");
    $("q").placeholder = L("search");
    $("q").setAttribute("aria-label", L("search"));
    $("jdT").textContent = L("jdT");
    $("jdP").textContent = L("jdP");
    $("jdS").textContent = L("jdS");
    $("jdA").textContent = L("jdA");
    $("jdW").textContent = L("jdW");
    $("getT").textContent = L("getT");
    $("getP").textContent = L("getP");
    $("getA").textContent = L("getA");
    $("disc").textContent = L("disc");
    $("savedBtn").innerHTML = svg("save") + " " + esc(L("saved"));
    $("shareBtn").innerHTML = svg("share");
    $("shareBtn").setAttribute("aria-label", L("share"));
    $("themeBtn").innerHTML = svg("theme");
    $("themeBtn").setAttribute("aria-label", L("theme")[S.theme] || "");
    $("themeBtn").title = L("theme")[S.theme] || "";
    $("langSeg").innerHTML = LANGS.map(function (p) {
      return '<button type="button" data-l="' + p[0] + '" aria-pressed="' + (S.lang === p[0]) + '">' + p[1] + "</button>";
    }).join("");
    $("more").textContent = L("more");
    $("savedBtn").setAttribute("aria-pressed", String(S.savedOnly));
  }

  /* ---------- filters ---------- */
  function inScope(it) {
    if (S.type !== "all" && it.t !== S.type) return false;
    if (S.savedOnly && !savedSet[it.u]) return false;
    return true;
  }
  function matches(it) {
    if (S.cat !== "all" && it.c !== S.cat) return false;
    if (S.q) {
      var q = S.q.toLowerCase();
      var hay = (it.n + " " + host(it.u) + " " + catName(it.t, it.c)).toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  }

  function paintTabs() {
    var counts = {}; ALL.forEach(function (it) { counts[it.t] = (counts[it.t] || 0) + 1; });
    var tabs = [["all", L("all"), ALL.length]].concat(TYPES.map(function (t) { return [t, typeName(t), counts[t] || 0]; }));
    $("tabs").innerHTML = tabs.map(function (p) {
      return '<button type="button" role="tab" data-t="' + p[0] + '" aria-selected="' + (S.type === p[0]) + '">' + esc(p[1]) + "</button>";
    }).join("");
    $("stats").innerHTML = TYPES.map(function (t) {
      var k = t; var n = counts[t] || 0;
      return '<button type="button" class="stat" data-t="' + t + '" aria-pressed="' + (S.type === t) + '" style="--k:var(--' + k + ')"><b>' + n.toLocaleString(S.lang === "bn" ? "bn-BD" : S.lang === "hi" ? "hi-IN" : S.lang === "ur" ? "ur-PK" : "en") + "</b><span>" + esc(typeName(t)) + "</span></button>";
    }).join("");
  }

  function paintCats() {
    var seen = {};
    ALL.forEach(function (it) { if (inScope(it)) seen[it.c] = (seen[it.c] || 0) + 1; });
    var keys = Object.keys(seen).sort(function (a, b) { return catName(S.type, a).localeCompare(catName(S.type, b), S.lang); });
    if (S.cat !== "all" && !seen[S.cat]) S.cat = "all";
    $("cats").innerHTML = [""].concat(keys).map(function (k) {
      var label = k === "" ? L("all") : catName(S.type, k) + " · " + seen[k];
      var val = k === "" ? "all" : k;
      return '<button type="button" data-c="' + esc(val) + '" aria-pressed="' + (S.cat === val) + '">' + esc(label) + "</button>";
    }).join("");
  }

  function paintList() {
    var rows = ALL.filter(function (it) { return inScope(it) && matches(it); });
    var shown = rows.slice(0, S.shown);
    $("meta").textContent = rows.length ? L("count").replace("{n}", rows.length.toLocaleString(S.lang === "bn" ? "bn-BD" : "en")) : "";
    $("list").innerHTML = shown.length ? shown.map(function (it) {
      var on = !!savedSet[it.u];
      return '<li class="card" data-t="' + it.t + '">' +
        '<a class="go" href="' + esc(it.u) + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="kind">' + esc(typeName(it.t)) + "</span>" +
          '<span class="nm">' + esc(it.n) + "</span>" +
          '<span class="sub"><span>' + esc(catName(it.t, it.c)) + "</span><span>·</span><span>" + esc(host(it.u)) + "</span></span>" +
        "</a>" +
        '<button type="button" class="sv" data-u="' + esc(it.u) + '" aria-pressed="' + on + '" aria-label="' + esc(on ? L("unsave") : L("save")) + '" title="' + esc(on ? L("unsave") : L("save")) + '">' + svg("save") + "</button>" +
      "</li>";
    }).join("") : '<li class="empty">' + esc(L("none")) + "</li>";
    $("more").hidden = rows.length <= S.shown;
  }

  function paintAll() {
    paintStatic(); paintTabs(); paintCats(); paintList();
    $("savedBtn").setAttribute("aria-pressed", String(S.savedOnly));
    document.querySelectorAll("#langSeg button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.l === S.lang)); });
  }

  /* ---------- theme ---------- */
  var THEME_ORDER = ["auto", "light", "dark"];
  function applyTheme() {
    if (S.theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", S.theme);
  }

  /* ---------- toast ---------- */
  var toastT = null;
  function toast(msg) {
    var t = $("toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 1800);
  }

  /* ---------- events ---------- */
  $("langSeg").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-l]"); if (!b) return;
    S.lang = b.dataset.l; save("fl-lang", S.lang); paintAll();
  });
  $("themeBtn").addEventListener("click", function () {
    S.theme = THEME_ORDER[(THEME_ORDER.indexOf(S.theme) + 1) % THEME_ORDER.length];
    save("fl-theme", S.theme); applyTheme(); paintStatic();
  });
  $("shareBtn").addEventListener("click", function () {
    var data = { title: L("brand"), text: L("tag"), url: location.href };
    if (navigator.share) { navigator.share(data).catch(function () {}); return; }
    try { navigator.clipboard.writeText(location.href).then(function () { toast(L("copied")); }, function () {}); } catch (e) {}
  });
  $("tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-t]"); if (!b) return;
    S.type = b.dataset.t; S.cat = "all"; S.shown = 24; paintAll();
  });
  $("stats").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-t]"); if (!b) return;
    S.type = S.type === b.dataset.t ? "all" : b.dataset.t; S.cat = "all"; S.shown = 24; paintAll();
  });
  $("cats").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-c]"); if (!b) return;
    S.cat = b.dataset.c; S.shown = 24; paintAll();
  });
  $("savedBtn").addEventListener("click", function () {
    S.savedOnly = !S.savedOnly; S.shown = 24; paintAll();
  });
  var qT = null;
  $("q").addEventListener("input", function (e) {
    clearTimeout(qT);
    qT = setTimeout(function () { S.q = e.target.value.trim(); S.shown = 24; paintCats(); paintList(); }, 150);
  });
  $("list").addEventListener("click", function (e) {
    var b = e.target.closest("button.sv"); if (!b) return;
    var u = b.dataset.u;
    if (savedSet[u]) delete savedSet[u]; else savedSet[u] = true;
    persistSaved();
    var on = !!savedSet[u];
    b.setAttribute("aria-pressed", String(on));
    b.setAttribute("aria-label", on ? L("unsave") : L("save"));
    b.title = on ? L("unsave") : L("save");
    if (S.savedOnly) paintAll(); else paintCats();
  });
  $("more").addEventListener("click", function () { S.shown += 24; paintList(); });
  document.querySelector(".brand").addEventListener("click", function (e) {
    e.preventDefault(); S.type = "all"; S.cat = "all"; S.q = ""; S.savedOnly = false; S.shown = 24; $("q").value = ""; paintAll(); window.scrollTo({ top: 0, behavior: "smooth" });
  });

  applyTheme();
  paintAll();
  /* the newest list is always fetched from the website; the app therefore gets new items without a rebuild */
  var DATA_REMOTE = "https://sbd-r.github.io/freelearnhub/data.json";
  function getJSON(u) { return fetch(u, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error("data"); return r.json(); }); }
  getJSON(DATA_REMOTE).catch(function () { return getJSON("data.json"); })
    .then(function (list) { if (Array.isArray(list) && list.length) { ALL = toRows(list); paintAll(); } })
    .catch(function () {});
})();
