import type { Metadata } from "next";
import Link from "next/link";
import { areaHubs, areaPath, childrenOf } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMeta({
  title: "Notary Service Areas in NYC and Nassau",
  description:
    "Mobile notaries travel across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and Nassau County. Choose the community where the signer will be.",
  path: "/areas",
});

export default function AreasIndexPage() {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Service areas</span>
          </nav>
          <p className="kicker">Service areas</p>
          <h1 className="headline">Where a New York notary can meet you</h1>
        </div>
        <Button intent="book">Book an Appointment</Button>
      </header>

      <section className="panel panel--wide">
        <p className="reading-lg">
          {site.name} travels to homes, offices, hospitals, and closing tables
          in New York City and Nassau County. These pages are travel areas, not
          branch offices. Nassau County visits are scheduled in advance.
        </p>
        <p className="reading">
          Choose a borough or Nassau County, then the neighborhood, village, or
          hamlet where the signer will be. If your block is between two of
          these communities, book the closest one and put the exact address in
          the request.
        </p>
      </section>

      {areaHubs.map((hub) => (
        <section key={hub.slug} className="panel panel--wide" aria-labelledby={hub.slug}>
          <p className="kicker">{hub.county}</p>
          <h2 id={hub.slug} className="headline">
            <Link href={areaPath(hub)}>{hub.name}</Link>
          </h2>
          <p className="reading">{hub.place}</p>
          <ul className="directory">
            {childrenOf(hub.slug).map((area) => (
              <li key={area.slug}>
                <Link href={areaPath(area)}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
