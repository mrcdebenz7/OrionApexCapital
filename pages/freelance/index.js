import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getAllCases } from "@/lib/cases";

export default function Freelance({ cases }) {
  return (
    <Layout
      title="Freelance Work"
      description="Selected case studies across finance, ops, and web."
    >
      <section className="container py-16">
        <div className="flex items-center gap-3 mb-6">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Freelance Work</h1>
        </div>

        {/* Filters - Static demo */}
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded bg-white/10 px-3 py-1 text-sm">Sector</span>
          <span className="rounded bg-white/10 px-3 py-1 text-sm">
            Service Type
          </span>
          <span className="rounded bg-white/10 px-3 py-1 text-sm">
            Outcome
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <CaseStudyCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              outcome={c.outcome}
              tags={c.tags || []}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { cases: getAllCases() } };
}

