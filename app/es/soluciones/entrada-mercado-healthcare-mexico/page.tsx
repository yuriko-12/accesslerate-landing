import type { Metadata } from "next";
import MarketEntrySolutionPage from "../../../components/MarketEntrySolutionPage";

const title = "Estrategia de Entrada al Mercado México | Accesslerate";
const description = "Estrategia healthcare de entrada y crecimiento en México: oportunidad, Market Access, socios, go-to-market y activación organizacional.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.accesslerate.com/es/soluciones/entrada-mercado-healthcare-mexico", languages: { "en-US": "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico", "es-MX": "https://www.accesslerate.com/es/soluciones/entrada-mercado-healthcare-mexico", "x-default": "https://www.accesslerate.com/solutions/healthcare-market-entry-mexico" } },
  openGraph: { title, description, type: "website", url: "https://www.accesslerate.com/es/soluciones/entrada-mercado-healthcare-mexico", locale: "es_MX", alternateLocale: ["en_US"], images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function EntradaMercadoMexicoPage() {
  return <MarketEntrySolutionPage locale="es" />;
}
