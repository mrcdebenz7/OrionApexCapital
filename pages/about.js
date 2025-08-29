export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">About Orion Apex Capital</h1>
      <p className="text-slate-300">
        Orion Apex Capital was founded on a simple idea: disciplined strategy beats noise. We operate across crypto markets, automated cash businesses, and digital assets with an emphasis on risk management, execution speed, and long-term alignment.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-slate-300 mt-2">Build wealth with integrity and precision, compounding returns into lasting legacy.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Values</h3>
          <ul className="text-slate-300 mt-2 list-disc pl-5 space-y-1">
            <li>Trust & transparency</li>
            <li>Risk-managed growth</li>
            <li>Operator discipline</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">Edge</h3>
          <p className="text-slate-300 mt-2">A blended approach: quantified trading systems + on-the-ground execution in cashflow businesses.</p>
        </div>
      </div>
    </section>
  );
}