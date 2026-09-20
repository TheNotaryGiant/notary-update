import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="headline">Get in touch</h1>
        </div>
      </header>
      <section className="panel panel--wide">
        <p className="reading-lg">
          Reach out through the booking form, or call now.
        </p>
        <div className="saas-hero__actions">
          <Button intent="book">Book an Appointment</Button>
          <Button intent="call">Call {site.phoneDisplay}</Button>
        </div>
      </section>
    </div>
  );
}
