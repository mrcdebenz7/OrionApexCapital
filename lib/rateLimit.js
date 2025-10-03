const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQS = 10; // per IP per window

const ipStore = new Map();

export function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipStore.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  ipStore.set(ip, entry);
  return entry.count > MAX_REQS;
}


