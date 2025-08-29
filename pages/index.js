import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";

const features = [
  {
    title: "Crypto Trading",
    desc: "Short-term scalp, breakout, and swing strategies with strict risk controls and multi-timeframe confluence.",
    icon: "chart",
  },
  {
    title: "Automated Cash Businesses",
    desc: "ATM placements with data-driven location selection and disciplined capital recycling.",
    icon: "atm",
  },
  {
    title: "Digital Assets & Web",
    desc: "Website acquisitions for cashflow + resale, plus targeted AI-driven assets.",
    icon: "web",
  },
  {
    title: "Risk Management",
    desc: "2:1 minimum R:R, ATR-based stops, volatility filters, and post-entry protective logic.",
    icon: "shield",
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="card">
            <div className="flex items-start gap-4">
              <img src={`/images/icon-${f.icon}.svg`} alt="" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-slate-300 mt-2">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="card">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold">Strategy, Discipline, and Purpose</h3>
              <p className="text-slate-300 mt-3">
                Our edge blends technical precision with real-world operator experience. We optimize for reliable execution and risk-aware growth that compounds.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/services" className="btn btn-primary">See Services</Link>
                <Link href="/insights" className="btn btn-secondary">Read Insights</Link>
              </div>
            </div>
            <img src="/images/hero-abstract.svg" alt="Abstract graphic" className="w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="text-2xl font-bold mb-6">Get Market & Growth Notes</h3>
        <NewsletterForm />
      </section>
    </>
  );
}