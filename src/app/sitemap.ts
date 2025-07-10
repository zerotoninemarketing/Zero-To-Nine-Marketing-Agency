import { MetadataRoute } from 'next'

// Types for WordPress data
interface WordPressPost {
  id: string
  title: string
  slug: string
  date: string
  modified?: string
}

interface WordPressResponse {
  posts?: {
    nodes?: WordPressPost[]
  }
}

async function getBlogPosts(): Promise<WordPressPost[]> {
  if (!process.env.WORDPRESS_API_URL) {
    return []
  }

  try {
    // Use require instead of import to avoid TypeScript issues
    const { GraphQLClient } = require('graphql-request')
    const { GET_POSTS } = require('../lib/queries')
    
    const wpClient = new GraphQLClient(process.env.WORDPRESS_API_URL)
    const data = await wpClient.request(GET_POSTS) as WordPressResponse
    
    return data?.posts?.nodes || []
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/audit',
    '/audit-tool',
    '/studio',
    '/thank-you',
    '/blog', // Add the main blog page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
  }))

  // Get blog posts from WordPress
  const blogPosts = await getBlogPosts()
  
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post: WordPressPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'weekly' as const, // Changed to weekly since you post 4-6 times per week
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
} 