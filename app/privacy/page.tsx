import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Privacy | Nails By Wyjona" };

export default function PrivacyPage() {
  return <main><SiteHeader /><article className="legal section-shell"><p className="eyebrow"><span /> Privacy</p><h1>Jouw gegevens,<br /><em>netjes behandeld.</em></h1><p>Wanneer je een afspraak aanvraagt, verwerkt Nails By Wyjona de gegevens die je zelf invult: je naam, e-mailadres, telefoonnummer, gekozen behandeling, voorkeursmoment en eventuele extra wensen.</p><h2>Afspraakgegevens</h2><p>Deze gegevens worden alleen gebruikt om jouw aanvraag te behandelen, contact met je op te nemen en de afspraak te bevestigen. De aanvraag wordt via onze e-maildienst veilig naar Nails By Wyjona verzonden en niet gebruikt voor reclame.</p><h2>Bewaartermijn</h2><p>Afspraakgegevens worden niet langer bewaard dan nodig is voor het plannen, uitvoeren en administratief afhandelen van de behandeling.</p><h2>Vragen</h2><p>Heb je een vraag over jouw gegevens of wil je ze laten verwijderen? Neem dan rechtstreeks contact op met Nails By Wyjona.</p></article><SiteFooter /></main>;
}
