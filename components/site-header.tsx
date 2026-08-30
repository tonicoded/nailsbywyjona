import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/afspraak", label: "Afspraak maken" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label="Nails By Wyjona — home"><span>Nails</span><span>By Wyjona</span></Link>
        <nav aria-label="Hoofdnavigatie" className="desktop-nav">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        <Link href="/afspraak" className="nav-cta">Plan je afspraak <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /></summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top"><strong>Nails By Wyjona</strong><small>Gelnagels &amp; nail art in Sneek</small></div>
            <nav className="mobile-nav" aria-label="Mobiele navigatie">{links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}</nav>
            <div className="mobile-sheet-footer"><span>Salon aan huis</span><span>Sneek · Friesland</span></div>
          </div>
        </details>
      </div>
    </header>
  );
}
