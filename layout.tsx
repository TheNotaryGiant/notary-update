import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New York Notary Services | The Notary Giant",
  description: "Commissioned New York mobile notary, loan signing, and apostille assistance in NYC and Nassau County.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="The Notary Giant - RSS Feed" href="https://www.thenotarygiant.com/feed.xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
