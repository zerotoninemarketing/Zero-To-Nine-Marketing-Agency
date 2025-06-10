'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Maximizing Your Digital Marketing ROI',
    excerpt: 'Learn the proven strategies to optimize your marketing budget and achieve better results with data-driven approaches.',
    date: 'Mar 20, 2024',
    category: 'Digital Marketing',
    imageUrl: '/images/blog/digital-marketing.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'SEO Trends That Will Dominate 2024',
    excerpt: 'Stay ahead of the curve with these emerging SEO trends that are shaping the future of online visibility.',
    date: 'Mar 18, 2024',
    category: 'SEO',
    imageUrl: '/images/blog/seo-trends.jpg',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Building a Strong Social Media Presence',
    excerpt: 'Discover how to create engaging content and build a loyal following across different social media platforms.',
    date: 'Mar 16, 2024',
    category: 'Social Media',
    imageUrl: '/images/blog/social-media.jpg',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
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
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-brand-blue">
                    <Link href="#" className="relative z-10">
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 