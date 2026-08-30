import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClockIcon, HeartIcon, HomeIcon, MapPinIcon, SparklesIcon } from "@/components/icons";

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
          <p className="eyebrow"><span /> Gelnagels &amp; nail art · Sneek</p>
          <h1>Mooie nagels,<br /><em>helemaal jouw stijl.</em></h1>
          <p className="hero-intro">Van een rustige, natuurlijke look tot creatieve nail art. Bij Nails By Wyjona draait alles om mooie, verzorgde nagels waar jij blij van wordt.</p>
          <div className="hero-actions">
            <Link href="/afspraak" className="button button-dark">Plan je afspraak <span>↗</span></Link>
            <a href="#behandelingen" className="text-link">Bekijk behandelingen <span>↓</span></a>
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

      <section className="trust-bar" aria-label="Waarom Nails By Wyjona">
        <div><HeartIcon /><span>Persoonlijke aandacht</span></div>
        <div><HomeIcon /><span>Salon aan huis in Sneek</span></div>
        <div><SparklesIcon /><span>Gelnagels &amp; nail art</span></div>
        <div><ClockIcon /><span>Alleen op afspraak</span></div>
      </section>

      <section className="services section-shell" id="behandelingen">
        <div className="section-heading heading-split">
          <div><p className="eyebrow"><span /> Behandelingen</p><h2>Wat mag ik<br /><em>voor je maken?</em></h2></div>
          <p>Kies voor naturel en rustig of ga voor een design met karakter. We kijken samen naar wat bij jou, je nagels en je stijl past.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
              <div className="service-copy"><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><b>↗</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-shell">
          <div className="section-heading gallery-heading"><div><p className="eyebrow light"><span /> Portfolio</p><h2>Een beetje <em>inspiratie.</em></h2></div><a href="https://www.instagram.com/nailsbywyjona/" target="_blank" rel="noreferrer" className="button button-light">Bekijk meer op Instagram <span>↗</span></a></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <div className={`gallery-item ${item.className}`} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>0{index + 1}</span></div>)}
          </div>
        </div>
      </section>

      <section className="about-preview section-shell">
        <div className="about-image-wrap"><div className="about-image"><Image src="/images/glazed-blush-nails.png" alt="Zacht blush gelnagels met een verfijnde glazed finish" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><span className="roundel">Nails · By Wyjona · Sneek ·</span></div>
        <div className="about-copy"><p className="eyebrow"><span /> Over mij</p><h2>Hi, ik ben <em>Wyjona.</em></h2><p>Ik ben 26 jaar en woon in Sneek. Wat begon met een liefde voor mooie nagels groeide uit tot mijn eigen nagelsalon aan huis. Ik vind het belangrijk dat je je op je gemak voelt en met nagels naar huis gaat waar je écht blij van wordt.</p><Link href="/over-mij" className="text-link">Meer over mij <span>→</span></Link><blockquote>“Een mooi moment voor jezelf,<br />met aandacht voor ieder detail.”</blockquote></div>
      </section>

      <section className="booking-cta section-shell">
        <span className="booking-number">WYJONA / 26</span>
        <p className="eyebrow centered"><span /> Klaar voor een nieuwe set?</p>
        <h2>Toe aan <em>nieuwe nagels?</em></h2>
        <p>Vertel me waar je naar zoekt en plan eenvoudig jouw afspraak.</p>
        <Link href="/afspraak" className="button button-light">Plan je afspraak <span>↗</span></Link>
      </section>

      <section className="location section-shell">
        <div className="location-copy"><p className="eyebrow"><span /> Locatie</p><h2>Nagelsalon<br /><em>in Sneek.</em></h2><p>Nails By Wyjona is een kleinschalige nagelsalon aan huis in Sneek. Klanten uit Sneek en de omliggende plaatsen binnen ongeveer 10–20 km zijn natuurlijk van harte welkom.</p><div className="address"><MapPinIcon /><div><strong>Monnikmolen 41</strong><span>8608 XX Sneek · Friesland</span></div></div></div>
        <div className="map-card"><iframe title="Kaart van Monnikmolen 41 in Sneek" src="https://www.google.com/maps?q=Monnikmolen+41,+Sneek,+Nederland&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-label" href="https://maps.google.com/?q=Monnikmolen+41+Sneek" target="_blank" rel="noreferrer"><span><MapPinIcon /> Sneek</span><small>Open route ↗</small></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
