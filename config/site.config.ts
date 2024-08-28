import { type Site } from "./types";

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const siteConfig: Site = {
  name: "E-Shop",
  title: "E-Shop",
  description: "A e-commerce shopping platform",
  keywords: ["E-Shop", "E-commerce"],
  siteUrl: baseUrl,
  creator: { name: "Seun Code", url: "https://github.com/Oluwaseun-Oyewole" },
  links: { github: "https://github.com/Oluwaseun-Oyewole" },
};
