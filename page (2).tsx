
export default function Page() {
  return (
    <main style={maxWidth: '800px', margin: '0 auto', padding: '40px 20px'}>
      <a href="/blog">← Back to Blog</a>
      <h1 style={fontSize: '28px', fontWeight: 'bold', marginTop: '16px'}>What To Bring</h1>
      <p style={marginTop: '16px'}>Full guide for what-to-bring coming soon. This page is live at /blog/what-to-bring</p>
      <p style={marginTop: '16px'}><a href="/feed.xml" style={color: '#ea580c', fontWeight: 600}>Subscribe via RSS</a></p>
    </main>
  );
}
