import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_API_URL as string;

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
}); 