import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const treatments = [
  { name: "Nieuwe set gelnagels", detail: "Naturel of één kleur", price: "€ 39" },
  { name: "Gelnagels bijwerken", detail: "Binnen 3–4 weken", price: "€ 34" },
  { name: "Gelpolish", detail: "Op de natuurlijke nagel", price: "€ 27" },
];

const extras = [
  { name: "French finish", detail: "Als toevoeging", price: "+ € 5" },
  { name: "Subtiele nail art", detail: "Tot twee nagels", price: "+ € 2" },
  { name: "Nail art volledige set", detail: "Afhankelijk van het ontwerp", price: "v.a. € 9" },
  { name: "Verwijderen", detail: "Inclusief verzorging", price: "€ 14" },
];

export function PricingList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`pricing-menu${compact ? " is-compact" : ""}`}>
      <div className="treatment-grid">
        {treatments.map((item, index) => (
          <article className={index === 0 ? "treatment-card featured" : "treatment-card"} key={item.name}>
            <div className="treatment-card-top"><span>0{index + 1}</span>{index === 0 && <small>Meest gekozen</small>}</div>
            <div><p>{item.detail}</p><h3>{item.name}</h3></div>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
      {!compact && <div className="extras-list"><div className="extras-heading"><span>Extra&apos;s &amp; verzorging</span><small>Altijd vooraf besproken</small></div>{extras.map((item) => <div className="extra-row" key={item.name}><div><strong>{item.name}</strong><small>{item.detail}</small></div><b>{item.price}</b></div>)}</div>}
      {compact && <Link href="/prijzen" className="pricing-more">Bekijk alle prijzen <ArrowRightIcon /></Link>}
    </div>
  );
}
