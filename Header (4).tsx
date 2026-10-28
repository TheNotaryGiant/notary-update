export default function Header() {
  return (
    <header style={{background: '#0a1931', color: 'white', padding: '16px 24px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: 'white', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none'}}>The Notary Giant™</a>
        <nav style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
          <a href="/#services" style={{color: 'white', textDecoration: 'none'}}>Services</a>
          <a href="/blog" style={{color: '#C5A880', textDecoration: 'none', fontWeight: 'bold'}}>Blog</a>
          <a href="/#book" style={{background: '#C5A880', color: '#0a1931', padding: '6px 14px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none'}}>Book Now</a>
        </nav>
      </div>
    </header>
  );
}
