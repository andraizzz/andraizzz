import type { MetadataRoute } from "next";
import { getAllSitePaths, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getAllSitePaths().map((pathname) => ({
    url: new URL(pathname, siteUrl).toString(),
    lastModified: now,
    changeFrequency: pathname.startsWith("/insights/") ? "monthly" : "weekly",
    priority:
      pathname === "/"
        ? 1
        : pathname === "/recommended-tools" || pathname === "/insights"
          ? 0.9
          : pathname.startsWith("/insights/")
            ? 0.8
            : 0.3
  }));
}
