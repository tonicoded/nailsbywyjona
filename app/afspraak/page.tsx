import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRightIcon, ClockIcon, HeartIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Binnenkort geopend in Sneek",
  description: "Nails By Wyjona opent binnenkort in Sneek. Afspraken maken is nog niet mogelijk. Maak alvast kennis met Wyjona en bekijk de kennismakingsprijzen.",
  alternates: { canonical: "/afspraak" },
};

export default function OpeningSoonPage() {
  return (
    <main>
      <SiteHeader />
      <section className="opening-hero section-shell" data-reveal>
        <div className="opening-copy">
          <p className="eyebrow"><span /> Binnenkort geopend in Sneek</p>
          <h1>Nog even geduld,<br /><em>iets moois komt eraan.</em></h1>
          <p>Nails By Wyjona is nog niet geopend. Daarom kun je op dit moment nog geen afspraak maken. Achter de schermen wordt alles met zorg voorbereid voor een persoonlijke en ontspannen nagelervaring.</p>
          <div className="opening-actions"><Link href="/over-mij" className="button button-dark">Maak kennis met Wyjona <ArrowRightIcon /></Link><Link href="/prijzen" className="text-link">Bekijk prijzen <ArrowRightIcon /></Link></div>
        </div>
        <div className="opening-image"><Image src="/images/nail-art-espresso.png" alt="Elegante nail art van Nails By Wyjona in Sneek" fill priority sizes="(max-width: 900px) 100vw, 45vw" /><span>Binnenkort · Sneek</span></div>
      </section>

      <section className="opening-status section-shell" data-reveal>
        <article><ClockIcon /><span>01</span><h2>Nog niet geopend</h2><p>De salon is nog in voorbereiding. Er worden daarom nog geen afspraken aangenomen.</p></article>
        <article><HeartIcon /><span>02</span><h2>Wel alvast kennismaken</h2><p>Lees meer over Wyjona, haar stijl en de persoonlijke sfeer die centraal komt te staan.</p></article>
        <article><MapPinIcon /><span>03</span><h2>Binnenkort in Sneek</h2><p>De salon aan huis opent aan de Monnikmolen in Sneek. Het openingsnieuws volgt via deze website.</p></article>
      </section>
      <SiteFooter />
    </main>
  );
}
