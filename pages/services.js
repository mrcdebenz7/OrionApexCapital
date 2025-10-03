import Layout from "@/components/Layout";
import Logo from "@/components/Logo";

export default function Services() {
  return (
    <Layout
      title="Services"
      description="Disciplined operator lanes across crypto, ATMs, and digital assets."
    >
      <section className="container py-16 space-y-10">
        <div className="flex items-center gap-3">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        </div>

        <div id="crypto" className="card">
          <h2 className="text-2xl font-semibold">Crypto Trading</h2>
          <p className="text-slate-300 mt-2">
            Short-term setups (≤72h) with strict R:R (≥2:1), ATR-based stops,
            liquidity/volatility gates, and staged TPs.
          </p>
          <ul className="text-slate-300 mt-4 list-disc pl-5 space-y-1">
            <li>2:1 minimum risk-to-reward; ATR-anchored stops</li>
            <li>Automated execution & alerts; post-entry SL management</li>
            <li>
              Focus symbols: BTC, ETH, SOL, XRP, LINK, LTC, BCH, DOGE
            </li>
          </ul>
        </div>

        <div id="atm" className="card">
          <h2 className="text-2xl font-semibold">
            ATM Placements & Operations
          </h2>
          <p className="text-slate-300 mt-2">
            Uptime discipline, route scoring, refill thresholds, and
            unit-economics reporting.
          </p>
          <ul className="text-slate-300 mt-4 list-disc pl-5 space-y-1">
            <li>6–8 placements target; $18k–$25k annual profit objective</li>
            <li>Transparent fee structure & uptime monitoring</li>
          </ul>
        </div>

        <div id="websites" className="card">
          <h2 className="text-2xl font-semibold">Website Investing</h2>
          <p className="text-slate-300 mt-2">
            Acquire → Improve → Recycle framework; speed, UX, content velocity,
            and monetization balance.
          </p>
        </div>

        <div className="card bg-white/3 border-gold-500/20">
          <h3 className="font-semibold text-lg">Disclaimer</h3>
          <p className="text-slate-300 text-sm mt-2">
            Nothing here is a solicitation to invest or an offer of securities.
          </p>
        </div>
      </section>
    </Layout>
  );
}
