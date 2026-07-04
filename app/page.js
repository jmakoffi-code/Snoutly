import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecCard from "@/components/SpecCard";
import AdSlot from "@/components/AdSlot";
import { getArticleBySlug, getArticlesByCategory } from "@/lib/articles";

export default function HomePage() {
  const featured = getArticleBySlug("trim-dog-nails-safely");
  const dogTraining = getArticlesByCategory("dog-training").slice(0, 4);
  const catCare = getArticlesByCategory("cat-care").slice(0, 4);
  const newOwner = getArticlesByCategory("new-owner").slice(0, 4);

  return (
    <>
      <Header activeCategory="dog-training" />

      <section className="hero">
        <div className="wrap">
          <div>
            <p className="hero-eyebrow">Entry 001, welcome</p>
            <h1>The pet questions you actually search for, answered in plain steps.</h1>
            <p className="lede">
              No life story before the instructions. No &quot;every dog is different&quot; hedging
              for six paragraphs. Just what to do, in order, and why it works.
            </p>
            <div className="hero-species">
              <Link href="/category/dog-training" className="species-pill">🐕 Dogs</Link>
              <Link href="/category/cat-care" className="species-pill">🐈 Cats</Link>
              <Link href="/category/new-owner" className="species-pill">🐇 Small pets</Link>
              <Link href="/category/new-owner" className="species-pill">🆕 New owners</Link>
            </div>
          </div>
          {featured ? (
            <div className="hero-card">
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <div className="stat-row">
                <div><strong>{featured.steps}</strong>steps</div>
                <div><strong>{featured.readTime.split(" ")[0]}</strong>read</div>
                <div><strong>{featured.difficulty}</strong>difficulty</div>
              </div>
              <Link
                href={`/article/${featured.slug}`}
                style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.6px" }}
              >
                Read the entry →
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <div className="wrap">
        <div style={{ marginTop: 24 }}>
          <AdSlot type="leaderboard" />
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Dog Training &amp; Behavior</h2>
            <Link href="/category/dog-training" className="see-all">View all entries →</Link>
          </div>
          <div className="card-grid">
            {dogTraining.map((a) => <SpecCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Cat Care &amp; Behavior</h2>
            <Link href="/category/cat-care" className="see-all">View all entries →</Link>
          </div>
          <div className="card-grid">
            {catCare.map((a) => <SpecCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <div className="wrap">
        <AdSlot type="in-content" />
      </div>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <div className="section-head">
            <h2>New Pet Owner Guides</h2>
            <Link href="/category/new-owner" className="see-all">View all entries →</Link>
          </div>
          <div className="card-grid">
            {newOwner.map((a) => <SpecCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

