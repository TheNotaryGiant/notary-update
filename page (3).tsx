
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Post() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">Blog</p>
          <h1 className="headline">Loan Signing Tips for NYC Real Estate Closings</h1>
          <p className="reading">Tips for co-op and condo closings in NYC.</p>
        </div>
        <Button intent="learn" href="/blog">← Back to Blog</Button>
      </header>
      <section className="panel panel--wide">
        <div className="reading">
          <p>Confirm time and place, bring valid photo ID, and ensure all parties are available. Loan signing agents keep co-op and condo closings on schedule for lenders, title companies, and attorneys across New York City.</p>
          <p style={marginTop: '24px'}><Link href="/blog" style={textDecoration: 'underline'}>← All posts</Link> | <Link href="/feed.xml" style={textDecoration: 'underline', color: '#ea580c'}> RSS</Link></p>
        </div>
      </section>
    </div>
  );
}
