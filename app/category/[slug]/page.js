import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecCard from "@/components/SpecCard";
import AdSlot from "@/components/AdSlot";
import { categories, getArticlesByCategory, getCategoryBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return { title: category.label, description: category.description };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getArticlesByCategory(category.slug);
  const firstHalf = items.slice(0, 8);
  const secondHalf = items.slice(8);

  return (
    <>
      <Header activeCategory={category.slug} />

      <div className="category-header">
        <div className="wrap">
          <p className="hero-eyebrow">Category, {items.length} {items.length === 1 ? "entry" : "entries"}</p>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="wrap">
        <div style={{ marginTop: 24 }}>
          <AdSlot type="leaderboard" />
        </div>
      </div>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          {items.length === 0 ? (
            <div className="empty-state">
              <h3>Entries coming soon</h3>
              <p>We&apos;re still writing this category. Check back shortly, or browse another one from the menu above.</p>
            </div>
          ) : (
            <>
              <div className="card-grid">
                {firstHalf.map((a) => <SpecCard key={a.slug} article={a} />)}
              </div>
              {secondHalf.length > 0 ? (
                <>
                  <AdSlot type="in-content" />
                  <div className="card-grid">
                    {secondHalf.map((a) => <SpecCard key={a.slug} article={a} />)}
                  </div>
                </>
              ) : null}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
