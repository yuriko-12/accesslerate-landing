import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
    {
      url: "https://www.accesslerate.com/services/market-access",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "en-US": "https://www.accesslerate.com/services/market-access", "es-MX": "https://www.accesslerate.com/es/servicios/market-access" } },
    },
    {
      url: "https://www.accesslerate.com/es/servicios/market-access",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "en-US": "https://www.accesslerate.com/services/market-access", "es-MX": "https://www.accesslerate.com/es/servicios/market-access" } },
    },
  ];
}
