
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Blog() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Insights</p>
          <h1 className="headline">Blog</h1>
          <p className="reading">Helpful guides from The Notary Giant for clients across NYC and Nassau County.</p>
        </div>
      </header>

      <section className="card-grid">
        <article className="panel">
          <p className="kicker">Checklist</p>
          <h3 className="title">What to Bring to a Mobile Notary Appointment in NYC</h3>
          <p className="reading">Complete checklist: unsigned document, valid photo ID, payment, and witnesses if needed. Same-day mobile notary available.</p>
          <Button intent="learn" href="/blog/what-to-bring" size="sm">Read more</Button>
        </article>
        <article className="panel">
          <p className="kicker">International</p>
          <h3 className="title">Apostille Checklist: Documents Going Outside the U.S.</h3>
          <p className="reading">How to prepare documents for apostille after notarization.</p>
          <Button intent="learn" href="/blog/apostille-checklist" size="sm">Read more</Button>
        </article>
        <article className="panel">
          <p className="kicker">Closings</p>
          <h3 className="title">Loan Signing Tips for NYC Real Estate Closings</h3>
          <p className="reading">Tips for co-op and condo closings in NYC.</p>
          <Button intent="learn" href="/blog/loan-signing-tips" size="sm">Read more</Button>
        </article>
      </section>

      <section className="panel panel--wide">
        <p className="kicker">RSS</p>
        <h3 className="title">Subscribe</h3>
        <p className="reading">Get new posts: <Link href="/feed.xml" style={{textDecoration: 'underline', fontWeight: 600, color: '#ea580c'}}>/feed.xml</Link> — Works with Feedly, FeedReader, and any RSS reader.</p>
      </section>
    </div>
  );
}
