export const site = {
  name: "The Notary Giant™",
  legalName: "The Notary Giant Professional Service Corporation",
  url: "https://www.thenotarygiant.com",
  phoneDisplay: "(646) 423-6350",
  phoneTel: "tel:+16464236350",
  phoneSchema: "+1-646-423-6350",
  email: "ojbien-aime@thenotarygiant.com",
  pressEmail: "ceo@thenotarygiant.com",
  founder: "Oswald Joseph Bien-Aimé",
  founderTitle: "Founder & CEO",
  location: "New York, New York, United States",
  hours: "Mon – Fri, 9am – 5pm",
  contentUpdated: "2026-09-23",
} as const;

/** Canonical URL. The homepage has no trailing slash, matching the site canonical. */
export function pageUrl(path: string) {
  if (path === "/") return site.url;
  return `${site.url}${path}`;
}

export const media = {
  logo: "/media/5sJ5dYOSMkad0ZPJSyuREA_The_Notary_Giant_BIMI.svg",
  lockup:
    "/media/UMeqEvrkOESUsSav_sYK0w_NotaryGiant_lockup_black_white_lg.png",
  favicon: "/media/u-6oPFyWnEWRE5RkZ8PK1g_NotaryGiant_facicon_144.png",
  heroStamp:
    "/media/fru9WZwkv0-rYQkMRE5Cnw_Notary public at work signing documents.png",
  officePortrait: "/media/oswald-at-the-office.jpg",
  signingConsultation:
    "/media/professional-notary-signing-consultation.jpg",
  bookingPortrait: "/media/b9_JN-jfsEWrr-QQKATX4A_1image.png",
  star: "/media/star.svg",
} as const;

export const inquiryServices = [
  "Notary services",
  "Mobile notary",
  "Apostille assistance",
  "Loan signings",
  "Signature witnessing",
  "Other",
] as const;

export const nav = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact", href: "/contact" },
] as const;
