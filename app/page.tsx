import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingList } from "@/components/pricing-list";
import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon, HeartIcon, HomeIcon, MapPinIcon, SparklesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nagelsalon Sneek | Gelnagels & Nail Art",
  description: "Nails By Wyjona is een nieuwe nagelsalon aan huis in Sneek voor gelnagels, French nails en nail art. Binnenkort geopend — bekijk alvast de kennismakingsprijzen.",
  alternates: { canonical: "/" },
};

const services = [
  { number: "01", title: "Gelnagels", text: "Sterke, verzorgde nagels met een prachtige glanzende finish.", image: "/images/hero-nude-gelnails.png" },
  { number: "02", title: "French", text: "Een tijdloze en elegante look die overal bij past.", image: "/images/micro-french.png" },
  { number: "03", title: "Nail Art", text: "Van subtiele details tot creatieve designs die helemaal bij jou passen.", image: "/images/nail-art-espresso.png" },
  { number: "04", title: "Custom Design", text: "Heb je inspiratie gezien? Samen maken we een set die perfect bij jouw stijl past.", image: "/images/botanical-nails.png" },
];

const gallery = [
  { src: "/images/glazed-blush-nails.png", alt: "Zacht blush glazed gelnagels", className: "gallery-tall" },
  { src: "/images/nail-art-espresso.png", alt: "Espresso lijntekening nail art", className: "gallery-standard" },
  { src: "/images/micro-french.png", alt: "Minimalistische micro French gelnagels", className: "gallery-wide" },
  { src: "/images/tortoiseshell-nails.png", alt: "Chocoladebruine tortoiseshell gelnagels", className: "gallery-standard" },
  { src: "/images/botanical-nails.png", alt: "Naturel gelnagels met botanische nail art", className: "gallery-tall" },
  { src: "/images/hero-nude-gelnails.png", alt: "Klassieke naturel gelnagels", className: "gallery-wide" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-anim hero-anim-1"><span /> Binnenkort open · Sneek</p>
          <h1 className="hero-anim hero-anim-2">Mooie nagels,<br /><em>helemaal jouw stijl.</em></h1>
          <p className="hero-intro hero-anim hero-anim-3">Nails By Wyjona opent binnenkort als persoonlijke nagelsalon aan huis in Sneek. Maak alvast kennis en ontdek wat je straks kunt verwachten.</p>
          <div className="hero-actions">
            <Link href="/over-mij" className="button button-dark hero-anim hero-anim-4">Maak kennis <ArrowUpRightIcon /></Link>
            <Link href="/prijzen" className="text-link hero-anim hero-anim-4">Bekijk prijzen <ArrowRightIcon /></Link>
          </div>
          <div className="hero-note">
            <span className="monogram">W</span>
            <p><strong>Persoonlijk &amp; ontspannen</strong><br />Een rustige salon aan huis in Sneek.</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><Image src="/images/hero-nude-gelnails.png" alt="Verzorgde naturel gelnagels op een zachte crèmekleurige ondergrond" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
          <p className="image-caption"><span>01</span> Natural beauty, made personal</p>
        </div>
      </section>

      <section className="trust-bar" aria-label="Waarom Nails By Wyjona" data-reveal>
        <div><HeartIcon /><span>Persoonlijke aandacht</span></div>
        <div><HomeIcon /><span>Salon aan huis in Sneek</span></div>
        <div><SparklesIcon /><span>Gelnagels &amp; nail art</span></div>
        <div><ClockIcon /><span>Binnenkort geopend</span></div>
      </section>

      <section className="home-pricing section-shell" id="prijzen" data-reveal>
        <div className="section-heading heading-split"><div><p className="eyebrow"><span /> Kennismakingsprijzen</p><h2>Een mooie start,<br /><em>voor een mooie prijs.</em></h2></div><p>Bij de opening profiteer je van speciale kennismakingsprijzen. Reserveren is nu nog niet mogelijk.</p></div>
        <PricingList compact />
      </section>

      <section className="services section-shell" id="behandelingen" data-reveal>
        <div className="section-heading heading-split">
          <div><p className="eyebrow"><span /> Behandelingen</p><h2>Wat mag ik<br /><em>voor je maken?</em></h2></div>
          <p>Kies voor naturel en rustig of ga voor een design met karakter. We kijken samen naar wat bij jou, je nagels en je stijl past.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
              <div className="service-copy"><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRightIcon /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" data-reveal>
        <div className="section-shell">
          <div className="section-heading gallery-heading"><div><p className="eyebrow light"><span /> Portfolio</p><h2>Een beetje <em>inspiratie.</em></h2></div><a href="https://www.instagram.com/nailsbywyjona/" target="_blank" rel="noreferrer" className="button button-light">Bekijk meer op Instagram <ArrowUpRightIcon /></a></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <div className={`gallery-item ${item.className}`} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>0{index + 1}</span></div>)}
          </div>
        </div>
      </section>

      <section className="about-preview section-shell" data-reveal>
        <div className="about-image-wrap"><div className="about-image"><Image src="/images/glazed-blush-nails.png" alt="Zacht blush gelnagels met een verfijnde glazed finish" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><span className="roundel">Nails · By Wyjona · Sneek ·</span></div>
        <div className="about-copy"><p className="eyebrow"><span /> Over mij</p><h2>Hi, ik ben <em>Wyjona.</em></h2><p>Ik ben 26 jaar en woon in Sneek. Wat begon met een liefde voor mooie nagels groeide uit tot mijn eigen nagelsalon aan huis. Ik vind het belangrijk dat je je op je gemak voelt en met nagels naar huis gaat waar je écht blij van wordt.</p><Link href="/over-mij" className="text-link">Meer over mij <ArrowRightIcon /></Link><blockquote>“Een mooi moment voor jezelf,<br />met aandacht voor ieder detail.”</blockquote></div>
      </section>

      <section className="booking-cta section-shell" data-reveal>
        <span className="booking-number">WYJONA / 26</span>
        <p className="eyebrow centered"><span /> Nog niet geopend</p>
        <h2>Iets moois <em>komt eraan.</em></h2>
        <p>We openen binnenkort in Sneek. Afspraken maken is op dit moment nog niet mogelijk.</p>
        <Link href="/afspraak" className="button button-light">Bekijk openingsnieuws <ArrowUpRightIcon /></Link>
      </section>

      <section className="location section-shell" data-reveal>
        <div className="location-copy"><p className="eyebrow"><span /> Binnenkort in Sneek</p><h2>Nagelsalon<br /><em>in Sneek.</em></h2><p>Nails By Wyjona opent binnenkort als kleinschalige nagelsalon aan huis in Sneek. Na de opening zijn klanten uit Sneek en omliggende plaatsen van harte welkom.</p><div className="address"><MapPinIcon /><div><strong>Monnikmolen 41</strong><span>8608 XX Sneek · Friesland</span></div></div></div>
        <div className="map-card"><iframe title="Kaart van Monnikmolen 41 in Sneek" src="https://www.google.com/maps?q=Monnikmolen+41,+Sneek,+Nederland&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-label" href="https://maps.google.com/?q=Monnikmolen+41+Sneek" target="_blank" rel="noreferrer"><span><MapPinIcon /> Sneek</span><small>Open route <ArrowUpRightIcon /></small></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
