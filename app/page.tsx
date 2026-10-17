import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { areaHubs, areaPath } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";
import { media, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: {
    absolute: "New York Notary Services | The Notary Giant™",
  },
  description:
    "Commissioned New York notaries come to homes, offices, hospitals, and closing tables across New York City and Nassau County.",
  path: "/",
  image: media.signingConsultation,
});

const services = [
  {
    kicker: "Mobile",
    title: "New York notary services",
    href: "/notary-services",
    body: "Acknowledgments, oaths, and other eligible notarial acts, performed at your location.",
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
      <header className="page-head" id="overview">
        <div>
          <p className="kicker">Overview</p>
          <h1 className="headline">New York notary services</h1>
        </div>
      </header>

      <section className="saas-hero">
        <div className="saas-hero__copy">
          <p className="kicker">The Notary Giant™</p>
          <h2 className="display">
            Precision, speed, and care — wherever the documents are.
          </h2>
          <p className="reading-lg">
            Commissioned New York notaries come to you across the five
            boroughs and Nassau County. Same-day appointments are often
            available, and every visit is confirmed before we travel.
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
          <Image
            src={media.signingConsultation}
            alt="Oswald Joseph Bien-Aimé guiding a client through a document signing"
            fill
            preload
            sizes="(max-width: 719px) 100vw, 50vw"
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
          <span className="meta">Often available</span>
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

      <section id="areas" className="area-block">
        <header className="page-head">
          <div>
            <p className="kicker">Service areas</p>
            <h2 className="headline">Where a notary can meet you</h2>
          </div>
          <Button intent="learn" href="/areas">
            All communities
          </Button>
        </header>
        <div className="card-grid">
          {areaHubs.map((area) => (
            <article key={area.slug} className="panel">
              <p className="kicker">{area.county}</p>
              <h3 className="title">{area.name}</h3>
              <p className="reading">{area.demand}</p>
              <Button intent="learn" href={areaPath(area)} size="sm">
              {area.prep === "on" ? `Notary on ${area.name}` : `Notary in ${area.name}`}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="panel panel--wide about">
        <div className="about__copy">
          <p className="kicker">About</p>
          <h2 className="headline">Meet the Founder & CEO</h2>
          <p className="reading">
            Oswald Joseph Bien-Aimé is the Founder & CEO of {site.name}{" "}
            Professional Service Corporation, established in 2019. His experience
            in the notary field dates back to 2002, serving individuals,
            businesses, and professionals throughout New York.
          </p>
        </div>
        <div className="about__media">
          <Image
            src={media.officePortrait}
            alt="Oswald Joseph Bien-Aimé signing documents in his office"
            fill
            sizes="(max-width: 719px) 100vw, 36vw"
          />
        </div>
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
          <p className="meta">Jean-Francois K.</p>
        </article>
      </section>

      <section id="faq" className="panel panel--wide">
        <p className="kicker">FAQ</p>
        <h2 className="headline">Frequently asked questions</h2>
        <div className="faq-list">
          <article>
            <h3 className="title">What New York notary services do you provide?</h3>
            <p className="reading">
              Acknowledgments, oaths, signature witnessing, and loan signings
              by a commissioned New York notary. We also help prepare documents
              for apostille. We do not give legal advice, and we do not issue
              apostilles.
            </p>
          </article>
          <article>
            <h3 className="title">Where do you meet clients?</h3>
            <p className="reading">
              At a home, office, hospital, or closing table in New York City
              and Nassau County. Nassau County visits are scheduled in advance.
              The{" "}
              <Link href="/areas">service-area list</Link> names the
              communities where a notary can meet you.
            </p>
          </article>
          <article>
            <h3 className="title">What should I bring?</h3>
            <p className="reading">
              Bring the complete document and a current government-issued photo
              ID. Do not sign beforehand if the act requires you to sign in the
              notary’s presence. Payment is by Zelle, major cards, or cash.
            </p>
          </article>
        </div>
      </section>

      <section id="book" className="panel panel--wide panel--book">
        <p className="kicker">Appointments</p>
        <h2 className="headline">Book now</h2>
        <p className="reading">
          Call or send a request. We confirm the time, the place, and the
          documents before we travel.
        </p>
        <Button intent="call">Or call {site.phoneDisplay}</Button>
      </section>
    </div>
  );
}
