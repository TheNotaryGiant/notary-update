
export default function Post() {
  return (
    <div style={maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui'}>
      <a href="/blog" style={color: '#2563eb', textDecoration: 'underline'}>← Back to Blog</a>
      <h1 style={fontSize: '30px', fontWeight: '800', marginTop: '16px'}>Loan Signing Tips for NYC Real Estate Closings</h1>
      <p style={marginTop: '16px', lineHeight: '1.6', color: '#333'}>Confirm time and place, bring valid photo ID, and ensure all parties are available. Loan signing agents keep co-op and condo closings on schedule.</p>
      <p style={marginTop: '24px'}><a href="/blog" style={textDecoration: 'underline'}>← All posts</a> | <a href="/feed.xml" style={color: '#ea580c', textDecoration: 'underline'}> RSS</a></p>
    </div>
  );
}
