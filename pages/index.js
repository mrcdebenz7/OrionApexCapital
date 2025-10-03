import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import LogoGrid from "@/components/LogoGrid";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="starfield border-b border-white/10">
        <div className="container py-20 text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="crestWhite" size={56} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Orion Apex Capital
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-slate-300">
            Precision. Growth. Legacy.
          </p>
          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            We deploy disciplined, risk-managed strategies across crypto
            markets, automated cash businesses, and digital assets—aligning
            returns with long-term purpose.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button href="/services">Explore Strategies</Button>
            <Button href="/contact" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <LogoGrid />

      {/* Services Overview */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Disciplined Operator Lanes
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <a href="/services#crypto" className="card block hover:shadow-elev transition">
            <h3 className="font-semibold text-xl">Crypto Trading</h3>
            <p className="text-slate-300 mt-2">
              Short-term setups with strict risk controls and volatility gates.
            </p>
          </a>
          <a href="/services#atm" className="card block hover:shadow-elev transition">
            <h3 className="font-semibold text-xl">ATM Placements</h3>
            <p className="text-slate-300 mt-2">
              Uptime, route logic, and unit economics at the edge.
            </p>
          </a>
          <a href="/services#websites" className="card block hover:shadow-elev transition">
            <h3 className="font-semibold text-xl">Website Investing</h3>
            <p className="text-slate-300 mt-2">
              Acquire → Improve → Recycle. Operator math over hype.
            </p>
          </a>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="container py-12">
        <div className="card">
          <div className="md:flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">
                Case Study: KPI Dashboard for Multi-Club Fitness Operator
              </h3>
              <p className="text-slate-300 mt-2">
                Retention +2.8pp • 6–8 hrs/wk saved • Single source of truth
              </p>
              <div className="mt-4">
                <Button href="/freelance/kpi-dashboard-fitness">
                  Read Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <a
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="card block hover:shadow-elev transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.excerpt}</p>
              <p className="text-xs text-slate-400 mt-3">
                {new Date(p.date).toLocaleDateString()}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container py-16">
        <div className="card text-center">
          <h3 className="text-2xl font-semibold">
            Ready to align execution with outcomes?
          </h3>
          <div className="mt-4 flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Schedule a Consultation</Button>
            <Link className="btn btn-secondary" href="/freelance">
              Explore Freelance Work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
