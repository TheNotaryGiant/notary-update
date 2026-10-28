
export default function Blog() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, sans-serif', color: '#111'}}>
      <h1 style={{fontSize: '36px', fontWeight: '800'}}>Blog</h1>
      <p style={{marginTop: '12px', color: '#555'}}>Helpful guides from The Notary Giant</p>
      
      <div style={{marginTop: '32px', display: 'grid', gap: '20px'}}>
        <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px'}}>
          <h3 style={{fontSize: '18px', fontWeight: '700'}}>What to Bring to a Mobile Notary Appointment in NYC</h3>
          <p style={{color: '#666', fontSize: '14px', marginTop: '8px'}}>Complete checklist: unsigned document, valid photo ID, payment, witnesses if needed.</p>
          <a href="/blog/what-to-bring" style={{color: '#2563eb', fontWeight: 600, textDecoration: 'underline', marginTop: '12px', display: 'inline-block'}}>Read more →</a>
        </div>
        <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px'}}>
          <h3 style={{fontSize: '18px', fontWeight: '700'}}>Apostille Checklist: Documents Going Outside the U.S.</h3>
          <p style={{color: '#666', fontSize: '14px', marginTop: '8px'}}>How to prepare documents for apostille after notarization.</p>
          <a href="/blog/apostille-checklist" style={{color: '#2563eb', fontWeight: 600, textDecoration: 'underline', marginTop: '12px', display: 'inline-block'}}>Read more →</a>
        </div>
        <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px'}}>
          <h3 style={{fontSize: '18px', fontWeight: '700'}}>Loan Signing Tips for NYC Real Estate Closings</h3>
          <p style={{color: '#666', fontSize: '14px', marginTop: '8px'}}>Tips for co-op and condo closings in NYC.</p>
          <a href="/blog/loan-signing-tips" style={{color: '#2563eb', fontWeight: 600, textDecoration: 'underline', marginTop: '12px', display: 'inline-block'}}>Read more →</a>
        </div>
      </div>

      <p style={{marginTop: '32px'}}><a href="/feed.xml" style={{color: '#ea580c', fontWeight: 600}}>RSS Feed: /feed.xml</a></p>
      <p><a href="/" style={{textDecoration: 'underline'}}>← Back to Home</a></p>
    </div>
  );
}
