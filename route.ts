import { NextResponse } from 'next/server';
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Notary Giant</title>
    <link>https://thenotarygiant.com/</link>
    <description><![CDATA[Precision, speed, and care — wherever the documents are. Mobile notary services across NYC and Nassau County.]]></description>
    <language>en-US</language>
    <copyright>Copyright 2026 The Notary Giant Professional Service Corporation</copyright>
    <lastBuildDate>Wed, 28 Oct 2026 21:00:00 GMT</lastBuildDate>
    <pubDate>Wed, 28 Oct 2026 21:00:00 GMT</pubDate>
    <atom:link href="https://thenotarygiant.com/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://thenotarygiant.com/opengraph-image.png</url>
      <title>The Notary Giant</title>
      <link>https://thenotarygiant.com/</link>
    </image>
    <item>
      <title>What to Bring to a Mobile Notary Appointment in NYC</title>
      <link>https://thenotarygiant.com/blog/what-to-bring</link>
      <guid isPermaLink="true">https://thenotarygiant.com/blog/what-to-bring</guid>
      <description><![CDATA[Complete checklist: unsigned document, valid photo ID, payment, and witnesses if needed. Same-day mobile notary available across NYC and Nassau County.]]></description>
      <pubDate>Wed, 28 Oct 2026 21:00:00 GMT</pubDate>
      <category>Tips</category>
    </item>
    <item>
      <title>Apostille Checklist: Documents Going Outside the U.S.</title>
      <link>https://thenotarygiant.com/blog/apostille-checklist</link>
      <guid isPermaLink="true">https://thenotarygiant.com/blog/apostille-checklist</guid>
      <description><![CDATA[How to prepare documents for apostille after notarization — county clerk certification, state apostille, and what The Notary Giant coordinates for you.]]></description>
      <pubDate>Wed, 28 Oct 2026 21:00:00 GMT</pubDate>
      <category>International</category>
    </item>
    <item>
      <title>Loan Signing Tips for NYC Real Estate Closings</title>
      <link>https://thenotarygiant.com/blog/loan-signing-tips</link>
      <guid isPermaLink="true">https://thenotarygiant.com/blog/loan-signing-tips</guid>
      <description><![CDATA[Tips for co-op and condo closings in NYC — confirming time and place, ID requirements, and how loan signing agents keep closings on schedule.]]></description>
      <pubDate>Wed, 28 Oct 2026 21:00:00 GMT</pubDate>
      <category>Closings</category>
    </item>
  </channel>
</rss>
`;
export async function GET() {
  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
export const dynamic = 'force-static';
