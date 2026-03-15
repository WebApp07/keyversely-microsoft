// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // API routes — no SEO value
          "/checkout",    // private, no SEO value
          "/account",     // private user pages
          "/cart",        // dynamic, no SEO value
          "/admin",       // admin panel
          "/_next/",      // Next.js internals
        ],
      },
      {
        // Block AI crawlers from training on your product content
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    // Points crawlers directly to your sitemap
    sitemap: "https://actualkeys.com/sitemap.xml",
  };
}
