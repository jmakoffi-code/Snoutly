import CopyLinkButton from "./CopyLinkButton";

const SITE_URL = "https://nuzzlekeep.com";

export default function ShareBar({ slug, title, excerpt }) {
  const url = `${SITE_URL}/article/${slug}`;
  const pinImage = `${url}/pinterest-image`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt || "");
  const encodedImage = encodeURIComponent(pinImage);

  const links = [
    {
      label: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0A${encodedUrl}`,
    },
  ];

  return (
    <div className="share-bar">
      <h4>Share this entry</h4>
      <div className="share-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="share-pill"
          >
            {link.label}
          </a>
        ))}
        <CopyLinkButton url={url} />
      </div>
    </div>
  );
}
