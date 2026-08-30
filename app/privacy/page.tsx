import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Privacy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <main><SiteHeader /><article className="legal section-shell"><p className="eyebrow"><span /> Privacy</p><h1>Jouw gegevens,<br /><em>netjes behandeld.</em></h1><p>Nails By Wyjona is nog niet geopend. De website heeft daarom op dit moment geen actief afspraakformulier en verzamelt geen afspraakgegevens.</p><h2>Contact en afspraken</h2><p>Zodra de salon opent en online aanvragen mogelijk worden, wordt deze privacyverklaring bijgewerkt. Je leest dan duidelijk welke gegevens nodig zijn, waarvoor ze worden gebruikt en hoe lang ze worden bewaard.</p><h2>Externe diensten</h2><p>De website kan links en ingesloten onderdelen van externe diensten bevatten, zoals Instagram en Google Maps. Deze partijen kunnen hun eigen privacyvoorwaarden toepassen wanneer je hun dienst gebruikt.</p><h2>Vragen</h2><p>Heb je een vraag over privacy of over Nails By Wyjona? Neem dan rechtstreeks contact op via de contactgegevens op deze website.</p></article><SiteFooter /></main>;
}
