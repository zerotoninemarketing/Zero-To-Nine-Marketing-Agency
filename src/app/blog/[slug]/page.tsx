// Temporarily disabled for WordPress conversion
// Blog functionality will be handled by WordPress

import { wpClient } from '../../../lib/wpClient';
import { GET_POST_BY_SLUG, GET_POST_SLUGS, GET_POST_SEO_BY_SLUG, GET_POSTS } from '../../../lib/queries';
import Link from 'next/link';

// Force dynamic rendering to ensure fresh content
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable static generation for fresh content

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

interface RecentPost {
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
}

// Remove static generation since we're using dynamic rendering
// export async function generateStaticParams() {
//   try {
//     const data = await wpClient.request(GET_POST_SLUGS) as { posts: { nodes: { slug: string }[] } };
//     return data.posts.nodes.map((n) => ({ slug: n.slug }));
//   } catch {
//     return [] as { slug: string }[];
//   }
// }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const data = await wpClient.request(GET_POST_SEO_BY_SLUG, { slug: params.slug }, {
      'Cache-Control': 'no-cache',
      'X-Request-Time': Date.now().toString()
    }) as PostSeoData;
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
  // Lazy-load images if not already specified
  transformed = transformed.replace(/<img\b(?![^>]*\bloading=)[^>]*>/gi, (match) =>
    match.replace('<img', '<img loading="lazy" decoding="async" fetchpriority="low"')
  );
  // Lazy-load iframes
  transformed = transformed.replace(/<iframe\b(?![^>]*\bloading=)[^>]*>/gi, (match) =>
    match.replace('<iframe', '<iframe loading="lazy"')
  );
  return transformed;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    // Add timestamp to prevent caching
    const [postData, recentPostsData] = await Promise.all([
      wpClient.request(GET_POST_BY_SLUG, { slug: params.slug }, {
        'Cache-Control': 'no-cache',
        'X-Request-Time': Date.now().toString()
      }) as Promise<PostData>,
      wpClient.request(GET_POSTS, {}, {
        'Cache-Control': 'no-cache',
        'X-Request-Time': Date.now().toString()
      }) as Promise<{ posts: { nodes: RecentPost[] } }>
    ]);

    const post = postData.post;
    const recentPosts = recentPostsData.posts.nodes;

    if (!post) return <div>Post not found</div>;

    // Filter out the current post from recent posts and take first 5
    const filteredRecentPosts = recentPosts
      .filter(recentPost => recentPost.slug !== params.slug)
      .slice(0, 5);

    const optimizedHtml = enhancePostHtml(post.content);

  return (
      <div className="blog-layout">
        <div className="blog-container">
          <main className="blog-main">
            <h1 className="blog-title-h1">{post.title}</h1>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: optimizedHtml }} />
            <p>
              <em>Published on {new Date(post.date).toLocaleDateString()}</em>
            </p>
          </main>
          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h3>Ad Space</h3>
              <div className="sidebar-content">
                <p>Advertisement or widget content can go here.</p>
              </div>
            </div>
            <div className="sidebar-widget">
              <h3>Recent Posts</h3>
              <div className="sidebar-content">
                {filteredRecentPosts.length > 0 ? (
                  <div className="recent-posts-list">
                    {filteredRecentPosts.map((recentPost) => (
                      <Link 
                        href={`/blog/${recentPost.slug}`} 
                        key={recentPost.id}
                        className="recent-post-item"
                      >
                        <div className="recent-post-title">{recentPost.title}</div>
                        <div className="recent-post-date">
                          {new Date(recentPost.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>No recent posts available.</p>
                )}
              </div>
            </div>
      </aside>
        </div>
      </div>
  );
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return <div>Error loading blog post</div>;
  }
}