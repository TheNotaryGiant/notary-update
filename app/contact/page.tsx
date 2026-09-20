import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { media, site } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

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
          <h2 className="title">All your notary needs</h2>
          <p className="reading">
            Reach out through the form, or call now. Same-day appointments are
            available across NYC and surrounding areas.
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
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
