export default function Bio() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-start">
        <div className="card md:col-span-1 flex flex-col items-center text-center">
          <img src="/images/dan-headshot.svg" alt="Dan — Orion Apex Capital" className="h-40 w-40 mb-4" />
          <h1 className="text-2xl font-bold">Dan</h1>
          <p className="text-slate-300">General Manager • Trader • Builder</p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Personal Bio</h2>
          <p className="text-slate-300">
            I lead operations and sales at a major fitness brand while building Orion Apex Capital—an operator’s studio focused on disciplined growth across crypto, automated cash businesses, and digital assets. My north star is simple: precision, integrity, and compounding results that enable a lasting legacy.
          </p>
          <p className="text-slate-300">
            In trading, I specialize in short‑term setups (≤72h) with strict risk management—minimum 2:1 R:R, ATR‑based stops, and volatility filters. Beyond markets, I deploy capital into ATM placements and website assets, prioritizing reliable cashflow and smart recycling.
          </p>
          <p className="text-slate-300">
            I’m deeply values‑driven—rooted in personal growth, emotional presence, and long‑term partnership. My partner, Elisabeth, and I approach life as a shared practice of trust, contribution, and spiritual development.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card">
              <h3 className="font-semibold">Focus Areas</h3>
              <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-2">
                <li>Crypto trading (scalp, breakout, swing)</li>
                <li>ATM placements & uptime ops</li>
                <li>Website investing & resale</li>
                <li>Sales systems & GTM execution</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold">Operating Principles</h3>
              <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-2">
                <li>Risk first, always</li>
                <li>Speed with discipline</li>
                <li>Transparent reporting</li>
                <li>Purpose‑aligned decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold">Story & Milestones</h3>
        <ul className="list-disc pl-5 text-slate-300 space-y-2 mt-2">
          <li>Built sales & operations leadership at 24 Hour Fitness (201+ team leadership impact; multi‑site momentum).</li>
          <li>Developed a short‑term trading framework with multi‑timeframe confluence and automated SL/TP management.</li>
          <li>Launched Orion Apex initiatives in ATM placements, website investing, and AI‑assisted assets.</li>
          <li>Ongoing: expand placements (6–8 targets), refine trading confirm engine, and scale content/insights.</li>
        </ul>
      </div>

      <div className="card">
        <h3 className="font-semibold">Contact</h3>
        <p className="text-slate-300">For collaborations, speaking, or advisory requests, visit the <a className="underline" href="/contact">contact page</a>.</p>
      </div>
    </section>
  );
}