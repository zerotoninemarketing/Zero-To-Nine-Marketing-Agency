import { client } from '@/lib/sanity';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/lib/sanityImage';
import slugify from 'slugify';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlForImage(value).width(800).url()}
        alt={value.alt || 'Post image'}
        className="rounded-lg my-4"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => {
      let text = '';
      if (Array.isArray(children)) {
        text = children.map(child => (typeof child === 'string' ? child : '')).join(' ');
      } else if (typeof children === 'string') {
        text = children;
      }
      const slug = slugify(text, { lower: true, strict: true });
      return <h2 id={slug} className="text-3xl font-semibold mt-6 mb-3 scroll-mt-32">{children}</h2>;
    },
    h3: ({ children }) => {
      let text = '';
      if (Array.isArray(children)) {
        text = children.map(child => (typeof child === 'string' ? child : '')).join(' ');
      } else if (typeof children === 'string') {
        text = children;
      }
      const slug = slugify(text, { lower: true, strict: true });
      return <h3 id={slug} className="text-2xl font-semibold mt-5 mb-2 scroll-mt-32">{children}</h3>;
    },
    h4: ({ children }) => <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-blue underline hover:text-brand-turquoise transition-colors"
      >
        {children}
      </a>
    ),
  },
};

async function getPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body
    }`,
    { slug }
  );
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
      {/* Blog Content */}
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString()}</p>
        <PortableText value={post.body} components={components} />
      </article>

      {/* Ads Panel */}
      <aside className="hidden lg:block sticky top-24 bg-gray-100 p-4 rounded-lg">
        {/* Ad area left empty for now */}
      </aside>
    </main>
  );
}