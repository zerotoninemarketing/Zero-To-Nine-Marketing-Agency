import { cachedRequest } from '../../lib/wpClient';
import { GET_POSTS_MINIMAL } from '../../lib/queries';
import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '../../components/OptimizedImage';

// Revalidate the blog listing periodically so new posts appear without a redeploy
export const revalidate = 300; // seconds

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
    const data = await cachedRequest<PostsData>(GET_POSTS_MINIMAL);
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
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card-link">
            <div className="blog-card">
              {post.featuredImage?.node?.sourceUrl && (
                <OptimizedImage
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  width={400}
                  height={250}
                  className="blog-card-image"
                  priority={index < 2} // Prioritize first 2 images
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="blog-meta">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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