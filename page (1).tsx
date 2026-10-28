
import Link from "next/link";
import { Button } from "@/components/ui/Button";
export default function Post() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Blog</p>
          <h1 className="headline">What to Bring to a Mobile Notary Appointment in NYC</h1>
        </div>
        <Button intent="learn" href="/blog">← Back to Blog</Button>
      </header>
      <section className="panel panel--wide">
        <div className="reading">
          <p>Bring the complete, unsigned document and a current government-issued photo ID. If your document requires witnesses, bring them as well. Do not sign beforehand if the act requires you to sign in the notary's presence. Payment is by Zelle, major cards, or cash. Same-day mobile notary available across NYC and Nassau County.</p>
          <p style={marginTop: '24px'}><Link href="/blog" style={textDecoration: 'underline'}>← All posts</Link> | <Link href="/feed.xml" style={textDecoration: 'underline', color: '#ea580c'}> RSS</Link></p>
        </div>
      </section>
    </div>
  );
}
