import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-shell">
        <div>
          <Link href="/" className="footer-brand">Nails <em>By Wyjona</em></Link>
          <p>Gelnagels &amp; Nail Art in Sneek</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Ontdek</span>
            <Link href="/">Home</Link>
            <Link href="/over-mij">Over mij</Link>
            <Link href="/afspraak">Afspraak maken</Link>
          </div>
          <div>
            <span>Volg &amp; vind</span>
            <a href="https://www.instagram.com/nailsbywyjona/" target="_blank" rel="noreferrer">◎ Instagram</a>
            <a href="https://maps.google.com/?q=Monnikmolen+41+Sneek" target="_blank" rel="noreferrer">Route naar de salon</a>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom content-shell">
        <span>© {new Date().getFullYear()} Nails By Wyjona</span>
        <span>Met aandacht gemaakt in Sneek</span>
      </div>
    </footer>
  );
}
