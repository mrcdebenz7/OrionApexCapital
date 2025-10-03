import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const v = localStorage.getItem('consent_analytics');
    if (!v) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem('consent_analytics', 'granted');
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem('consent_analytics', 'denied');
    setVisible(false);
  };

  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%]">
      <div className="card bg-navy-900/90 backdrop-blur border-white/20">
        <p className="text-sm text-slate-200">
          We use minimal analytics to improve the site. Consent is optional.
        </p>
        <div className="mt-3 flex gap-3 justify-end">
          <button onClick={decline} className="btn btn-secondary text-sm">Decline</button>
          <button onClick={accept} className="btn btn-primary text-sm">Accept</button>
        </div>
      </div>
    </div>
  );
}


