import { siteConfig } from "@/config/site.config";
import { type MetadataRoute } from "next";
export default function sitemaps(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
