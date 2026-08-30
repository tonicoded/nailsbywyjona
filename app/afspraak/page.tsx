import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingPlanner } from "@/components/booking-planner";
import { ClockIcon, MapPinIcon, MessageIcon } from "@/components/icons";

export const metadata = { title: "Afspraak maken | Nails By Wyjona", description: "Vraag eenvoudig een afspraak aan voor gelnagels of nail art bij Nails By Wyjona in Sneek." };

export default function BookingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="booking-page-hero section-shell" data-reveal>
        <div className="booking-page-copy"><p className="eyebrow"><span /> Afspraak maken</p><h1>Tijd voor<br /><em>jouw nieuwe set.</em></h1><p>Kies zelf een datum en exact tijdstip dat jou goed uitkomt. Ik laat je per e-mail zo snel mogelijk weten of het moment beschikbaar is.</p><div className="booking-facts"><div><MapPinIcon /><span><strong>Salon aan huis</strong>Monnikmolen 41, Sneek</span></div><div><ClockIcon /><span><strong>Kies jouw moment</strong>Datum en exacte voorkeurstijd</span></div><div><MessageIcon /><span><strong>Bevestiging per e-mail</strong>Persoonlijk contact met Wyjona</span></div></div></div>
        <div className="booking-side-image"><Image src="/images/nail-art-espresso.png" alt="Elegante espresso nail art" fill priority sizes="(max-width: 900px) 100vw, 36vw" /></div>
      </section>
      <section className="planner-section section-shell" data-reveal><div className="planner-intro"><p className="eyebrow"><span /> Jouw voorkeur</p><h2>Plan jouw<br /><em>moment.</em></h2><p>Kies rustig jouw behandeling, datum en tijd. Je aanvraag komt rechtstreeks bij Wyjona binnen en wordt daarna persoonlijk bevestigd.</p></div><BookingPlanner /></section>
      <section className="booking-steps section-shell" data-reveal><article><span>01</span><h3>Kies je behandeling</h3><p>Geef aan waar je naar op zoek bent en beschrijf eventueel jouw inspiratie.</p></article><article><span>02</span><h3>Selecteer datum &amp; tijd</h3><p>Kies in de agenda een datum en exact tijdstip dat jou goed uitkomt.</p></article><article><span>03</span><h3>Ontvang bevestiging</h3><p>Wyjona ontvangt je aanvraag per e-mail en bevestigt persoonlijk jouw afspraak.</p></article></section>
      <SiteFooter />
    </main>
  );
}
