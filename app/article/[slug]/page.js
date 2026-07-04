import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import {
  articles,
  getArticleBySlug,
  getCategoryBySlug,
  getRelatedArticles,
} from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getRelatedArticles(article);

  return (
    <>
      <Header activeCategory={article.category} />

      <div className="article-header">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Snoutly</Link> / <Link href={`/category/${article.category}`}>{category?.label}</Link> / {article.tag}
          </p>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span className="entry-stamp">№ {article.entryNo}</span>
            {article.steps ? <span>{article.steps} steps</span> : null}
            <span>{article.readTime}</span>
            <span>Difficulty: {article.difficulty}</span>
            <span>Updated {article.updated}</span>
          </div>
        </div>
      </div>

      <div className="article-layout">
        <div className="article-body">
          <p
            style={{ fontSize: 19, color: "var(--ink)" }}
            dangerouslySetInnerHTML={{ __html: article.intro }}
          />

          <div style={{ margin: "28px 0" }}>
            <AdSlot type="in-content" />
          </div>

          {article.whatYouNeed ? (
            <>
              <h2>What you&apos;ll need</h2>
              <p>{article.whatYouNeed}</p>
            </>
          ) : null}

          {article.stepList?.length ? (
            <>
              <h2>Steps</h2>
              <ol className="step-list">
                {article.stepList.map((step, i) => (
                  <li key={i}>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ) : null}

          {article.callout ? (
            <div className="callout">
              <strong>{article.callout.title}</strong>
              {article.callout.body}
            </div>
          ) : null}

          {article.extra ? (
            <>
              <h2>{article.extra.heading}</h2>
              <p>{article.extra.body}</p>
            </>
          ) : null}

          {article.faqs?.length ? (
            <>
              <h2>Frequently asked questions</h2>
              {article.faqs.map((faq, i) => (
                <details className="faq-item" key={i}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </>
          ) : null}
        </div>

        <aside className="sidebar">
          <AdSlot type="sidebar" />

          {related.length > 0 ? (
            <div className="related-box">
              <h4>Related entries</h4>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/article/${r.slug}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <AdSlot type="sidebar" />
        </aside>
      </div>

      <Footer />
    </>
  );
}
