import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingList } from "@/components/pricing-list";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Prijzen gelnagels in Sneek",
  description: "Bekijk de kennismakingsprijzen voor gelnagels, gelpolish, French nails en nail art bij Nails By Wyjona, een nagelsalon aan huis in Sneek.",
  alternates: { canonical: "/prijzen" },
};

export default function PricesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="prices-hero section-shell">
        <div className="prices-title"><p className="eyebrow"><span /> Kennismakingsprijzen</p><h1>Mooi geprijsd,<br /><em>met alle aandacht.</em></h1><p>Verzorgde gelnagels, een rustige sfeer en persoonlijke aandacht — straks gewoon in Sneek.</p></div>
        <aside className="prices-hero-card"><span className="status-line"><i className="status-dot" /> Opening binnenkort</span><div><small>Behandelingen vanaf</small><strong>€ 27</strong></div><p>Introductietarieven voor de eerste periode na opening. Reserveren is nu nog niet mogelijk.</p></aside>
      </section>
      <section className="prices-main section-shell" data-reveal>
        <div><div className="prices-section-heading"><span>Behandelingen</span><p>Heldere prijzen, zonder verrassingen.</p></div><PricingList /></div>
        <aside className="price-note"><span>Goed om te weten</span><h2>Jouw set is altijd persoonlijk.</h2><p>De uiteindelijke prijs kan iets verschillen bij extra lengte, uitgebreide nail art of een reparatie. Dat bespreken we altijd vooraf, zodat je precies weet waar je aan toe bent.</p><div className="price-note-signature">Nails <em>By Wyjona</em></div></aside>
      </section>
      <section className="simple-cta section-shell" data-reveal><p className="eyebrow centered"><span /> Nog niet geopend</p><h2>Maak alvast kennis<br /><em>met Wyjona.</em></h2><Link href="/over-mij" className="button button-dark">Lees mijn verhaal <ArrowRightIcon /></Link></section>
      <SiteFooter />
    </main>
  );
}
