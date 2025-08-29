export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold">Services</h1>

      <div className="card space-y-3">
        <h2 className="text-2xl font-semibold">Crypto Trading Strategies</h2>
        <p className="text-slate-300">
          High-conviction setups (≤72h hold) across scalp, breakout, and swing categories. We prioritize multi-timeframe confluence (1H + 4H/D) and use liquidity, OI/funding, and volatility filters for confirmation.
        </p>
        <ul className="list-disc text-slate-300 pl-5 space-y-1">
          <li>2:1 minimum risk-to-reward; ATR-anchored stops.</li>
          <li>Automated execution & alerts; post-entry SL management.</li>
          <li>Focus symbols: BTC, ETH, SOL, XRP, LINK, LTC, BCH, DOGE.</li>
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="text-2xl font-semibold">ATM Placement (Automated Cash Businesses)</h2>
        <p className="text-slate-300">
          Location-first strategy targeting reliable foot traffic and conversion profiles. Goal: consistent monthly yield with disciplined redeployment.
        </p>
        <ul className="list-disc text-slate-300 pl-5 space-y-1">
          <li>6–8 placements target; $18k–$25k annual profit objective.</li>
          <li>Transparent fee structure & uptime monitoring.</li>
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="text-2xl font-semibold">Website Investing & Digital Assets</h2>
        <p className="text-slate-300">
          Acquire/build content sites with clean SEO, diversified monetization, and value-add improvements—then recycle capital via resale at attractive multiples.
        </p>
      </div>

      <div className="card space-y-3">
        <h2 className="text-2xl font-semibold">Advisory & Partnerships</h2>
        <p className="text-slate-300">
          Select consulting for leaders and operators on GTM, sales systems, and growth loops. We’re pragmatic, data-informed, and action-biased.
        </p>
      </div>

      <p className="text-xs text-slate-400">
        Note: Nothing here is a solicitation to invest or an offer of securities.
      </p>
    </section>
  );
}