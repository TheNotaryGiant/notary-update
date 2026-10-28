
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Post() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Blog</p>
          <h1 className="headline">Apostille Checklist: Documents Going Outside the U.S.</h1>
          <p className="reading">How to prepare documents for apostille after notarization.</p>
        </div>
        <Button intent="learn" href="/blog">Back to Blog</Button>
      </header>
      <section className="panel panel--wide">
        <div className="reading">
          
      <p>After notarization, documents for use outside the U.S. often need county clerk certification and state apostille. We coordinate preparation so your documents are ready for the Department of State.</p>

          <p style={marginTop: '24px'}><Link href="/blog" style={textDecoration: 'underline'}>← Back to all posts</Link> | <Link href="/feed.xml" style={textDecoration: 'underline', color: '#ea580c'}> RSS Feed</Link></p>
        </div>
      </section>
    </div>
  );
}
