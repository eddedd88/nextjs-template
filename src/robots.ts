import { BASE_URL } from '@/constants'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dash/', '/login/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
