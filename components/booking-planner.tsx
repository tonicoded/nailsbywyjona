"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

export function BookingPlanner() {
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi Wyjona! Ik wil graag een afspraak aanvragen.\n\nNaam: ${data.get("name")}\nBehandeling: ${data.get("treatment")}\nVoorkeursdatum: ${data.get("date")}\nVoorkeur: ${data.get("time")}\nExtra wensen: ${data.get("notes") || "Geen"}`;
    await navigator.clipboard.writeText(message);
    setCopied(true);
    window.open("https://www.instagram.com/nailsbywyjona/", "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Afspraakaanvraag</span>
        <p>Vul je voorkeur in. Je bericht wordt gekopieerd en Instagram opent automatisch.</p>
      </div>
      <div className="form-grid">
        <label>
          <span>Je naam</span>
          <input name="name" type="text" placeholder="Voornaam" required />
        </label>
        <label>
          <span>Behandeling</span>
          <select name="treatment" defaultValue="Nieuwe set gelnagels" required>
            <option>Nieuwe set gelnagels</option>
            <option>Gelnagels bijwerken</option>
            <option>French nails</option>
            <option>Nail art / custom design</option>
          </select>
        </label>
        <label>
          <span>Voorkeursdatum</span>
          <input name="date" type="date" required />
        </label>
        <label>
          <span>Voorkeurstijd</span>
          <select name="time" defaultValue="Avond">
            <option>Ochtend</option>
            <option>Middag</option>
            <option>Avond</option>
            <option>Flexibel</option>
          </select>
        </label>
        <label className="form-full">
          <span>Extra wensen</span>
          <textarea name="notes" rows={4} placeholder="Bijvoorbeeld: naturel, French of een design dat je hebt gezien…" />
        </label>
      </div>
      <button type="submit" className="button button-dark submit-button">
        {copied ? <><CheckIcon /> Gekopieerd — open Instagram</> : <>Kopieer &amp; open Instagram <ArrowUpRightIcon /></>}
      </button>
      <p className="form-note">Je aanvraag is pas definitief nadat Wyjona de afspraak heeft bevestigd.</p>
    </form>
  );
}
