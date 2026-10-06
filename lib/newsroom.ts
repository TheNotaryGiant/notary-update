import { pageUrl, site } from "@/lib/site";

export const newsroomPath = "/newsroom";

export const newsroomCopy = {
  kicker: "Company",
  title: "Newsroom",
  lede: `Company announcements and press release publications from ${site.name}.`,
  intro: `Explore milestones, business updates, and published announcements from ${site.legalName}.`,
  tagline: "Serving With Strength and Reliability",
} as const;

export const newsroomMedia = {
  hero: {
    src: "/media/Newsroom/hero.jpg",
    alt: "The Notary Giant Newsroom — company news and announcements",
  },
  announcement: {
    src: "/media/Newsroom/company-announcements.png",
    alt: "Company announcements: federal logo trademark registration",
  },
  mediaInquiries: {
    src: "/media/Newsroom/media-inquiries.png",
    alt: "Media inquiries for Oswald Joseph Bien-Aimé, Founder and CEO of The Notary Giant",
  },
} as const;

export const announcement = {
  kicker: "Company announcements",
  title: "The Notary Giant Announces Federal Registration of Its Company Logo",
  lede: "A milestone in protecting our brand and building for the future.",
  body: `${site.legalName} announced the federal registration of its company logo with the United States Patent and Trademark Office. Registered on December 23, 2025, under U.S. Trademark Registration No. 8,074,377, the logo represents the company’s commitment to professionalism, reliability, and long-term brand development.`,
  datePublished: "2026-08-30",
  datePublishedDisplay: "August 30, 2026",
  image: newsroomMedia.announcement,
} as const;

export const pressReleases = [
  {
    slug: "ein-presswire",
    outlet: "EIN Presswire",
    date: "August 31, 2026",
    title: `${site.name} Announces Federal Trademark Registration of Company Logo`,
    href: "https://www.einpresswire.com/article/938354247/the-notary-giant-announces-federal-trademark-registration-of-company-logo",
    image: {
      src: "/media/Newsroom/ein-presswire.jpg",
      alt: "EIN Presswire company press release, August 31, 2026",
    },
  },
  {
    slug: "prlog",
    outlet: "PRLog",
    date: "August 30, 2026",
    title: `${site.name} Announces Federal Registration of Its Trademarked Logo`,
    href: "https://www.prlog.org/13167526-the-notary-giant-announces-federal-registration-of-its-trademarked-logo.html",
    image: {
      src: "/media/Newsroom/prlog.jpg",
      alt: "PRLog company press release, August 30, 2026",
    },
  },
] as const;

export const republications = [
  {
    slug: "national-law-review",
    outlet: "The National Law Review",
    date: "August 31, 2026",
    href: "https://natlawreview.com/press-releases/notary-giantr-announces-federal-trademark-registration-company-logo",
    image: {
      src: "/media/Newsroom/national-law-review.png",
      alt: "The National Law Review republished press release, August 31, 2026",
    },
  },
  {
    slug: "wboc",
    outlet: "WBOC",
    date: "August 31, 2026",
    href: "https://www.wboc.com/online_features/press_releases/the-notary-giant-announces-federal-trademark-registration-of-company-logo/article_4d20c014-37af-5b4a-b9b3-2523fc8d4aa0.html",
    image: {
      src: "/media/Newsroom/wboc.png",
      alt: "WBOC republished press release, August 31, 2026",
    },
  },
  {
    slug: "menafn",
    outlet: "MENAFN",
    date: "August 31, 2026",
    href: "https://menafn.com/1111602645/The-Notary-Giant-Announces-Federal-Trademark-Registration-Of-Company-Logo",
    image: {
      src: "/media/Newsroom/menafn.png",
      alt: "MENAFN republished press release, August 31, 2026",
    },
  },
] as const;

export function newsroomJsonLd() {
  const url = pageUrl(newsroomPath);
  const hero = `${site.url}${newsroomMedia.hero.src}`;
  const sameAs = [
    ...pressReleases.map((item) => item.href),
    ...republications.map((item) => item.href),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${newsroomCopy.title} | ${site.name}`,
        url,
        description: newsroomCopy.lede,
        image: hero,
        about: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "NewsArticle",
        headline: announcement.title,
        description: announcement.lede,
        datePublished: announcement.datePublished,
        image: `${site.url}${announcement.image.src}`,
        author: {
          "@type": "Person",
          name: site.founder,
          jobTitle: site.founderTitle,
        },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: url,
        sameAs,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: pageUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: newsroomCopy.title,
            item: url,
          },
        ],
      },
    ],
  };
}
