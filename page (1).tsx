
export default function Post() {
  return (
    <div style={maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui'}>
      <a href="/blog" style={color: '#2563eb', textDecoration: 'underline'}>← Back to Blog</a>
      <h1 style={fontSize: '30px', fontWeight: '800', marginTop: '16px'}>What to Bring to a Mobile Notary Appointment in NYC</h1>
      <p style={marginTop: '16px', lineHeight: '1.6', color: '#333'}>Bring the complete, unsigned document and a current government-issued photo ID. If your document requires witnesses, bring them as well. Do not sign beforehand if the act requires you to sign in the notary's presence. Payment is by Zelle, major cards, or cash. Same-day mobile notary available across NYC and Nassau County.</p>
      <p style={marginTop: '24px'}><a href="/blog" style={textDecoration: 'underline'}>← All posts</a> | <a href="/feed.xml" style={color: '#ea580c', textDecoration: 'underline'}> RSS</a></p>
    </div>
  );
}
