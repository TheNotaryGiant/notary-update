export async function GET() {
  const siteUrl = "https://www.thenotarygiant.com";
  const now = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>The Notary Giant - NYC Mobile Notary, Apostille &amp; Loan Signing</title><link>${siteUrl}</link><description>Precision, speed, and care.</description><language>en-us</language><lastBuildDate>${now}</lastBuildDate><atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" /><image><url>${siteUrl}/opengraph-image.png</url><title>The Notary Giant - NYC Mobile Notary, Apostille &amp; Loan Signing</title><link>${siteUrl}</link></image><item><title>NYC Mobile Notary</title><link>${siteUrl}/#services</link><description>Same-day mobile notary.</description><pubDate>Wed, 01 Oct 2025 12:00:00 GMT</pubDate><guid>${siteUrl}/#services</guid></item></channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
