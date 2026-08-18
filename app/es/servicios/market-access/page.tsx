import type { Metadata } from "next";
import MarketAccessPage from "../../../components/MarketAccessPage";

const canonical = "https://www.accesslerate.com/es/servicios/market-access";

export const metadata: Metadata = {
  title: "Consultoría Market Access México y LATAM | Accesslerate",
  description: "Estrategia de Market Access para compañías Pharma, Biotech, MedTech y healthcare en México y Latinoamérica: propuesta de valor, stakeholders y activación organizacional.",
  alternates: { canonical, languages: { "en-US": "https://www.accesslerate.com/services/market-access", "es-MX": canonical, "x-default": "https://www.accesslerate.com/services/market-access" } },
  openGraph: { title: "Consultoría Market Access México y LATAM | Accesslerate", description: "Construye una ruta de acceso creíble integrando valor, evidencia, stakeholders, decisiones comerciales y activación organizacional.", url: canonical, locale: "es_MX", type: "website", images: [] },
  twitter: { card: "summary", title: "Consultoría Market Access México y LATAM | Accesslerate", description: "Estrategia de Market Access liderada por operadores para México y Latinoamérica.", images: [] },
};

export default function Page() { return <MarketAccessPage locale="es" />; }
