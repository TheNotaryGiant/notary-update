import { NextResponse } from 'next/server';
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Notary Giant - New York Notary Services</title>
    <link>https://www.thenotarygiant.com/</link>
    <description><![CDATA[Precision, speed, and care - wherever the documents are. Commissioned New York mobile notary services across NYC and Nassau County.]]></description>
    <language>en-us</language>
    <copyright>Copyright 2026 The Notary Giant Professional Service Corporation</copyright>
    <lastBuildDate>Wed, 29 Oct 2026 03:00:00 +0000</lastBuildDate>
    <pubDate>Wed, 29 Oct 2026 03:00:00 +0000</pubDate>
    <generator>the-notary-giant.vercel.app</generator>
    <atom:link href="https://www.thenotarygiant.com/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://www.thenotarygiant.com/opengraph-image.png</url>
      <title>The Notary Giant - New York Notary Services</title>
      <link>https://www.thenotarygiant.com/</link>
    </image>
    <item>
      <title>What to Bring to a Mobile Notary Appointment in NYC</title>
      <link>https://www.thenotarygiant.com/blog/what-to-bring</link>
      <guid isPermaLink="true">https://www.thenotarygiant.com/blog/what-to-bring</guid>
      <description><![CDATA[Complete checklist for NYC mobile notary appointments.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
    </item>
    <item>
      <title>Apostille Checklist: Documents Going Outside the U.S.</title>
      <link>https://www.thenotarygiant.com/blog/apostille-checklist</link>
      <guid isPermaLink="true">https://www.thenotarygiant.com/blog/apostille-checklist</guid>
      <description><![CDATA[How to prepare documents for apostille after notarization.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
    </item>
    <item>
      <title>Loan Signing Tips for NYC Real Estate Closings</title>
      <link>https://www.thenotarygiant.com/blog/loan-signing-tips</link>
      <guid isPermaLink="true">https://www.thenotarygiant.com/blog/loan-signing-tips</guid>
      <description><![CDATA[Tips for co-op and condo closings in NYC.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
    </item>
  </channel>
</rss>
`;
export async function GET() {
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export const dynamic = 'force-static';
