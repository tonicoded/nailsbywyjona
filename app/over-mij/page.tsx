import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Over mij | Nails By Wyjona", description: "Maak kennis met Wyjona en haar persoonlijke nagelsalon aan huis in Sneek." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero section-shell">
        <div className="inner-hero-copy"><p className="eyebrow"><span /> Over mij</p><h1>Hi, ik ben<br /><em>Wyjona.</em></h1><p>26 jaar, woonachtig in Sneek en gek op het maken van mooie gelnagels die precies bij jou passen.</p></div>
        <div className="inner-hero-image"><Image src="/images/wyjona-studio.png" alt="Wyjona in haar nagelsalon aan huis" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </section>

      <section className="story section-shell">
        <p className="story-lead">Voor mij is een afspraak meer dan alleen <em>mooie nagels.</em></p>
        <div className="story-body"><p>Het is ook even een rustig moment voor jezelf. In mijn salon aan huis ontvang ik je in een ontspannen en persoonlijke setting, zonder drukte en met alle aandacht voor jouw wensen.</p><p>Of je nu houdt van clean en naturel, een klassieke French of juist een creatief design: we kijken samen wat mooi staat en goed voelt. Mijn doel is simpel — jij gaat de deur uit met een set waar je steeds opnieuw blij van wordt.</p></div>
      </section>

      <section className="values-section">
        <div className="section-shell values-grid">
          <article><span>01</span><i>♡</i><h2>Persoonlijke aandacht</h2><p>Geen haastwerk, maar rustig de tijd om te luisteren naar jouw idee en te kijken wat bij je past.</p></article>
          <article><span>02</span><i>✦</i><h2>Verzorgd tot in detail</h2><p>Een mooie basis, nette afwerking en oog voor de kleine details die een set bijzonder maken.</p></article>
          <article className="value-image"><Image src="/images/botanical-nails.png" alt="Subtiele botanische nail art" fill sizes="(max-width: 800px) 100vw, 34vw" /></article>
        </div>
      </section>

      <section className="simple-cta section-shell"><p className="eyebrow centered"><span /> Zin in een afspraak?</p><h2>Jouw volgende set<br /><em>begint hier.</em></h2><Link href="/afspraak" className="button button-dark">Plan je afspraak <span>↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
