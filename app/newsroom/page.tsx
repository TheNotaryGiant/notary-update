import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  announcement,
  newsroomCopy,
  newsroomJsonLd,
  newsroomPath,
  pressReleases,
  republications,
} from "@/lib/newsroom";
import { pageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Newsroom",
  description: newsroomCopy.lede,
  path: newsroomPath,
});

export default function NewsroomPage() {
  return (
    <>
      <JsonLd data={newsroomJsonLd()} />
      <div className="workspace-page">
        <header className="page-head">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Newsroom</span>
            </nav>
            <p className="kicker">{newsroomCopy.kicker}</p>
            <h1 className="headline">{newsroomCopy.title}</h1>
          </div>
        </header>

        <section className="panel panel--wide">
          <p className="reading-lg">{newsroomCopy.lede}</p>
          <p className="reading">{newsroomCopy.intro}</p>
        </section>

        <section className="panel panel--wide" aria-labelledby="announcements">
          <p className="kicker">{announcement.kicker}</p>
          <h2 id="announcements" className="headline">
            {announcement.title}
          </h2>
          <p className="reading-lg">{announcement.lede}</p>
          <p className="reading">{announcement.body}</p>
          <ul className="press-list">
            {pressReleases.map((item) => (
              <li key={item.href}>
                <span className="meta">
                  {item.outlet} · {item.date}
                </span>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel panel--wide" aria-labelledby="publications">
          <p className="kicker">Press release publications</p>
          <h2 id="publications" className="headline">
            Where our announcement was republished
          </h2>
          <p className="reading">
            The following websites republished our company-issued press release
            about the federal registration of The Notary Giant’s logo.
          </p>
          <ul className="press-list">
            {republications.map((item) => (
              <li key={item.href}>
                <span className="meta">{item.date}</span>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.outlet}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel panel--wide" aria-labelledby="media-inquiries">
          <p className="kicker">Press</p>
          <h2 id="media-inquiries" className="headline">
            Media inquiries
          </h2>
          <p className="reading">
            For company information, interview requests, or press materials,
            contact:
          </p>
          <ul className="contact-details">
            <li>
              <span className="meta">Contact</span>
              {site.founder}, {site.founderTitle}
            </li>
            <li>
              <span className="meta">Company</span>
              {site.legalName}
            </li>
            <li>
              <span className="meta">Email</span>
              <a href={`mailto:${site.pressEmail}`}>{site.pressEmail}</a>
            </li>
            <li>
              <span className="meta">Phone</span>
              <a href={site.phoneTel}>{site.phoneDisplay}</a>
            </li>
          </ul>
        </section>

        <p className="meta">{newsroomCopy.tagline}</p>
      </div>
    </>
  );
}
