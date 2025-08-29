import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsDir);
  const paths = files.map((file) => ({ params: { slug: file.replace(/\.md$/, "") } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", "posts", `${params.slug}.md`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const html = marked.parse(content);
  return { props: { frontmatter: data, html } };
}

export default function Post({ frontmatter, html }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{frontmatter.title}</h1>
      <p className="text-xs text-slate-400 mt-2">{new Date(frontmatter.date).toLocaleDateString()}</p>
      <div className="prose prose-invert mt-8" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}