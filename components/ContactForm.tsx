"use client";

import { type FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { inquiryServices, site } from "@/lib/site";

function appointmentLine(area: string) {
  if (/^(in|on)\s/i.test(area)) {
    return `This request is for an appointment ${area}.`;
  }
  if (area === "Staten Island" || area === "City Island") {
    return `This request is for an appointment on ${area}.`;
  }
  return `This request is for an appointment in ${area}.`;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const params = useSearchParams();
  const area = (params.get("area") ?? "").replace(/[\r\n<>]/g, "").trim().slice(0, 80);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const details = String(data.get("details") || "").trim();
    const subject = encodeURIComponent(
      `Notary inquiry${service ? ` — ${service}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nArea: ${area || "Not specified"}\n\n${details}`,
    );
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form id="form" className="contact-form" onSubmit={onSubmit}>
      {area ? (
        <p className="reading">{appointmentLine(area)}</p>
      ) : null}
      <label className="field">
        <span>Full name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="field">
        <span>Service</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          {inquiryServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label className="field field--wide">
        <span>Appointment details</span>
        <textarea name="details" rows={5} required />
      </label>
      <button className="btn btn-book btn-md" type="submit">
        {sent ? "Opening email…" : "Send inquiry"}
      </button>
    </form>
  );
}
