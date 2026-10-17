import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Sidebar } from "@/components/Sidebar";
import { organizationJsonLd } from "@/lib/area-copy";
import { fontVariables } from "@/lib/fonts";
import { media, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "New York Notary Services | The Notary Giant™",
    template: "%s | The Notary Giant™",
  },
  description:
    "The Notary Giant™ provides commissioned New York notary services, including mobile notarization, loan signings, and apostille assistance, throughout New York City and Nassau County.",
  applicationName: site.name,
  icons: {
    icon: media.favicon,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: media.signingConsultation,
        alt: "Notary signing consultation with The Notary Giant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
    >
      <head>
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body className="min-h-full site-shell">
        <JsonLd data={organizationJsonLd()} />
        <Sidebar />
        <div className="workspace">
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
