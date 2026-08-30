import { NextResponse } from "next/server";

const treatments = new Set(["Nieuwe set gelnagels", "Gelnagels bijwerken", "French nails", "Nail art / custom design"]);
const times = new Set(["09:00", "11:30", "14:00", "16:30", "19:00"]);

function text(value: unknown, maxLength: number) { return typeof value === "string" ? value.trim().slice(0, maxLength) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character); }

export async function POST(request: Request) {
  const bookingEmail = process.env.BOOKING_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  if (!bookingEmail || !resendKey) return NextResponse.json({ message: "De e-mailontvangst wordt nog ingesteld. Probeer het later opnieuw." }, { status: 503 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Ongeldige aanvraag." }, { status: 400 }); }

  const name = text(body.name, 100);
  const email = text(body.email, 160).toLowerCase();
  const phone = text(body.phone, 40);
  const treatment = text(body.treatment, 80);
  const date = text(body.date, 10);
  const time = text(body.time, 5);
  const notes = text(body.notes, 1200);
  const website = text(body.website, 200);
  if (website) return NextResponse.json({ ok: true });
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const dateIsValid = /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(`${date}T12:00:00`));
  const requestedDate = new Date(`${date}T12:00:00`);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  if (!name || !emailIsValid || !phone || !treatments.has(treatment) || !dateIsValid || requestedDate < today || !times.has(time)) return NextResponse.json({ message: "Controleer je gegevens en probeer het opnieuw." }, { status: 400 });

  const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), treatment: escapeHtml(treatment), date: escapeHtml(date), time: escapeHtml(time), notes: escapeHtml(notes || "Geen extra wensen") };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.BOOKING_FROM_EMAIL || "Nails By Wyjona <onboarding@resend.dev>", to: [bookingEmail], reply_to: email,
      subject: `Nieuwe afspraakaanvraag van ${name} · ${date} om ${time}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:620px;color:#201b18"><p style="color:#9f7966;text-transform:uppercase;letter-spacing:2px;font-size:11px">Nails By Wyjona</p><h1 style="font-family:Georgia,serif;font-weight:400">Nieuwe afspraakaanvraag</h1><table style="width:100%;border-collapse:collapse"><tr><td style="padding:12px 0;border-bottom:1px solid #e4dad1;color:#6f665f">Naam</td><td style="padding:12px 0;border-bottom:1px solid #e4dad1"><strong>${safe.name}</strong></td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e4dad1;color:#6f665f">E-mail</td><td style="padding:12px 0;border-bottom:1px solid #e4dad1">${safe.email}</td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e4dad1;color:#6f665f">Telefoon</td><td style="padding:12px 0;border-bottom:1px solid #e4dad1">${safe.phone}</td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e4dad1;color:#6f665f">Behandeling</td><td style="padding:12px 0;border-bottom:1px solid #e4dad1">${safe.treatment}</td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e4dad1;color:#6f665f">Moment</td><td style="padding:12px 0;border-bottom:1px solid #e4dad1"><strong>${safe.date} om ${safe.time}</strong></td></tr></table><h2 style="font-family:Georgia,serif;font-weight:400;margin-top:28px">Extra wensen</h2><p style="line-height:1.7">${safe.notes.replace(/\n/g, "<br>")}</p><p style="margin-top:30px;font-size:12px;color:#6f665f">Beantwoord deze e-mail om direct contact op te nemen met de klant.</p></div>`,
    }),
  });
  if (!response.ok) { console.error("Resend booking error", response.status, await response.text()); return NextResponse.json({ message: "Versturen lukte niet. Probeer het over een paar minuten opnieuw." }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
