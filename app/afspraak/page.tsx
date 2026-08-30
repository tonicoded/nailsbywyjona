import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingPlanner } from "@/components/booking-planner";

export const metadata = { title: "Afspraak maken | Nails By Wyjona", description: "Vraag eenvoudig een afspraak aan voor gelnagels of nail art bij Nails By Wyjona in Sneek." };

export default function BookingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="booking-page-hero section-shell">
        <div className="booking-page-copy"><p className="eyebrow"><span /> Afspraak maken</p><h1>Tijd voor<br /><em>jouw nieuwe set.</em></h1><p>Vertel me wat je mooi vindt en wanneer je het liefst langskomt. Ik laat je zo snel mogelijk weten welk moment beschikbaar is.</p><div className="booking-facts"><div><i>⌖</i><span><strong>Salon aan huis</strong>Monnikmolen 41, Sneek</span></div><div><i>◷</i><span><strong>Alleen op afspraak</strong>Ochtend, middag of avond</span></div><div><i>○</i><span><strong>Bevestiging via DM</strong>Persoonlijk contact met Wyjona</span></div></div></div>
        <div className="booking-side-image"><Image src="/images/nail-art-espresso.png" alt="Elegante espresso nail art" fill priority sizes="(max-width: 900px) 100vw, 36vw" /></div>
      </section>
      <section className="planner-section section-shell"><div className="planner-intro"><p className="eyebrow"><span /> Jouw voorkeur</p><h2>Stuur je<br /><em>aanvraag.</em></h2><p>Je ingevulde aanvraag wordt voor je gekopieerd. Daarna opent Instagram, zodat je het bericht direct naar Wyjona kunt sturen.</p></div><BookingPlanner /></section>
      <section className="booking-steps section-shell"><article><span>01</span><h3>Kies je behandeling</h3><p>Geef aan waar je naar op zoek bent en voeg eventueel je inspiratie toe in je DM.</p></article><article><span>02</span><h3>Kies je voorkeur</h3><p>Vul een datum en dagdeel in. Een andere optie noemen mag natuurlijk ook.</p></article><article><span>03</span><h3>Ontvang bevestiging</h3><p>Wyjona kijkt wat mogelijk is en bevestigt persoonlijk jouw definitieve afspraak.</p></article></section>
      <SiteFooter />
    </main>
  );
}
