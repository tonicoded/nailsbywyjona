import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Privacy | Nails By Wyjona" };

export default function PrivacyPage() {
  return <main><SiteHeader /><article className="legal section-shell"><p className="eyebrow"><span /> Privacy</p><h1>Jouw gegevens,<br /><em>netjes behandeld.</em></h1><p>Deze website verzamelt niet automatisch persoonsgegevens via een eigen boekingssysteem. Wanneer je via Instagram contact opneemt, is het privacybeleid van Instagram van toepassing.</p><h2>Afspraakgegevens</h2><p>Gegevens die je deelt voor het plannen van een afspraak worden alleen gebruikt om contact met je op te nemen en jouw behandeling af te stemmen.</p><h2>Vragen</h2><p>Heb je een vraag over jouw gegevens? Neem dan rechtstreeks contact op met Nails By Wyjona via Instagram.</p></article><SiteFooter /></main>;
}
