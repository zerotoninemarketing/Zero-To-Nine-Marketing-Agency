import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_API_URL as string;

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    'Cache-Control': 'public, max-age=300, s-maxage=300', // 5 minutes cache
  },
});

// Cache for storing API responses
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function cachedRequest<T>(query: string, variables?: any): Promise<T> {
  const cacheKey = JSON.stringify({ query, variables });
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }
  
  try {
    const data = await wpClient.request(query, variables);
    cache.set(cacheKey, { data, timestamp: Date.now() });
    return data as T;
  } catch (error) {
    // Return cached data if available, even if expired
    if (cached) {
      return cached.data as T;
    }
    throw error;
  }
} 