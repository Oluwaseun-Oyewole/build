import { siteConfig } from "@/config/site.config";
import { type MetadataRoute } from "next";

interface Route {
  url: string;
  lastModified: string;
  changeFrequency?: string;
  priority?: number;
}

export default async function sitemaps(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [""].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  let fetchRoutes: Route[] = [];
  try {
    fetchRoutes = (await Promise.all([])).flat();
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw JSON.stringify(error, null, 2);
  }

  // {
  //   url: `${siteConfig.siteUrl}`,
  //     lastModified: new Date(),
  //       changeFrequency: "monthly",
  //         priority: 1,
  //   },

  return [...routesMap, ...fetchRoutes];
}
