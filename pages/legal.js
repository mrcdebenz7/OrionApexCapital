import Layout from "@/components/Layout";
import Logo from "@/components/Logo";

export default function Legal() {
  return (
    <Layout title="Legal">
      <section className="container py-16 space-y-6 max-w-4xl">
        <div className="flex items-center gap-3">
          <Logo variant="crestWhite" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold">Legal</h1>
        </div>

        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold">Disclosures</h2>
          <p className="text-slate-300">
            The information on this site is for educational and informational
            purposes only. It is not financial, legal, or tax advice. No offer
            or solicitation to buy or sell securities is being made.
          </p>
        </div>

        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold">Privacy</h2>
          <p className="text-slate-300">
            We collect limited data through contact and newsletter forms. We do
            not sell personal data. For deletion requests, email{" "}
            <a
              href="mailto:privacy@orionapexcapital.com"
              className="underline text-teal-400"
            >
              privacy@orionapexcapital.com
            </a>
            .
          </p>
        </div>

        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold">Terms of Use</h2>
          <p className="text-slate-300">
            Use this website responsibly. Do not attempt to exploit, copy, or
            reverse engineer site code or assets without permission.
          </p>
        </div>
      </section>
    </Layout>
  );
}
