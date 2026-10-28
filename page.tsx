export default function BlogPage() {
  const posts = [
    { slug: 'what-to-bring', title: 'What to Bring to a Mobile Notary Appointment in NYC', excerpt: 'Complete checklist: unsigned document, valid photo ID, payment, and witnesses if needed.' },
    { slug: 'apostille-checklist', title: 'Apostille Checklist: Documents Going Outside the U.S.', excerpt: 'How to prepare documents for apostille after notarization.' },
    { slug: 'loan-signing-tips', title: 'Loan Signing Tips for NYC Real Estate Closings', excerpt: 'Tips for co-op and condo closings in NYC.' },
  ];
  return (
    <main style={{padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.7'}}>
      <a href="/" style={{color: '#1e40af', textDecoration: 'none'}}>← Back to Home</a>
      <h1 style={{fontSize: '42px', marginTop: '20px'}}>Blog</h1>
      <p style={{color: '#666'}}>Helpful guides from The Notary Giant - New York mobile notary services.</p>
      <hr style={{margin: '30px 0'}}/>
      {posts.map(post => (
        <div key={post.slug} style={{marginBottom: '32px', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px'}}>
          <h2 style={{margin: '0 0 8px', fontSize: '22px'}}><a href={`/blog/${post.slug}`} style={{color: '#1e40af', textDecoration: 'none'}}>{post.title}</a></h2>
          <p style={{color: '#475569', margin: '0 0 12px'}}>{post.excerpt}</p>
          <a href={`/blog/${post.slug}`} style={{color: '#1e40af', fontWeight: 'bold'}}>Read more →</a>
        </div>
      ))}
      <p style={{marginTop: '40px'}}><a href="/feed.xml" style={{color: '#1e40af'}}>📡 RSS Feed: thenotarygiant.com/feed.xml</a></p>
    </main>
  );
}
