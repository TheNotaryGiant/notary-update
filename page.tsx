export default function BlogPage() {
  const posts = [
    { slug: 'what-to-bring', title: 'What to Bring to a Mobile Notary Appointment in NYC', excerpt: 'Complete checklist for NYC mobile notary.' },
    { slug: 'apostille-checklist', title: 'Apostille Checklist: Documents Going Outside the U.S.', excerpt: 'How to prepare documents for apostille.' },
    { slug: 'loan-signing-tips', title: 'Loan Signing Tips for NYC Real Estate Closings', excerpt: 'Tips for co-op and condo closings.' },
  ];
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 mb-8">Helpful guides from The Notary Giant.</p>
      <div className="space-y-6">
        {posts.map(p => (
          <div key={p.slug} className="border rounded-xl p-6 hover:shadow">
            <h2 className="text-xl font-bold"><a href={`/blog/${p.slug}`}>{p.title}</a></h2>
            <p className="text-gray-600 mt-2">{p.excerpt}</p>
            <a href={`/blog/${p.slug}`} className="text-blue-700 font-bold mt-3 inline-block">Read more →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
