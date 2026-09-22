import type { MetadataRoute } from "next";
import { areaPath, areas } from "@/lib/areas";
import { site } from "@/lib/site";

const updated = new Date(site.contentUpdated);

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/areas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/notary-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/apostille-authentication", changeFrequency: "monthly", priority: 0.8 },
  { path: "/signature-witnessing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-use", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...areas.map((area) => ({
      url: `${site.url}${areaPath(area)}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: area.hub === null ? 0.8 : 0.6,
    })),
  ];
}
