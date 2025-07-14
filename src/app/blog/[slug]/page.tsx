// Temporarily disabled for WordPress conversion
// Blog functionality will be handled by WordPress

import { wpClient } from '../../../lib/wpClient';
import { GET_POST_BY_SLUG } from '../../../lib/queries';

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const data = await wpClient.request(GET_POST_BY_SLUG, { slug: params.slug }) as PostData;
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = await wpClient.request(GET_POST_BY_SLUG, { slug: params.slug }) as PostData;
  const post = data.post;

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post-layout" style={{ display: 'flex', gap: '2rem' }}>
      <main className="blog-main-content" style={{ flex: 3 }}>
        <h1 className="blog-title-h1">{post.title}</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
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