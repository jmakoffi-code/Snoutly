import Link from "next/link";

export default function SpecCard({ article }) {
  return (
    <Link href={`/article/${article.slug}`} className="spec-card">
      <div className="tag-row">
        <span className="entry-no">№ {article.entryNo}</span>
        <span>{article.tag}</span>
      </div>
      <div className="body">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="meta">
          {article.steps ? <span>{article.steps} steps</span> : null}
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
