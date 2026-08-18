import type { Metadata } from "next";
import MarketEntrySolutionPage from "../../components/MarketEntrySolutionPage";

const title = "Healthcare Market Entry Strategy Mexico | Accesslerate";
const description = "Operator-led healthcare market entry and growth strategy for Mexico—from opportunity and access to partners, go-to-market and organizational activation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico", languages: { "en-US": "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico", "es-MX": "https://www.accesslerate.com/es/soluciones/entrada-mercado-healthcare-mexico", "x-default": "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico" } },
  openGraph: { title, description, type: "website", url: "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico", locale: "en_US", alternateLocale: ["es_MX"], images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function MexicoMarketEntryPage() {
  return <MarketEntrySolutionPage locale="en" />;
}
