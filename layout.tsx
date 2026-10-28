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
      <body>{children}</body>
    </html>
  );
}
