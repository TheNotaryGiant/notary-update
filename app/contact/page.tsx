import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { pageMeta } from "@/lib/page-meta";
import { media, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact a Mobile Notary",
  description:
    "Book a commissioned New York notary for NYC or Nassau County. Call (646) 423-6350 or send an appointment request.",
  path: "/contact",
  image: media.bookingPortrait,
});

export default function ContactPage() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="headline">Get in touch</h1>
        </div>
      </header>

      <section className="contact-grid">
        <div className="panel panel--wide">
          <p className="kicker">We’re here to assist</p>
          <h2 className="title">Book a New York notary</h2>
          <p className="reading">
            Call or use the form. We confirm the time, the place, and the
            documents before a notary travels anywhere in New York City or
            Nassau County.
          </p>
          <ul className="contact-details">
            <li>
              <span className="meta">Phone</span>
              <a href={site.phoneTel}>{site.phoneDisplay}</a>
            </li>
            <li>
              <span className="meta">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="meta">Location</span>
              {site.location}
            </li>
            <li>
              <span className="meta">Hours</span>
              {site.hours}
            </li>
          </ul>
          <div className="saas-hero__actions">
            <Button intent="call">Call {site.phoneDisplay}</Button>
          </div>
          <div className="saas-hero__media">
            <img
              src={media.bookingPortrait}
              alt="Oswald Joseph Bien-Aimé, Founder & CEO"
            />
          </div>
        </div>

        <div className="panel panel--wide">
          <p className="kicker">Inquiry</p>
          <h2 className="title">Send a request</h2>
          <p className="reading">
            Tell us what you need. We will follow up to confirm timing and
            documents.
          </p>
          <Suspense fallback={<p className="reading">Loading the request form.</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
