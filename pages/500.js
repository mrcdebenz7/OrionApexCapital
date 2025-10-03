import Layout from "@/components/Layout";

export default function ServerError() {
  return (
    <Layout title="500">
      <section className="container py-24 text-center">
        <h1 className="text-4xl font-bold">500 — Server Error</h1>
        <p className="text-slate-300 mt-3">Something went wrong on our side. Please try again shortly.</p>
        <a className="btn btn-primary mt-6 inline-block" href="/">Back to Home</a>
      </section>
    </Layout>
  );
}


