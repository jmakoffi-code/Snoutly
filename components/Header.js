import Link from "next/link";
import { categories } from "@/lib/articles";

export default function Header({ activeCategory }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="mark">S</span>Snoutly
        </Link>
        <span className="tagline">A field guide to pet care</span>
        <form className="search-form" role="search" action="/search">
          <input
            type="search"
            name="q"
            placeholder='Search a topic, e.g. "nail trimming"'
            aria-label="Search Snoutly"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <nav className="index-tabs" aria-label="Categories">
        <div className="wrap">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={activeCategory === c.slug ? "active" : ""}
            >
              {c.label.replace(" & Behavior", "").replace(" & Hygiene", "").replace(" & Wellness", "").replace(" & Products", "").replace("New Pet Owner Guides", "New Owner Guides")}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

