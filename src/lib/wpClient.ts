import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_API_URL as string;

export const wpClient = new GraphQLClient(endpoint); 