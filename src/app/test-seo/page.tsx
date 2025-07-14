import { wpClient } from '../../lib/wpClient';

// Test query with SEO fields
const SEO_TEST_QUERY = `
  query TestSEO {
    posts {
      nodes {
        id
        title
        slug
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default async function TestSEOPage() {
  try {
    const data = await wpClient.request(SEO_TEST_QUERY) as { posts: { nodes: any[] } };
    
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
        <h1>SEO Features Test</h1>
        
        {data.posts.nodes.length > 0 && data.posts.nodes[0].seo ? (
          <div style={{ background: '#e8f5e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            ✅ SEO fields are working! Yoast SEO GraphQL extension is active.
          </div>
        ) : (
          <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            ⚠️ SEO fields not available. Make sure Yoast SEO and GraphQL extension are installed.
          </div>
        )}
        
        <h2>Posts with SEO Data:</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem' }}>
          {data.posts.nodes.map((post: any, index: number) => (
            <div key={post.id} style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ddd' }}>
              <strong>{index + 1}. {post.title}</strong>
              <br />
              <small>Slug: {post.slug}</small>
              
              {post.seo ? (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8em', color: '#666' }}>
                  <strong>SEO Data:</strong>
                  <br />
                  <strong>Meta Title:</strong> {post.seo.title || 'Not set'}
                  <br />
                  <strong>Meta Description:</strong> {post.seo.metaDesc || 'Not set'}
                  <br />
                  <strong>OG Title:</strong> {post.seo.opengraphTitle || 'Not set'}
                  <br />
                  <strong>OG Description:</strong> {post.seo.opengraphDescription || 'Not set'}
                  {post.seo.opengraphImage && (
                    <>
                      <br />
                      <strong>OG Image:</strong> ✅ Available
                    </>
                  )}
                </div>
              ) : (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8em', color: '#ff6b6b' }}>
                  ❌ No SEO data available
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', background: '#fff3cd', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3>Next Steps:</h3>
          {data.posts.nodes.length > 0 && data.posts.nodes[0].seo ? (
            <div>
              <p>✅ SEO is working! You can now:</p>
              <ol>
                <li>Configure SEO settings in WordPress for each post</li>
                <li>Add meta descriptions and titles</li>
                <li>Set up social media images</li>
                <li>Re-enable SEO fields in your React app</li>
              </ol>
            </div>
          ) : (
            <div>
              <p>To enable SEO features:</p>
              <ol>
                <li>Install Yoast SEO plugin in WordPress</li>
                <li>Install WPGraphQL for Yoast SEO extension</li>
                <li>Add the GraphQL support code to functions.php</li>
                <li>Test again</li>
              </ol>
            </div>
          )}
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
        <h1>SEO Features Test</h1>
        <div style={{ background: '#ffe8e8', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          ❌ SEO test failed!
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
            <li>Make sure Yoast SEO plugin is installed and activated</li>
            <li>Make sure WPGraphQL for Yoast SEO extension is installed</li>
            <li>Check that the GraphQL support code is added to functions.php</li>
          </ul>
        </div>
      </div>
    );
  }
} 