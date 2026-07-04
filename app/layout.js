import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://snoutlypet.com"),
  title: {
    default: "Snoutly - A Field Guide to Pet Care",
    template: "%s - Snoutly",
  },
  description:
    "Clear, tested, step-by-step guides for dogs, cats, and small pets. Snoutly is a field guide to everyday pet care.",
  openGraph: {
    title: "Snoutly - A Field Guide to Pet Care",
    description:
      "Clear, tested, step-by-step guides for dogs, cats, and small pets.",
    url: "https://snoutlypet.com",
    siteName: "Snoutly",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Snoutly - A Field Guide to Pet Care",
    description:
      "Clear, tested, step-by-step guides for dogs, cats, and small pets.",
  },
  verification: {
    google: "zrbTLlWiaoS9XgVayqdZyPnJ4eFHl4i2icaMET_oMSQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" title="Snoutly RSS Feed" href="/feed.xml" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
