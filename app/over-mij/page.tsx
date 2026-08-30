import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowUpRightIcon, HeartIcon, SparklesIcon } from "@/components/icons";

export const metadata = { title: "Over Wyjona | Nagelstyliste in Sneek", description: "Maak kennis met Wyjona, 26 jaar en oprichter van Nails By Wyjona: een persoonlijke nagelsalon aan huis die binnenkort opent in Sneek.", alternates: { canonical: "/over-mij" } };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero section-shell" data-reveal>
        <div className="inner-hero-copy"><p className="eyebrow"><span /> Over mij</p><h1>Hi, ik ben<br /><em>Wyjona.</em></h1><p>26 jaar, woonachtig in Sneek en gek op het maken van mooie gelnagels die precies bij jou passen.</p></div>
        <div className="inner-hero-image about-placeholder"><Image src="/images/hero-nude-gelnails.png" alt="Verzorgde naturel gelnagels in de stijl van Nails By Wyjona" fill priority sizes="(max-width: 800px) 100vw, 50vw" /><div className="photo-note"><span>W</span><p>Nails by Wyjona<br />Sneek · Friesland</p></div></div>
      </section>

      <section className="story section-shell" data-reveal>
        <p className="story-lead">Binnenkort draait het hier om meer dan alleen <em>mooie nagels.</em></p>
        <div className="story-body"><p>Mijn salon aan huis is nog niet geopend, maar ik kijk ernaar uit je straks te ontvangen in een ontspannen en persoonlijke setting, zonder drukte en met alle aandacht voor jouw wensen.</p><p>Of je nu houdt van clean en naturel, een klassieke French of juist een creatief design: straks kijken we samen wat mooi staat en goed voelt. Tot de opening kun je hier alvast kennismaken met mijn stijl.</p></div>
      </section>

      <section className="values-section" data-reveal>
        <div className="section-shell values-grid">
          <article><span>01</span><HeartIcon /><h2>Persoonlijke aandacht</h2><p>Geen haastwerk, maar rustig de tijd om te luisteren naar jouw idee en te kijken wat bij je past.</p></article>
          <article><span>02</span><SparklesIcon /><h2>Verzorgd tot in detail</h2><p>Een mooie basis, nette afwerking en oog voor de kleine details die een set bijzonder maken.</p></article>
          <article className="value-image"><Image src="/images/botanical-nails.png" alt="Subtiele botanische nail art" fill sizes="(max-width: 800px) 100vw, 34vw" /></article>
        </div>
      </section>

      <section className="simple-cta section-shell" data-reveal><p className="eyebrow centered"><span /> Binnenkort geopend</p><h2>Ontdek alvast onze<br /><em>kennismakingsprijzen.</em></h2><Link href="/prijzen" className="button button-dark">Bekijk prijzen <ArrowUpRightIcon /></Link></section>
      <SiteFooter />
    </main>
  );
}
