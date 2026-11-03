import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  const { personal } = portfolio;
  return {
    rules: {
      userAgent: "*",
      ...(personal.placeholder ? { disallow: "/" } : { allow: "/" }),
    },
    ...(personal.siteUrl ? { sitemap: `${personal.siteUrl}/sitemap.xml` } : {}),
  };
}
