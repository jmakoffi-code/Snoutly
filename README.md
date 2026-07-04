# Snoutly

A field-guide-styled pet care content site, built with Next.js 16 (App Router).

## Structure

- lib/articles.js -- all content lives here: categories and articles as plain JS objects.
  Add a new article by adding an object to the articles array with a unique slug.
  Add a new category by adding an entry to categories. Routes generate automatically.
- app/page.js -- homepage
- app/category/[slug]/page.js -- category listing (dynamic route)
- app/article/[slug]/page.js -- full article template (dynamic route)
- app/search/page.js -- basic keyword search across title, excerpt, and tag
- components/ -- Header, Footer, SpecCard (article preview card), AdSlot (ad placeholder)
- app/globals.css -- the whole design system: colors, type, layout, ad slot styling

## Running locally

    npm install
    npm run dev

Visit http://localhost:3000

## Building for production

    npm run build
    npm run start

## Deploying

Standard Next.js app, ready to deploy on Vercel: push to a Git repo, import the repo
in Vercel, and it builds automatically. No environment variables needed yet.

## Adding AdSense

Ad placements use the AdSlot component in three sizes: leaderboard, in-content, and
sidebar. Once your AdSense account is approved, replace the placeholder div in
components/AdSlot.js with your actual ad unit code.

## Adding real content

Every article in lib/articles.js follows the same shape: intro, optional "what you'll
need", numbered steps, an optional callout box, an optional extra section, and FAQs.
Not every field is required -- articles without stepList (like the tail-language entry)
just skip that section automatically.
