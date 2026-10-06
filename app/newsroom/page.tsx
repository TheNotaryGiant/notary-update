import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  announcement,
  newsroomCopy,
  newsroomJsonLd,
  newsroomMedia,
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
  image: newsroomMedia.hero.src,
});

function CoverImage({
  src,
  alt,
  sizes,
  preload = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <Image src={src} alt={alt} fill sizes={sizes} preload={preload} />
  );
}

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

        <figure className="news-hero">
          <CoverImage
            src={newsroomMedia.hero.src}
            alt={newsroomMedia.hero.alt}
            sizes="(max-width: 719px) 100vw, min(58rem, calc(100vw - 18.5rem))"
            preload
          />
        </figure>

        <section className="panel panel--wide">
          <p className="reading-lg">{newsroomCopy.lede}</p>
          <p className="reading">{newsroomCopy.intro}</p>
        </section>

        <section className="news-block" aria-labelledby="announcements">
          <header className="page-head">
            <div>
              <p className="kicker">Company</p>
              <h2 id="announcements" className="headline">
                {announcement.kicker}
              </h2>
            </div>
          </header>
          <article className="news-feature">
            <div className="news-frame">
              <CoverImage
                src={announcement.image.src}
                alt={announcement.image.alt}
                sizes="(max-width: 719px) 100vw, min(58rem, calc(100vw - 18.5rem))"
              />
            </div>
          </article>
        </section>

        <section className="news-block" aria-labelledby="publications">
          <header className="page-head">
            <div>
              <p className="kicker">Press release publications</p>
              <h2 id="publications" className="headline">
                Original publications
              </h2>
            </div>
          </header>
          <div className="news-grid news-grid--2">
            {pressReleases.map((item) => (
              <a
                key={item.href}
                className="news-tile"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="news-frame">
                  <CoverImage
                    src={item.image.src}
                    alt={item.image.alt}
                    sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                </span>
                <span className="news-tile__body">
                  <span className="meta">
                    {item.outlet} · {item.date}
                  </span>
                  <span className="title">{item.title}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="news-block" aria-labelledby="republications">
          <header className="page-head">
            <div>
              <p className="kicker">Syndicated coverage</p>
              <h2 id="republications" className="headline">
                Where our announcement was republished
              </h2>
            </div>
          </header>
          <p className="reading">
            The following websites republished our company-issued press release
            about the federal registration of The Notary Giant’s logo.
          </p>
          <div className="news-grid news-grid--3">
            {republications.map((item) => (
              <a
                key={item.href}
                className="news-tile"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="news-frame">
                  <CoverImage
                    src={item.image.src}
                    alt={item.image.alt}
                    sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 25vw"
                  />
                </span>
                <span className="news-tile__body">
                  <span className="meta">{item.date}</span>
                  <span className="title">{item.outlet}</span>
                  <span className="reading">Republished press release</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="news-inquiries" aria-labelledby="media-inquiries">
          <div className="news-frame">
            <CoverImage
              src={newsroomMedia.mediaInquiries.src}
              alt={newsroomMedia.mediaInquiries.alt}
              sizes="(max-width: 719px) 100vw, min(38rem, 50vw)"
            />
          </div>
          <div className="news-inquiries__copy">
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
          </div>
        </section>

        <p className="meta">{newsroomCopy.tagline}</p>
      </div>
    </>
  );
}
