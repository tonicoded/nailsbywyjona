"use client";

import { FormEvent, useState } from "react";
import { format, startOfDay } from "date-fns";
import { nl } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const timeSlots = ["09:00", "11:30", "14:00", "16:30", "19:00"];

type SubmitState = "idle" | "sending" | "success" | "error";

export function BookingPlanner() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      setSubmitState("error");
      setFeedback("Kies eerst een datum en tijdstip.");
      return;
    }

    setSubmitState("sending");
    setFeedback("");
    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          treatment: data.get("treatment"),
          date: format(selectedDate, "yyyy-MM-dd"),
          time: selectedTime,
          notes: data.get("notes"),
          website: data.get("website"),
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Versturen is niet gelukt.");

      setSubmitState("success");
      setFeedback("Je aanvraag is verstuurd. Wyjona neemt per e-mail contact met je op.");
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "Er ging iets mis. Probeer het opnieuw.");
    }
  }

  return (
    <form className="booking-form booking-form-upgraded" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Kies jouw moment</span>
        <p>Selecteer een voorkeursdatum en exact tijdstip. Wyjona bevestigt persoonlijk wat beschikbaar is.</p>
      </div>

      <div className="booking-details-grid">
        <label className="booking-honeypot" aria-hidden="true"><span>Website</span><input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <label><span>Je naam</span><input name="name" type="text" autoComplete="name" placeholder="Voor- en achternaam" required /></label>
        <label><span>E-mailadres</span><input name="email" type="email" autoComplete="email" placeholder="jij@voorbeeld.nl" required /></label>
        <label><span>Telefoonnummer</span><input name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" required /></label>
        <label>
          <span>Behandeling</span>
          <select name="treatment" defaultValue="Nieuwe set gelnagels" required>
            <option>Nieuwe set gelnagels</option><option>Gelnagels bijwerken</option><option>French nails</option><option>Nail art / custom design</option>
          </select>
        </label>
      </div>

      <div className="appointment-picker">
        <div className="calendar-panel">
          <div className="picker-label"><span>01</span><div><strong>Kies een datum</strong><small>De salon is iedere dag geopend</small></div></div>
          <Calendar mode="single" selected={selectedDate} onSelect={(date) => { setSelectedDate(date); setSelectedTime(""); }} disabled={(date) => date < startOfDay(new Date())} locale={nl} showOutsideDays={false} className="booking-calendar" />
        </div>
        <div className="time-panel">
          <div className="picker-label"><span>02</span><div><strong>Kies een tijd</strong><small>{selectedDate ? format(selectedDate, "EEEE d MMMM", { locale: nl }) : "Selecteer eerst een datum"}</small></div></div>
          <div className="time-slots" role="group" aria-label="Beschikbare voorkeurstijden">
            {timeSlots.map((time) => <button key={time} type="button" className={selectedTime === time ? "time-slot selected" : "time-slot"} onClick={() => setSelectedTime(time)} disabled={!selectedDate} aria-pressed={selectedTime === time}><span>{time}</span><small>uur</small></button>)}
          </div>
          <p className="time-hint">De tijden zijn voorkeurstijden. Je afspraak staat vast zodra Wyjona hem heeft bevestigd.</p>
        </div>
      </div>

      <label className="booking-notes"><span>Extra wensen</span><textarea name="notes" rows={4} placeholder="Bijvoorbeeld: naturel, French of een design dat je hebt gezien…" /></label>

      <div className="booking-submit-row">
        <button type="submit" className="button button-dark submit-button" disabled={submitState === "sending"}>
          {submitState === "sending" ? <><span className="button-spinner" /> Aanvraag versturen</> : submitState === "success" ? <><CheckIcon /> Aanvraag verstuurd</> : <>Verstuur aanvraag <ArrowRightIcon /></>}
        </button>
        <p>Rechtstreeks en veilig naar Wyjona&apos;s e-mail.</p>
      </div>
      {feedback && <div className={`booking-feedback ${submitState}`} role="status">{submitState === "success" && <CheckIcon />}{feedback}</div>}
    </form>
  );
}
