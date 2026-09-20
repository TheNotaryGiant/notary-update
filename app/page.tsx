import { Button } from "@/components/ui/Button";
import { media, site } from "@/lib/site";

const services = [
  {
    kicker: "Mobile",
    title: "Notary services",
    href: "/notary-services",
    body: "Acknowledgments, oaths, and execution of eligible documents — on your schedule.",
  },
  {
    kicker: "International",
    title: "Apostille assistance",
    href: "/apostille-authentication",
    body: "Preparation and coordination for documents intended for use outside the United States.",
  },
  {
    kicker: "Closings",
    title: "Loan signings",
    href: "/signature-witnessing",
    body: "Available for lenders, title companies, attorneys, and real estate professionals.",
  },
];

export default function Home() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Overview</p>
          <h1 className="headline">Notary operations for New York</h1>
        </div>
      </header>

      <section className="saas-hero">
        <div className="saas-hero__copy">
          <p className="kicker">The Notary Giant®</p>
          <h2 className="display">
            Precision, speed, and care — wherever the documents are.
          </h2>
          <p className="reading-lg">
            Same-day appointments, commissioned New York notaries, and
            apostille assistance across NYC and surrounding areas.
          </p>
          <div className="saas-hero__actions">
            <Button intent="book" size="lg">
              Book an Appointment
            </Button>
            <Button intent="call" size="lg">
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
        <div className="saas-hero__media">
          <img
            src={media.heroStamp}
            alt="Notary seal being applied to a document"
          />
        </div>
      </section>

      <section className="stat-row" aria-label="Practice snapshot">
        <div>
          <strong>2002</strong>
          <span className="meta">Notary since</span>
        </div>
        <div>
          <strong>2019</strong>
          <span className="meta">Firm established</span>
        </div>
        <div>
          <strong>NYC</strong>
          <span className="meta">Five boroughs + Nassau</span>
        </div>
        <div>
          <strong>Same day</strong>
          <span className="meta">Appointments available</span>
        </div>
      </section>

      <section id="services" className="card-grid">
        {services.map((service) => (
          <article key={service.href} className="panel">
            <p className="kicker">{service.kicker}</p>
            <h3 className="title">{service.title}</h3>
            <p className="reading">{service.body}</p>
            <Button intent="learn" href={service.href} size="sm">
              Learn more
            </Button>
          </article>
        ))}
      </section>

      <section id="about" className="panel panel--wide">
        <p className="kicker">About</p>
        <h2 className="headline">Meet the Founder & CEO</h2>
        <p className="reading">
          Oswald Joseph Bien-Aimé is the Founder & CEO of {site.name}{" "}
          Professional Service Corporation, established in 2019. His experience
          in the notary field dates back to 2002, serving individuals,
          businesses, and professionals throughout New York.
        </p>
      </section>

      <section id="reviews" className="card-grid">
        <article className="panel">
          <p className="kicker">Reviews</p>
          <blockquote className="quote">
            “Working with The Notary Giant was effortless from start to finish.”
          </blockquote>
          <p className="meta">Orisa L.</p>
        </article>
        <article className="panel">
          <p className="kicker">Reviews</p>
          <blockquote className="quote">
            “My closing experience was seamless. The preparation and expertise
            were obvious.”
          </blockquote>
          <p className="meta">Naomi J.</p>
        </article>
        <article className="panel">
          <p className="kicker">Reviews</p>
          <blockquote className="quote">
            “I needed a last-minute mobile notary appointment, and The Notary
            Giant delivered.”
          </blockquote>
          <p className="meta">Jean-Francois K</p>
        </article>
      </section>

      <section id="faq" className="panel panel--wide">
        <p className="kicker">FAQ</p>
        <h2 className="headline">Frequently asked</h2>
        <p className="reading">
          Payments: Zelle, major cards, and cash. Bring your complete document
          and acceptable ID. Do not sign in advance if the act requires signing
          in the notary’s presence.
        </p>
      </section>

      <section id="book" className="panel panel--wide panel--book">
        <p className="kicker">Appointments</p>
        <h2 className="headline">Book now</h2>
        <p className="reading">We are ready to help you with your needs.</p>
        <Button intent="call">Or call {site.phoneDisplay}</Button>
      </section>
    </div>
  );
}
