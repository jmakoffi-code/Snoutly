import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecCard from "@/components/SpecCard";
import { articles } from "@/lib/articles";

export const metadata = { title: "Search" };

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const q = (params?.q || "").toLowerCase().trim();
  const results = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tag.toLowerCase().includes(q)
      )
    : [];

  return (
    <>
      <Header />
      <div className="category-header">
        <div className="wrap">
          <p className="hero-eyebrow">Search</p>
          <h1>{q ? `Results for “${q}”` : "Search Snoutly"}</h1>
          <p>{q ? `${results.length} ${results.length === 1 ? "entry" : "entries"} found.` : "Try a topic like nail trimming, recall, or litter training."}</p>
        </div>
      </div>
      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          {q && results.length === 0 ? (
            <div className="empty-state">
              <h3>No entries matched</h3>
              <p>Try a different word, or browse a category from the menu above.</p>
            </div>
          ) : (
            <div className="card-grid">
              {results.map((a) => <SpecCard key={a.slug} article={a} />)}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
