// FreeLearn Hub — daily link checker.
// Reads data.json, checks each URL, and removes an item after it has failed on several separate days.
// Safety: if most links fail at once (network problem), nothing is removed.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const DATA = "data.json";
const STATE = "links-status.json";
const FAILS_TO_REMOVE = 3;      // separate days in a row
const TIMEOUT_MS = 15000;
const CONCURRENCY = 12;
const MAX_FAIL_SHARE = 0.5;     // above this, treat as a network problem and skip removals

const items = JSON.parse(readFileSync(DATA, "utf8"));
const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, "utf8")) : {};
const UA = "Mozilla/5.0 (compatible; FreeLearnHubLinkCheck/1.0; +https://sbd-r.github.io/freelearnhub/)";

async function ok(url) {
  for (const method of ["HEAD", "GET"]) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
    try {
      const r = await fetch(url, { method, redirect: "follow", signal: ctl.signal, headers: { "user-agent": UA, accept: "text/html,*/*" } });
      if (r.body && method === "GET") { try { await r.body.cancel(); } catch (e) {} }
      // 2xx/3xx = fine. 403/401/429 = the site is up but blocks bots: count it as alive.
      if (r.status < 400 || r.status === 401 || r.status === 403 || r.status === 429) return true;
      if (r.status !== 405 && r.status !== 501) return false;
    } catch (e) {
      // try GET after HEAD failure
    } finally { clearTimeout(timer); }
  }
  return false;
}

const today = new Date().toISOString().slice(0, 10);
const results = new Map();
let idx = 0;
async function worker() {
  while (idx < items.length) {
    const i = idx++;
    results.set(items[i][3], await ok(items[i][3]));
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

let failed = 0;
for (const it of items) {
  const u = it[3];
  const good = results.get(u);
  const s = state[u] || { fails: 0, lastDay: "" };
  if (good) { delete state[u]; continue; }
  failed++;
  if (s.lastDay !== today) { s.fails += 1; s.lastDay = today; }
  state[u] = s;
}

const failShare = failed / Math.max(1, items.length);
let removed = [];
if (failShare > MAX_FAIL_SHARE) {
  console.log(`Too many failures (${failed}/${items.length}); likely a network problem. Nothing removed.`);
} else {
  const keep = [];
  for (const it of items) {
    const s = state[it[3]];
    if (s && s.fails >= FAILS_TO_REMOVE) { removed.push(it[2] + " — " + it[3]); delete state[it[3]]; }
    else keep.push(it);
  }
  if (removed.length) writeFileSync(DATA, JSON.stringify(keep));
}
writeFileSync(STATE, JSON.stringify(state, null, 1));
console.log(`checked ${items.length}, failing today ${failed}, removed ${removed.length}`);
if (removed.length) console.log(removed.join("\n"));
