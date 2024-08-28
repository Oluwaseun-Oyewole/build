import { type MetadataRoute } from "next";
export default function sitemaps(): MetadataRoute.Sitemap {
  return [
    {
      url: ``,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
