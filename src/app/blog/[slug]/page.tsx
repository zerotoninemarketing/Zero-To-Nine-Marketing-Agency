// Temporarily disabled for WordPress conversion
// Blog functionality will be handled by WordPress

import { wpClient } from '../../../lib/wpClient';
import { GET_POST_BY_SLUG } from '../../../lib/queries';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = await wpClient.request(GET_POST_BY_SLUG, { slug: params.slug });
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