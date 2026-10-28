export default function BlogPage() {
  const posts = [
    { slug: "what-to-bring", title: "What to Bring to a Notary Appointment in NYC", date: "2025-10-01", excerpt: "Valid ID, documents, and what not to sign before you arrive." },
    { slug: "apostille-checklist", title: "NYC Apostille Checklist: From Notary to County Clerk", date: "2025-10-15", excerpt: "Step-by-step for getting an apostille in New York." },
    { slug: "loan-signing-tips", title: "Loan Signing Tips: How to Avoid Delays at Closing", date: "2025-10-20", excerpt: "5 things that cause last-minute delays and how we prevent them." },
  ];
  return (
    <div style={{maxWidth: "900px", margin: "0 auto", padding: "80px 24px"}}>
      <h1 style={{fontSize: "42px", fontWeight: "800", marginBottom: "12px"}}>Blog</h1>
      <p style={{color: "#666", marginBottom: "40px"}}>Practical guides from The Notary Giant — NYC mobile notary, apostille & loan signings.</p>
      <div style={{display: "grid", gap: "24px"}}>
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} style={{display: "block", border: "1px solid #e5e5e5", borderRadius: "16px", padding: "24px", textDecoration: "none"}}>
            <div style={{fontSize: "13px", color: "#888", marginBottom: "8px"}}>{p.date}</div>
            <div style={{fontSize: "22px", fontWeight: "700", color: "#111", marginBottom: "8px"}}>{p.title}</div>
            <div style={{color: "#555"}}>{p.excerpt}</div>
            <div style={{marginTop: "12px", color: "#111", fontWeight: "600"}}>Read →</div>
          </a>
        ))}
      </div>
      <div style={{marginTop: "40px"}}><a href="/" style={{color: "#666"}}>← Back to Home</a></div>
    </div>
  );
}
