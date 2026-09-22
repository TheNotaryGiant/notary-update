import Image from "next/image";
import Link from "next/link";
import {
  areaPath,
  childrenOf,
  parentArea,
  relatedAreas,
  type Area,
} from "@/lib/areas";
import { areaFaqs, areaPhoto } from "@/lib/area-copy";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const kindLabel: Record<Area["kind"], string> = {
  borough: "Borough",
  neighborhood: "Neighborhood",
  county: "County",
  city: "City",
  village: "Village",
  hamlet: "Hamlet",
};

export function AreaPage({ area }: { area: Area }) {
  const parent = parentArea(area);
  const children = area.hub === null ? childrenOf(area.slug) : [];
  const related = relatedAreas(area);
  const faqs = areaFaqs(area);
  const photo = areaPhoto(area);
  const where = `${area.prep} ${area.name}`;
  const bookHref = `/contact?area=${encodeURIComponent(where)}#form`;

  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/areas">Service areas</Link>
            {parent ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={areaPath(parent)}>{parent.name}</Link>
              </>
            ) : null}
          </nav>
          <p className="kicker">
            {kindLabel[area.kind]} · {area.county}
          </p>
          <h1 className="headline">Mobile Notary {area.prep} {area.name}</h1>
        </div>
        <Button intent="book" href={bookHref}>
          Book an Appointment
        </Button>
      </header>

      <section className="saas-hero">
        <div className="saas-hero__copy">
          <p className="kicker">{site.name}</p>
          <h2 className="display">{`A commissioned notary comes to you ${where}.`}</h2>
          <div className="area-copy">
            <p className="reading-lg">
              {`${site.name} handles acknowledgments, oaths, signature witnessing, loan signings, and preparation of documents that may later need an apostille. ${area.demand}`}
            </p>
            <p className="reading">{area.place}</p>
          </div>
          <div className="saas-hero__actions">
            <Button intent="book" href={bookHref} size="lg">
              Book a visit
            </Button>
            <Button intent="call" size="lg">
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
        <div className="saas-hero__media">
          <Image
            src={photo}
            alt={`${site.founder} meeting a client for a notary appointment ${where}`}
            fill
            preload
            sizes="(max-width: 719px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="stat-row" aria-label="Appointment facts">
        <div>
          <strong>{area.county.replace(" County", "")}</strong>
          <span className="meta">County</span>
        </div>
        <div>
          <strong>Travel</strong>
          <span className="meta">The notary comes to you</span>
        </div>
        <div>
          <strong>{area.county === "Nassau County" ? "Booked" : "Confirmed"}</strong>
          <span className="meta">
            {area.county === "Nassau County"
              ? "Nassau visits are booked in advance"
              : "We confirm every appointment"}
          </span>
        </div>
        <div>
          <strong>2002</strong>
          <span className="meta">Notarizing since</span>
        </div>
      </section>

      <section className="panel panel--wide">
        <p className="kicker">Meetings</p>
        <h2 className="headline">Where we meet {where}</h2>
        <p className="reading">
          {`You choose the location. The notary comes to a home, office, hospital, or closing table ${where}.`}
        </p>
        <ul className="meet-list reading">
          {area.meetings.map((meeting) => (
            <li key={meeting}>
              {meeting.charAt(0).toUpperCase() + meeting.slice(1)}
            </li>
          ))}
        </ul>
        <p className="reading">
          Hospitals, nursing homes, and secured buildings decide who may enter.
          We do not guarantee access, same-day arrival, or that a third party
          will accept the notarized document.
        </p>
      </section>

      <section className="card-grid">
        <article className="panel">
          <p className="kicker">Bring</p>
          <h2 className="title">What to have ready {where}</h2>
          <p className="reading">
            Bring the complete document and a current government-issued photo
            ID. Leave the signature blank if the act requires you to sign in
            the notary’s presence. Every person who must sign or swear has to
            appear.
          </p>
        </article>
        <article className="panel">
          <p className="kicker">Fees</p>
          <h2 className="title">What the visit costs</h2>
          <p className="reading">
            New York caps a paper notarial act at $2 per act, per person.
            Electronic notarial acts may be charged up to $25 when a registered
            New York electronic notary performs one. Travel, tolls, waiting, and
            rush scheduling are quoted separately before you book.
          </p>
          <Button intent="learn" href="/terms-of-use#fees" size="sm">
            Read the fee terms
          </Button>
        </article>
        <article className="panel">
          <p className="kicker">Related services</p>
          <h2 className="title">Services for this visit</h2>
          <ul className="area-links">
            <li>
              <Link href="/notary-services">Notary services</Link>
            </li>
            <li>
              <Link href="/signature-witnessing">Signature witnessing</Link>
            </li>
            <li>
              <Link href="/apostille-authentication">Apostille assistance</Link>
            </li>
          </ul>
          <p className="reading">
            Apostille help is coordination. We do not issue apostilles, and we
            do not give legal advice.
          </p>
        </article>
      </section>

      {children.length > 0 ? (
        <section className="panel panel--wide">
          <p className="kicker">Communities</p>
          <h2 className="headline">{`Where we travel ${where}`}</h2>
          <p className="reading">
            {area.kind === "county"
              ? "Choose the city, village, or hamlet where the signer will be."
              : "Choose the neighborhood where the signer will be."}{" "}
            Every visit is a travel appointment. We do not keep a branch office
            in each community.
          </p>
          <ul className="directory">
            {children.map((child) => (
              <li key={child.slug}>
                <Link href={areaPath(child)}>{child.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="panel panel--wide">
        <p className="kicker">Questions</p>
        <h2 className="headline">{`Questions about notary appointments ${where}`}</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="title">{faq.question}</h3>
              <p className="reading">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--wide">
        <p className="kicker">Nearby</p>
        <h2 className="title">
          {parent ? `Also serving ${parent.name}` : "Other areas we travel"}
        </h2>
        <ul className="area-links">
          {parent ? (
            <li>
              <Link href={areaPath(parent)}>All of {parent.name}</Link>
            </li>
          ) : null}
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={areaPath(item)}>{item.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/areas">Full service-area list</Link>
          </li>
        </ul>
      </section>

      <p className="meta">
        Service-area details reviewed September 23, 2026. {site.name} is not
        a law firm. Commissioned notaries associated with us are not attorneys
        and may not give legal advice.
      </p>
    </div>
  );
}
