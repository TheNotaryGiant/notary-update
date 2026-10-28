
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Post() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Blog</p>
          <h1 className="headline">What to Bring to a Mobile Notary Appointment in NYC</h1>
          <p className="reading">Checklist for NYC mobile notary appointments.</p>
        </div>
        <Button intent="learn" href="/blog">Back to Blog</Button>
      </header>
      <section className="panel panel--wide">
        <div className="reading">
          
      <p>Bring the complete, unsigned document and a current government-issued photo ID. If your document requires witnesses, bring them as well. Do not sign beforehand if the act requires you to sign in the notary's presence.</p>
      <p>Same-day mobile notary available across NYC and Nassau County. We confirm time, place, and documents before travel.</p>

          <p style={marginTop: '24px'}><Link href="/blog" style={textDecoration: 'underline'}>← Back to all posts</Link> | <Link href="/feed.xml" style={textDecoration: 'underline', color: '#ea580c'}> RSS Feed</Link></p>
        </div>
      </section>
    </div>
  );
}
