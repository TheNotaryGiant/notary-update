import { areaPath, type Area } from "@/lib/areas";
import { media, site } from "@/lib/site";

const areaPhotos = [
  media.signingConsultation,
  media.officePortrait,
  media.bookingPortrait,
] as const;

export function areaPhoto(area: Area) {
  const index = [...area.slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return areaPhotos[index % areaPhotos.length];
}

export type AreaFaq = {
  question: string;
  answer: string;
};

export function areaHeading(area: Area) {
  return `Mobile Notary ${area.prep} ${area.name}`;
}

function schedulingLine(area: Area) {
  if (area.county === "Nassau County") {
    return area.kind === "county"
      ? "Nassau County appointments are scheduled in advance."
      : `Visits to ${area.name} are scheduled in advance.`;
  }

  return "We confirm the appointment when you book. Same-day visits are often available, and they are not guaranteed.";
}

function meetingList(meetings: readonly string[]) {
  const items = meetings.map((meeting) => meeting.charAt(0).toLowerCase() + meeting.slice(1));
  if (items.length < 2) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function areaDescription(area: Area) {
  const scheduling =
    area.county === "Nassau County"
      ? "Nassau County visits are scheduled in advance."
      : "The appointment is confirmed when you book.";

  return `A commissioned New York notary comes to you ${area.prep} ${area.name} for acknowledgments, oaths, and loan signings. ${scheduling}`;
}

export function areaFaqs(area: Area): AreaFaq[] {
  const where = `${area.prep} ${area.name}`;

  return [
    {
      question: `Do you come to clients ${where}?`,
      answer: `Yes. A commissioned New York notary from ${site.name} comes to you ${where}. ${schedulingLine(area)} ${area.demand}`,
    },
    {
      question: `Where can the notary meet me ${where}?`,
      answer: `You choose a lawful location ${where}. Common meeting places include ${meetingList(area.meetings)}. Hospitals, nursing homes, and secured buildings control visitor access, so entry is not guaranteed.`,
    },
    {
      question: `What should I bring to a notary appointment ${where}?`,
      answer: `Bring the complete document and a current government-issued photo ID. Do not sign beforehand if the act requires you to sign in the notary’s presence. Every person who must sign or take an oath has to appear. ${area.place}`,
    },
    {
      question: `What does a notary visit ${where} cost?`,
      answer: `For an appointment ${where}, New York caps a paper notarial act at $2 per act, per person, under Executive Law § 136. An electronic notarial act may cost up to $25 when a registered New York electronic notary performs it. Travel, tolls, waiting, and rush scheduling are quoted separately before you book.`,
    },
  ];
}

export function areaJsonLd(area: Area, faqs: AreaFaq[]) {
  const url = `${site.url}${areaPath(area)}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service areas", path: "/areas" },
    { name: area.region, path: area.hub ? `/areas/${area.hub}` : areaPath(area) },
  ];

  if (area.hub) {
    crumbs.push({ name: area.name, path: areaPath(area) });
  }

  const servedType =
    area.kind === "county"
      ? "AdministrativeArea"
      : area.kind === "city" || area.kind === "borough"
        ? "City"
        : "Place";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: areaHeading(area),
        serviceType: "Mobile notary public",
        url,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: {
          "@type": servedType,
          name: area.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: area.county,
          },
        },
        description: areaDescription(area),
      },
      {
        "@type": "FAQPage",
        url,
        dateModified: site.contentUpdated,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${site.url}${crumb.path}`,
        })),
      },
    ],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneSchema,
    image: `${site.url}/media/professional-notary-signing-consultation.jpg`,
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: site.founderTitle,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "New York" },
      { "@type": "AdministrativeArea", name: "Nassau County" },
    ],
    description:
      "Commissioned New York mobile notary, loan signing, signature witnessing, and apostille assistance in New York City and Nassau County.",
  };
}
