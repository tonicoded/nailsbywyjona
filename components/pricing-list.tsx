import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const prices = [
  { name: "Nieuwe set gelnagels", detail: "Naturel of één kleur", price: "€ 39" },
  { name: "Gelnagels bijwerken", detail: "Binnen 3–4 weken", price: "€ 34" },
  { name: "Gelpolish", detail: "Op de natuurlijke nagel", price: "€ 27" },
  { name: "French finish", detail: "Als toevoeging", price: "+ € 5" },
  { name: "Subtiele nail art", detail: "Tot twee nagels", price: "+ € 2" },
  { name: "Nail art volledige set", detail: "Afhankelijk van het ontwerp", price: "v.a. € 9" },
  { name: "Verwijderen", detail: "Inclusief verzorging", price: "€ 14" },
];

export function PricingList({ compact = false }: { compact?: boolean }) {
  const visiblePrices = compact ? prices.slice(0, 4) : prices;
  return (
    <div className="pricing-list">
      {visiblePrices.map((item, index) => (
        <div className="price-row" key={item.name}>
          <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
          <div><strong>{item.name}</strong><small>{item.detail}</small></div>
          <b>{item.price}</b>
        </div>
      ))}
      {compact && <Link href="/prijzen" className="pricing-more">Bekijk de volledige prijslijst <ArrowRightIcon /></Link>}
    </div>
  );
}
