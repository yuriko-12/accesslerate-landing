import type { Metadata } from "next";
import MarketingHome from "./components/MarketingHome";

const title = "Healthcare Strategy Consulting Mexico & LATAM | Accesslerate";
const description = "Operator-led healthcare strategy, business development, market access, commercial transformation and change management across Mexico and Latin America.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.accesslerate.com/", languages: { en: "https://www.accesslerate.com/", es: "https://www.accesslerate.com/es", "x-default": "https://www.accesslerate.com/" } },
  openGraph: { title, description, type: "website", url: "https://www.accesslerate.com/", images: [{ url: "https://www.accesslerate.com/og.png", width: 1200, height: 630, alt: "Accesslerate — Complexity Shapes Advantage." }] },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.accesslerate.com/og.png"] },
};

export default function Home() { return <MarketingHome locale="en" />; }
