import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data, content } = matter(file);

      return { slug: filename.replace(/\.md$/, ""), ...data, content };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return { slug, ...data, html: processed.toString() };
}

