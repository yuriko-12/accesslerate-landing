import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePairs = [
    ["/solutions/healthcare-market-entry-mexico", "/es/soluciones/entrada-mercado-healthcare-mexico"],
    ["/services/business-growth-strategy", "/es/servicios/estrategia-negocio-crecimiento"],
    ["/services/market-access", "/es/servicios/market-access"],
    ["/services/new-business-partnerships", "/es/servicios/nuevos-negocios-alianzas"],
    ["/services/commercial-transformation", "/es/servicios/transformacion-comercial"],
    ["/services/change-management", "/es/servicios/gestion-del-cambio"],
  ] as const;
  const servicePages: MetadataRoute.Sitemap = servicePairs.flatMap(([englishPath, spanishPath]) => {
    const englishUrl = `https://www.accesslerate.com${englishPath}`;
    const spanishUrl = `https://www.accesslerate.com${spanishPath}`;
    const alternates = { languages: { "en-US": englishUrl, "es-MX": spanishUrl } };
    return [
      { url: englishUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9, alternates },
      { url: spanishUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9, alternates },
    ];
  });

  return [
    {
      url: "https://www.accesslerate.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.accesslerate.com/es",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
  ];
}
