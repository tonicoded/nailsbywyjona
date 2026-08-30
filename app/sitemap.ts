import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nailsbywyjona.nl';
  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/prijzen`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/over-mij`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/afspraak`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
