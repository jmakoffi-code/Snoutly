import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="logo" style={{ color: "var(--paper)" }}>
            Snoutly
          </Link>
          <p style={{ fontSize: 14, opacity: 0.75, maxWidth: "38ch", marginTop: 12 }}>
            A field guide to everyday pet care, practical, tested, and written in plain steps.
          </p>
        </div>
        <div>
          <h4>Dogs</h4>
          <ul>
            <li><Link href="/category/dog-training">Training &amp; Behavior</Link></li>
            <li><Link href="/category/health-wellness">Health &amp; Wellness</Link></li>
            <li><Link href="/category/grooming">Grooming</Link></li>
          </ul>
        </div>
        <div>
          <h4>Cats</h4>
          <ul>
            <li><Link href="/category/cat-care">Behavior &amp; Care</Link></li>
            <li><Link href="/category/grooming">Grooming</Link></li>
            <li><Link href="/category/health-wellness">Health &amp; Wellness</Link></li>
          </ul>
        </div>
        <div>
          <h4>Site</h4>
          <ul>
            <li><Link href="/about">About Snoutly</Link></li>
            <li><Link href="/editorial-guidelines">Editorial Guidelines</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Snoutly. All entries independently researched.</span>
        <span>Not a substitute for veterinary advice.</span>
      </div>
    </footer>
  );
}

