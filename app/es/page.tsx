import type { Metadata } from "next";
import MarketingHome from "../components/MarketingHome";

const title = "Consultoría Estratégica Healthcare México y LATAM | Accesslerate";
const description = "Estrategia healthcare liderada por operadores para crecimiento, market access, nuevos negocios, transformación comercial y gestión del cambio en México y Latinoamérica.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.accesslerate.com/es", languages: { en: "https://www.accesslerate.com/", es: "https://www.accesslerate.com/es", "x-default": "https://www.accesslerate.com/" } },
  openGraph: { title, description, type: "website", locale: "es_MX", url: "https://www.accesslerate.com/es", images: [{ url: "https://www.accesslerate.com/og.png", width: 1200, height: 630, alt: "Accesslerate — Complexity Shapes Advantage." }] },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.accesslerate.com/og.png"] },
};

export default function SpanishHome() { return <MarketingHome locale="es" />; }
