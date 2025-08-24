// Temporarily disabled for WordPress conversion
// Blog functionality will be handled by WordPress

import { cachedRequest } from '../../../lib/wpClient';
import { GET_POST_BY_SLUG, GET_POST_SLUGS, GET_POST_SEO_BY_SLUG } from '../../../lib/queries';
import OptimizedImage from '../../../components/OptimizedImage';

// Revalidate individual posts periodically
export const revalidate = 60; // seconds

interface PostData {
  post: {
    id: string;
    title: string;
    content: string;
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
      twitterTitle: string;
      twitterDescription: string;
      twitterImage?: {
        sourceUrl: string;
      }
      canonical: string;
      focuskw: string;
      metaRobotsNoindex: string;
      metaRobotsNofollow: string;
    }
  }
}

interface PostSeoData {
  post: {
    title: string;
    seo?: {
      title?: string;
      metaDesc?: string;
      opengraphTitle?: string;
      opengraphDescription?: string;
      opengraphImage?: { sourceUrl: string };
      twitterTitle?: string;
      twitterDescription?: string;
      twitterImage?: { sourceUrl: string };
      canonical?: string;
    }
  }
}

export async function generateStaticParams() {
  try {
    const data = await cachedRequest<{ posts: { nodes: { slug: string }[] } }>(GET_POST_SLUGS);
    return data.posts.nodes.map((n) => ({ slug: n.slug }));
  } catch {
    return [] as { slug: string }[];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const data = await cachedRequest<PostSeoData>(GET_POST_SEO_BY_SLUG, { slug: params.slug });
    const post = data.post;

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || post.title,
      openGraph: {
        title: post.seo?.opengraphTitle || post.title,
        description: post.seo?.opengraphDescription || post.seo?.metaDesc || post.title,
        images: post.seo?.opengraphImage?.sourceUrl ? [post.seo.opengraphImage.sourceUrl] : [],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo?.twitterTitle || post.title,
        description: post.seo?.twitterDescription || post.seo?.metaDesc || post.title,
        images: post.seo?.twitterImage?.sourceUrl ? [post.seo.twitterImage.sourceUrl] : [],
      },
      alternates: {
        canonical: post.seo?.canonical || `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Marketing insights and strategies',
    };
  }
}

function enhancePostHtml(html: string): string {
  let transformed = html;
  
  // Optimize images with proper attributes
  transformed = transformed.replace(
    /<img\b([^>]*)>/gi,
    (match, attributes) => {
      // Add loading="lazy" if not present
      if (!attributes.includes('loading=')) {
        attributes += ' loading="lazy"';
      }
      // Add decoding="async" if not present
      if (!attributes.includes('decoding=')) {
        attributes += ' decoding="async"';
      }
      // Add fetchpriority="low" for non-critical images
      if (!attributes.includes('fetchpriority=')) {
        attributes += ' fetchpriority="low"';
      }
      return `<img${attributes}>`;
    }
  );
  
  // Optimize iframes
  transformed = transformed.replace(
    /<iframe\b([^>]*)>/gi,
    (match, attributes) => {
      if (!attributes.includes('loading=')) {
        attributes += ' loading="lazy"';
      }
      return `<iframe${attributes}>`;
    }
  );
  
  return transformed;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = await cachedRequest<PostData>(GET_POST_BY_SLUG, { slug: params.slug });
  const post = data.post;

  if (!post) return <div>Post not found</div>;

  const optimizedHtml = enhancePostHtml(post.content);

  return (
    <div className="blog-post-layout" style={{ display: 'flex', gap: '2rem' }}>
      <main className="blog-main-content" style={{ flex: 3 }}>
        <h1 className="blog-title-h1">{post.title}</h1>
        
        {post.featuredImage?.node?.sourceUrl && (
          <OptimizedImage
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={800}
            height={400}
            className="mb-6 rounded-lg"
            priority={true}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        )}
        
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: optimizedHtml }} />
        <p>
          <em>Published on {new Date(post.date).toLocaleDateString()}</em>
        </p>
      </main>
      <aside style={{ flex: 1, background: '#f5f7fa', borderRadius: '1rem', padding: '2rem' }}>
        {/* Sidebar content or ads here */}
        <p>Ad space or widgets</p>
      </aside>
    </div>
  );
}