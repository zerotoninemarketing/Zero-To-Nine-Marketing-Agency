import { wpClient } from '../../lib/wpClient';
import { GET_POSTS } from '../../lib/queries';
import { Metadata } from 'next';
import Link from 'next/link';

// Smart caching: 3-minute revalidation for fresh content while maintaining performance
export const revalidate = 180; // 3 minutes - good balance of performance and freshness

interface PostNode {
  id: string;
  title: string;
  slug: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    }
  }
  seo?: {
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
    opengraphImage?: {
      sourceUrl: string;
    }
  }
}

interface PostsData {
  posts: {
    nodes: PostNode[];
  }
}

export const metadata: Metadata = {
  title: 'Blog - Marketing Insights & Strategies | Zero Tonic Marketing',
  description: 'Expert perspectives, actionable tips, and the latest trends in digital marketing to help grow your business.',
  openGraph: {
    title: 'Blog - Marketing Insights & Strategies',
    description: 'Expert perspectives, actionable tips, and the latest trends in digital marketing to help grow your business.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Marketing Insights & Strategies',
    description: 'Expert perspectives, actionable tips, and the latest trends in digital marketing to help grow your business.',
  },
};

export default async function BlogPage() {
  let posts: PostNode[] = [];
  let errorInfo = null;

  try {
    const data = await wpClient.request(GET_POSTS) as { posts: { nodes: PostNode[] } };
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
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card-link">
            <div className="blog-card">
              {post.featuredImage?.node?.sourceUrl && (
                // Using img here because sources are remote/variable; add decoding and lazy loading for perf
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  className="blog-card-image"
                  style={{ width: '100%', borderRadius: '1rem 1rem 0 0' }}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="blog-meta">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                {/* Add category and read time if available */}
              </div>
              <div className="blog-title">
                {post.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}