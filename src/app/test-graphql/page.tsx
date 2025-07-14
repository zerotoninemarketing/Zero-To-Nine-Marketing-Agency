import { wpClient } from '../../lib/wpClient';
import { GET_POSTS } from '../../lib/queries';

// Detailed query to check post status
const DETAILED_POSTS_QUERY = `
  query AllPostsDetailed {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
        status
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export default async function TestGraphQLPage() {
  try {
    const data = await wpClient.request(GET_POSTS) as { posts: { nodes: any[] } };
    const detailedData = await wpClient.request(DETAILED_POSTS_QUERY) as { posts: { nodes: any[] } };
    
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
        <h1>GraphQL Connection Test</h1>
        <div style={{ background: '#e8f5e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          ✅ GraphQL connection successful!
        </div>
        
        <h2>Posts Found: {data.posts.nodes.length}</h2>
        
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h3>Posts (Basic Query):</h3>
          {data.posts.nodes.map((post: any, index: number) => (
            <div key={post.id} style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ddd' }}>
              <strong>{index + 1}. {post.title}</strong>
              <br />
              <small>Slug: {post.slug}</small>
              <br />
              <small>Date: {new Date(post.date).toLocaleDateString()}</small>
              {post.featuredImage && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8em', color: '#666' }}>
                  <strong>Featured Image:</strong> ✅ Available
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h3>Detailed Post Information:</h3>
          {detailedData.posts.nodes.map((post: any, index: number) => (
            <div key={post.id} style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ddd', background: post.status === 'publish' ? '#e8f5e8' : '#ffe8e8' }}>
              <strong>{index + 1}. {post.title}</strong>
              <br />
              <small>Status: <span style={{ color: post.status === 'publish' ? 'green' : 'red', fontWeight: 'bold' }}>{post.status}</span></small>
              <br />
              <small>Slug: {post.slug}</small>
              <br />
              <small>Date: {new Date(post.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', background: '#fff3cd', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3>Next Steps:</h3>
          <p>✅ Blog posts are now working! To add SEO support:</p>
          <ol>
            <li>Install Yoast SEO plugin in WordPress</li>
            <li>Install Yoast SEO GraphQL extension</li>
            <li>Add GraphQL support code to functions.php</li>
          </ol>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <a href="/blog" style={{ color: 'blue', textDecoration: 'underline' }}>
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
        <h1>GraphQL Connection Test</h1>
        <div style={{ background: '#ffe8e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          ❌ GraphQL connection failed!
        </div>
        
        <h2>Error Details:</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Troubleshooting:</h3>
          <ul>
            <li>Check if .env.local file exists with WORDPRESS_API_URL</li>
            <li>Verify the WordPress GraphQL endpoint is accessible</li>
            <li>Make sure WPGraphQL plugin is activated</li>
          </ul>
        </div>
      </div>
    );
  }
} 