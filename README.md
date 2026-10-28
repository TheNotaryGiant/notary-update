# thenotarygiant/notary-update - Full Site with RSS

Built: Wed, 28 Oct 2026 03:08:45 +0000
Repo: github.com/thenotarygiant/notary-update

## What's already done for you (RSS baked in)
- index.html - FULL premium site, RSS link in <head> already added:
  <link rel="alternate" type="application/rss+xml" href="https://thenotarygiant.github.io/notary-update/feed.xml" />
  And footer RSS button already added (navy/gold/black)

- styles.css - External CSS, brand colors
- feed.xml - RSS 2.0 feed - atom:self = https://thenotarygiant.github.io/notary-update/feed.xml
- .nojekyll - Ensures GitHub Pages serves files correctly

## RSS Links
https://thenotarygiant.github.io/notary-update/feed.xml
https://www.thenotarygiant.com/feed.xml (if CNAME connected)

## Push to github.com/thenotarygiant/notary-update

EASIEST - GitHub website:
1. Go to github.com/thenotarygiant/notary-update
2. Click Add file > Upload files
3. Drag ALL files from this zip (index.html, styles.css, feed.xml, .nojekyll) - overwrite existing
4. Commit directly to main

Pages will auto-deploy in ~1 minute.

GIT CLI:
git clone https://github.com/thenotarygiant/notary-update.git
cd notary-update
# copy files from this zip over existing files
git add .
git commit -m "Add RSS feed + footer - Wed, 28 Oct 2026 03:08:45 +0000"
git push origin main

## Verify
Visit: https://thenotarygiant.github.io/notary-update/feed.xml
Footer on homepage should show Subscribe via RSS

## To add new posts later
Edit feed.xml and add a new <item> at top, then push again.
