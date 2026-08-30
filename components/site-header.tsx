import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/afspraak", label: "Afspraak maken" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand-lockup" aria-label="Nails By Wyjona — home">
          <span className="brand-monogram">W</span>
          <span className="brand-copy"><strong>Nails By Wyjona</strong><small>Gel studio · Sneek</small></span>
        </Link>
        <nav aria-label="Hoofdnavigatie" className="desktop-nav">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        <Link href="/afspraak" className="nav-cta">Plan je afspraak <ArrowUpRightIcon /></Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><small>Menu</small><span className="menu-lines"><i /><i /></span></summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top"><span className="brand-monogram large">W</span><div><strong>Nails By Wyjona</strong><small>Gel studio · Sneek</small></div></div>
            <nav className="mobile-nav" aria-label="Mobiele navigatie">{links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}</nav>
            <Link href="/afspraak" className="mobile-booking-link">Plan je afspraak <ArrowUpRightIcon /></Link>
            <div className="mobile-sheet-footer"><span>Salon aan huis</span><span>Sneek · Friesland</span></div>
          </div>
        </details>
      </div>
    </header>
  );
}
