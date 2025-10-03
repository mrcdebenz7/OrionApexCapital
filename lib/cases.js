import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const casesDir = path.join(process.cwd(), "content", "cases");

export function getAllCases() {
  const files = fs.readdirSync(casesDir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const file = fs.readFileSync(path.join(casesDir, filename), "utf8");
    const { data, content } = matter(file);

    return { slug: filename.replace(/\.md$/, ""), ...data, content };
  });
}

export async function getCaseBySlug(slug) {
  const file = fs.readFileSync(path.join(casesDir, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return { slug, ...data, html: processed.toString() };
}

