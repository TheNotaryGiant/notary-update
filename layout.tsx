import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Notary Giant - New York Notary Services',
  description: 'Commissioned New York mobile notary services across NYC and Nassau County.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{borderBottom: '1px solid #e5e7eb', background: 'white', position: 'sticky', top: 0, zIndex: 50}}>
          <div style={{maxWidth: '1152px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px'}}>
            <a href="/" style={{fontWeight: 'bold', fontSize: '18px'}}>The Notary Giant</a>
            <nav style={{display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 500}}>
              <a href="/">Home</a>
              <a href="/#services">Services</a>
              <a href="/blog" style={{fontWeight: 800, textDecoration: 'underline'}}>Blog</a>
              <a href="/#contact">Book</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
