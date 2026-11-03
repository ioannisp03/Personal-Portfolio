import type { MetadataRoute } from "next";
import { portfolio, projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl, placeholder } = portfolio.personal;
  if (!siteUrl || placeholder) return [];
  return [
    "",
    "/projects",
    ...projects
      .filter((project) => !project.placeholder)
      .map((project) => `/projects/${project.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
