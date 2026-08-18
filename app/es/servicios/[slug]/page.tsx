import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StrategicServicePage from "../../../components/StrategicServicePage";
import { getStrategicService, getStrategicServiceSlugs } from "../../../lib/strategic-services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getStrategicServiceSlugs("es").map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getStrategicService("es", slug);
  if (!service) return {};
  const canonical = `https://www.accesslerate.com/es/servicios/${service.slug}`;
  const english = `https://www.accesslerate.com/services/${service.counterpartSlug}`;
  return { title: service.seoTitle, description: service.seoDescription, alternates: { canonical, languages: { "en-US": english, "es-MX": canonical, "x-default": english } }, openGraph: { title: service.seoTitle, description: service.seoDescription, url: canonical, locale: "es_MX", type: "website", images: [] }, twitter: { card: "summary", title: service.seoTitle, description: service.seoDescription, images: [] } };
}

export default async function Page({ params }: Props) { const { slug } = await params; const service = getStrategicService("es", slug); if (!service) notFound(); return <StrategicServicePage service={service} />; }
