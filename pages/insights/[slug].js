import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default function Post({ post }) {
  return (
    <Layout title={post.title} description={post.excerpt}>
      <section className="container py-16 max-w-3xl">
        <article className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
            <p className="text-sm text-slate-400 mt-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>

          <div
            className="prose prose-invert prose-slate max-w-none
              prose-headings:text-neutral-100
              prose-p:text-slate-300
              prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-neutral-100
              prose-ul:text-slate-300
              prose-ol:text-slate-300"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
