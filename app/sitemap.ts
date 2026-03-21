// app/sitemap.ts
import { MetadataRoute } from "next";
import { prisma } from "@/db/prisma"; // ← change to match your prisma import path

const BASE_URL = "https://actualkeys.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── 1. Your existing static pages (unchanged) ─────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/about`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products`,                lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/help`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/terms`,                   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/refund-policy`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/return-policy`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/shipping-policy`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/payment-methods`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];

  // ── 2. Category pages (dynamic from your DB) ──────────────────────────────
  // Your schema has no Category model — category is a String field on Product.
  // This gets every unique category value that has at least 1 product in stock.
  const categoryRows = await prisma.product.findMany({
    select: { category: true },
    distinct: ["category"],
    where: { stock: { gt: 0 } },
  });

  const categoryPages: MetadataRoute.Sitemap = categoryRows.map(({ category }) => ({
    url: `${BASE_URL}/search?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── 3. Individual product pages (dynamic from your DB) ────────────────────
  // Uses Product.slug and Product.createdAt from your Prisma schema
  const products = await prisma.product.findMany({
    select: {
      slug: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // ── Merge everything ──────────────────────────────────────────────────────
  return [...staticPages, ...categoryPages, ...productPages];
// Place this file in your /app directory

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://actualkeys.com' // Change to your actual domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/return-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/payment-methods`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]
}
