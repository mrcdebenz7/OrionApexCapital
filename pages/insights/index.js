import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsDir);
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const source = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(source);
    return { slug, ...data };
  }).sort((a,b) => new Date(b.date) - new Date(a.date));

  return { props: { posts } };
}

export default function Insights({ posts }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Insights</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="card block hover:shadow-glow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2">{p.excerpt}</p>
            <p className="text-xs text-slate-400 mt-4">{new Date(p.date).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}