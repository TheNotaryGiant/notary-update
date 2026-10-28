import type { Metadata } from "next";

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
      <body style={{margin: 0, fontFamily: 'system-ui, sans-serif'}}>
        <header style={{background: '#0a1931', color: 'white', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 50}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <a href="/" style={{color: 'white', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none'}}>The Notary Giant™</a>
            <nav style={{display: 'flex', gap: '24px'}}>
              <a href="/#services" style={{color: 'white', textDecoration: 'none'}}>Services</a>
              <a href="/blog" style={{color: '#C5A880', textDecoration: 'none', fontWeight: 'bold'}}>Blog</a>
              <a href="/#book" style={{color: 'white', textDecoration: 'none', background: '#C5A880', color: '#0a1931', padding: '6px 14px', borderRadius: '6px', fontWeight: 'bold'}}>Book Now</a>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{background: '#0a1931', color: 'white', padding: '32px 24px', marginTop: '60px', textAlign: 'center'}}>
          <p>© {new Date().getFullYear()} The Notary Giant Professional Service Corporation</p>
          <p style={{marginTop: '8px'}}>
            <a href="/feed.xml" style={{color: '#C5A880'}}>RSS Feed</a> • <a href="/blog" style={{color: '#C5A880'}}>Blog</a> • (646) 423-6350
          </p>
        </footer>
      </body>
    </html>
  );
}
