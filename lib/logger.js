function redact(obj) {
  try {
    const clone = JSON.parse(JSON.stringify(obj || {}));
    const keys = ['message', 'text', 'password', 'token', 'apiKey'];
    for (const k of Object.keys(clone)) {
      if (keys.includes(k)) clone[k] = '[redacted]';
      if (typeof clone[k] === 'object') clone[k] = redact(clone[k]);
    }
    return clone;
  } catch (_) {
    return {};
  }
}

function log(level, message, meta = {}) {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    ...redact(meta)
  };
  // eslint-disable-next-line no-console
  console[level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log'](JSON.stringify(entry));
}

export const logger = {
  info: (message, meta) => log('info', message, meta),
  warn: (message, meta) => log('warn', message, meta),
  error: (message, meta) => log('error', message, meta),
  debug: (message, meta) => log('debug', message, meta)
};


