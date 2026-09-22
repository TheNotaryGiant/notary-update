import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

type ServiceSection = {
  heading: string;
  body: string;
};

type ServicePageProps = {
  kicker: string;
  title: string;
  lede: string;
  sections: ServiceSection[];
};

export function ServicePage({ kicker, title, lede, sections }: ServicePageProps) {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">{kicker}</p>
          <h1 className="headline">{title}</h1>
        </div>
        <Button intent="book">Book an Appointment</Button>
      </header>

      <section className="panel panel--wide">
        <p className="reading-lg">{lede}</p>
        <div className="saas-hero__actions">
          <Button intent="book">Book an Appointment</Button>
          <Button intent="call">Call {site.phoneDisplay}</Button>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="panel panel--wide">
          <h2 className="headline">{section.heading}</h2>
          <p className="reading">{section.body}</p>
        </section>
      ))}

      <p className="meta">
        The Notary Giant® is not a law firm. See the{" "}
        <Link href="/areas">service areas</Link> and the{" "}
        <Link href="/terms-of-use">terms of use</Link> before you book.
      </p>
    </div>
  );
}
