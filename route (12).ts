export async function GET() {
  const siteUrl = "https://www.thenotarygiant.com";
  const now = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Notary Giant - NYC Mobile Notary, Apostille &amp; Loan Signing</title>
    <link>${siteUrl}</link>
    <description>Precision, speed, and care — wherever the documents are.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/opengraph-image.png</url>
      <title>The Notary Giant - NYC Mobile Notary, Apostille &amp; Loan Signing</title>
      <link>${siteUrl}</link>
    </image>
    <item><title>NYC Mobile Notary Services</title><link>${siteUrl}/#services</link><description>Same-day mobile notary across five boroughs.</description><pubDate>Wed, 01 Oct 2025 12:00:00 GMT</pubDate><guid>${siteUrl}/#services</guid></item>
    <item><title>Apostille Services in NYC</title><link>${siteUrl}/#apostille</link><description>Full apostille chain handled.</description><pubDate>Wed, 15 Oct 2025 12:00:00 GMT</pubDate><guid>${siteUrl}/#apostille</guid></item>
    <item><title>Loan Signing Agent</title><link>${siteUrl}/#loan-signing</link><description>Certified loan signing agents evenings/weekends.</description><pubDate>Mon, 20 Oct 2025 12:00:00 GMT</pubDate><guid>${siteUrl}/#loan-signing</guid></item>
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
