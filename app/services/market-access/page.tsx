import type { Metadata } from "next";
import MarketAccessPage from "../../components/MarketAccessPage";

const canonical = "https://www.accesslerate.com/services/market-access";

export const metadata: Metadata = {
  title: "Market Access Consulting Mexico & LATAM | Accesslerate",
  description: "Operator-led market access strategy for pharma, biotech, MedTech and healthcare companies across Mexico and Latin America—from value proposition and stakeholder strategy to organizational activation.",
  alternates: { canonical, languages: { "en-US": canonical, "es-MX": "https://www.accesslerate.com/es/servicios/market-access", "x-default": canonical } },
  openGraph: { title: "Market Access Consulting Mexico & LATAM | Accesslerate", description: "Build a credible access path by connecting value, evidence, stakeholders, commercial choices and organizational activation.", url: canonical, locale: "en_US", type: "website", images: [] },
  twitter: { card: "summary", title: "Market Access Consulting Mexico & LATAM | Accesslerate", description: "Operator-led market access strategy for Mexico and Latin America.", images: [] },
};

export default function Page() { return <MarketAccessPage locale="en" />; }
