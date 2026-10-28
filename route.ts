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
      <title>New York Mobile Notary Services</title>
      <link>https://www.thenotarygiant.com/</link>
      <guid isPermaLink="true">https://www.thenotarygiant.com/#notary-20261028</guid>
      <description><![CDATA[Mobile notary - acknowledgments, oaths, and eligible notarial acts performed at your location in Manhattan, Brooklyn, Queens, Bronx, Staten Island and Nassau County. Same-day appointments often available.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
      <category>Notary Services</category>
    </item>
    <item>
      <title>Apostille Assistance</title>
      <link>https://www.thenotarygiant.com/</link>
      <guid isPermaLink="false">https://www.thenotarygiant.com/#apostille-20261028</guid>
      <description><![CDATA[Preparation and coordination for documents intended for use outside the United States.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
      <category>International</category>
    </item>
    <item>
      <title>Loan Signings</title>
      <link>https://www.thenotarygiant.com/</link>
      <guid isPermaLink="false">https://www.thenotarygiant.com/#loan-20261028</guid>
      <description><![CDATA[Available for lenders, title companies, attorneys, and real estate professionals across New York.]]></description>
      <pubDate>Wed, 28 Oct 2026 17:32:48 +0000</pubDate>
      <category>Closings</category>
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
