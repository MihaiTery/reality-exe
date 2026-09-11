import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://mihaitery.github.io/reality-exe/"
    : "https://realityexe.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteUrl}/shop`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${siteUrl}/product/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
