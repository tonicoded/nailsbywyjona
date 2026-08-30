import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/prijzen", label: "Prijzen" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand-lockup" aria-label="Nails By Wyjona — home">
          <span className="header-brand"><strong>Nails</strong><em>By Wyjona</em></span>
          <small>Gel studio · Sneek</small>
        </Link>
        <nav aria-label="Hoofdnavigatie" className="desktop-nav">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        <Link href="/afspraak" className="nav-cta opening-pill"><span className="status-dot" /> Opening binnenkort</Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><small>Menu</small><span className="menu-lines"><i /><i /></span></summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top"><span className="header-brand large"><strong>Nails</strong><em>By Wyjona</em></span><small>Gel studio · Sneek</small></div>
            <nav className="mobile-nav" aria-label="Mobiele navigatie">{links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}</nav>
            <Link href="/afspraak" className="mobile-booking-link"><span><i className="status-dot" /> Opening binnenkort</span><ArrowUpRightIcon className="header-arrow" width={18} height={18} /></Link>
            <div className="mobile-sheet-footer"><span>Binnenkort open</span><span>Sneek · Friesland</span></div>
          </div>
        </details>
      </div>
    </header>
  );
}
