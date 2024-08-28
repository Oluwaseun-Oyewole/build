import { siteConfig } from "@/config/site.config";
import { type MetadataRoute } from "next";
export default function sitemaps(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
