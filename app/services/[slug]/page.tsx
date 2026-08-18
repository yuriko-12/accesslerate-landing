import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StrategicServicePage from "../../components/StrategicServicePage";
import { getStrategicService, getStrategicServiceSlugs } from "../../lib/strategic-services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getStrategicServiceSlugs("en").map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getStrategicService("en", slug);
  if (!service) return {};
  const canonical = `https://www.accesslerate.com/services/${service.slug}`;
  const spanish = `https://www.accesslerate.com/es/servicios/${service.counterpartSlug}`;
  return { title: service.seoTitle, description: service.seoDescription, alternates: { canonical, languages: { "en-US": canonical, "es-MX": spanish, "x-default": canonical } }, openGraph: { title: service.seoTitle, description: service.seoDescription, url: canonical, locale: "en_US", type: "website", images: [] }, twitter: { card: "summary", title: service.seoTitle, description: service.seoDescription, images: [] } };
}

export default async function Page({ params }: Props) { const { slug } = await params; const service = getStrategicService("en", slug); if (!service) notFound(); return <StrategicServicePage service={service} />; }
