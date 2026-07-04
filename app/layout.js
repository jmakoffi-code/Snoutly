import "./globals.css";

export const metadata = {
  title: {
    default: "Snoutly — A Field Guide to Pet Care",
    template: "%s — Snoutly",
  },
  description:
    "Clear, tested, step-by-step guides for dogs, cats, and small pets. Snoutly is a field guide to everyday pet care.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
