import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "category": category->title,
    excerpt,
    "mainImage": mainImage.asset->url,
    readTime
  }`);
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-brand-blue/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Marketing Insights & Strategies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert perspectives, actionable tips, and the latest trends in digital marketing to help grow your business.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-blue to-brand-turquoise opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="flex flex-col items-start">
              <Link href={`/blog/${post.slug}`} className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="mx-auto my-4 max-h-60 object-contain bg-gray-100"
                      style={{ background: '#f3f4f6' }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Coming Soon
                    </div>
                  )}
                </div>
              </Link>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt} className="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  {post.category && (
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 text-xs">
                      {post.category}
                    </span>
                  )}
                  {post.readTime && <span className="text-gray-500">{post.readTime}</span>}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-brand-blue">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  {post.excerpt && (
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}