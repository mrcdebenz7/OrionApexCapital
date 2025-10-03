import Link from "next/link";

export default function CaseStudyCard({ slug, title, outcome, tags = [] }) {
  return (
    <Link
      href={`/freelance/${slug}`}
      className="card block hover:translate-y-[-2px] transition"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-slate-300 mt-2">{outcome}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span key={t} className="rounded bg-white/10 px-2 py-1 text-xs">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

