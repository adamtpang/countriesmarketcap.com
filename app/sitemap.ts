import type { MetadataRoute } from 'next'
const BASE = 'https://countriesmarketcap.com'
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-08-28')
  return [
    { url: `${BASE}/`, lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: updated, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: updated, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: updated, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
