import { ImageResponse } from "next/og";
import { articles, getArticleBySlug, getCategoryBySlug } from "@/lib/articles";
import { loadOgFonts } from "@/lib/og-font";

export const size = { width: 1000, height: 1500 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const INK = "#22301F";
const PAPER = "#E9E1CC";
const CARD = "#F8F3E5";
const SIENNA = "#B5502E";
const MUSTARD = "#C89B3C";
const SLATE = "#5C6B5E";

export async function GET(request, { params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = article ? getCategoryBySlug(article.category) : null;

  const title = article?.title || "Nuzzlekeep";
  const tag = article?.tag || category?.label || "Pet Care";
  const entryNo = article?.entryNo;
  const excerpt = article?.excerpt || "";
  const meta = [
    article?.steps ? `${article.steps} steps` : null,
    article?.readTime,
    article?.difficulty ? `Difficulty: ${article.difficulty}` : null,
  ]
    .filter(Boolean)
    .join("   ·   ");

  let fonts = [];
  try {
    fonts = loadOgFonts();
  } catch {
    fonts = [];
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 64px",
          backgroundColor: PAPER,
          fontFamily: fonts.length ? "Zilla Slab" : "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: `3px solid ${SIENNA}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                color: SIENNA,
                fontFamily: fonts.length ? "IBM Plex Mono" : "monospace",
                marginRight: 18,
              }}
            >
              N
            </div>
            <div style={{ fontSize: 34, color: INK, fontWeight: 700 }}>Nuzzlekeep</div>
          </div>
          {entryNo ? (
            <div
              style={{
                display: "flex",
                fontFamily: fonts.length ? "IBM Plex Mono" : "monospace",
                fontSize: 20,
                color: SIENNA,
                border: `2px solid ${SIENNA}`,
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              № {entryNo}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: CARD,
            border: `3px solid ${INK}`,
            padding: "56px 48px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: -22,
              left: 44,
              backgroundColor: MUSTARD,
              border: `3px solid ${INK}`,
              padding: "8px 22px",
              fontFamily: fonts.length ? "IBM Plex Mono" : "monospace",
              fontSize: 20,
              color: INK,
              letterSpacing: 2,
            }}
          >
            {tag.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 45 ? 56 : 66,
              color: INK,
              fontWeight: 700,
              lineHeight: 1.15,
              marginTop: 20,
            }}
          >
            {title}
          </div>
          {excerpt ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: SLATE,
                lineHeight: 1.4,
                marginTop: 32,
                fontFamily: "serif",
              }}
            >
              {excerpt}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: fonts.length ? "IBM Plex Mono" : "monospace",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: SLATE, marginBottom: 12 }}>{meta}</div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: INK,
              fontWeight: 700,
              border: `2px solid ${INK}`,
              borderRadius: 999,
              padding: "14px 36px",
              backgroundColor: MUSTARD,
            }}
          >
            Read the full entry at nuzzlekeep.com
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
