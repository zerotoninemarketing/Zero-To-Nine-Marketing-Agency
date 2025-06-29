import { wpClient } from '../../lib/wpClient';
import { GET_POSTS } from '../../lib/queries';

export default async function BlogPage() {
  let posts = [];
  let errorInfo = null;

  try {
    const data = await wpClient.request(GET_POSTS);
    posts = data.posts.nodes;
  } catch (error: any) {
    errorInfo = {
      message: error?.message,
      response: error?.response,
      request: error?.request,
      stack: error?.stack,
    };
  }

  if (errorInfo) {
    return <pre>{JSON.stringify(errorInfo, null, 2)}</pre>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Marketing Insights & Strategies</h1>
        <p>
          Expert perspectives, actionable tips, and the latest trends in digital marketing
          to help grow your business.
        </p>
      </section>

      {/* Blog Grid */}
      <div className="blog-grid">
        {posts.length === 0 && (
          <>
            <div className="blog-card coming-soon">Coming Soon</div>
            <div className="blog-card coming-soon">Coming Soon</div>
            <div className="blog-card coming-soon">Coming Soon</div>
          </>
        )}
        {posts.map((post: any) => (
          <div className="blog-card" key={post.id}>
            {post.featuredImage?.node?.sourceUrl && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="blog-card-image"
                style={{ width: '100%', borderRadius: '1rem 1rem 0 0' }}
              />
            )}
            <div className="blog-meta">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              {/* Add category and read time if available */}
            </div>
            <a href={`/blog/${post.slug}`} className="blog-title">
              {post.title}
            </a>
            { <div
              className="blog-excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            /> }
          </div>
        ))}
      </div>
    </div>
  );
}