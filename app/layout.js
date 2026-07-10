import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://nuzzlekeep.com"),
  title: {
    default: "Nuzzlekeep - A Field Guide to Pet Care",
    template: "%s - Nuzzlekeep",
  },
  description:
    "Clear, tested, step-by-step guides for dogs, cats, and small pets. Nuzzlekeep is a field guide to everyday pet care.",
  openGraph: {
    title: "Nuzzlekeep - A Field Guide to Pet Care",
    description:
      "Clear, tested, step-by-step guides for dogs, cats, and small pets.",
    url: "https://nuzzlekeep.com",
    siteName: "Nuzzlekeep",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nuzzlekeep - A Field Guide to Pet Care",
    description:
      "Clear, tested, step-by-step guides for dogs, cats, and small pets.",
  },
  verification: {
    google: "R7eHaaJeSBllL-1_rASnEU_ky1EuewR98IPczBA607Q",
    other: {
      "p:domain_verify": "0cbc4d90b67b322130eb7a3af6de8b28",
    },
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
        <link rel="alternate" type="application/rss+xml" title="Nuzzlekeep RSS Feed" href="/feed.xml" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7528249576285985"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
