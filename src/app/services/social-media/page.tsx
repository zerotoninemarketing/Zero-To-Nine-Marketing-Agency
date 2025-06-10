'use client'

import React from 'react'
import { UserGroupIcon, ChatBubbleLeftRightIcon, ChartBarIcon, HashtagIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Social Media Strategy',
    description: 'Custom social media strategies tailored to your brand voice and target audience.',
    icon: HashtagIcon,
  },
  {
    name: 'Influencer Partnerships',
    description: 'Connect with relevant influencers to amplify your brand message and reach.',
    icon: UserGroupIcon,
  },
  {
    name: 'Community Management',
    description: 'Active engagement and community building across all social platforms.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Performance Analytics',
    description: 'Detailed analytics and reporting on social media performance and ROI.',
    icon: ChartBarIcon,
  },
]

const platforms = [
  { name: 'Instagram', followers: '50K+', engagement: '5.2%' },
  { name: 'TikTok', followers: '100K+', engagement: '8.7%' },
  { name: 'LinkedIn', followers: '25K+', engagement: '4.1%' },
  { name: 'Facebook', followers: '75K+', engagement: '3.8%' },
]

const metrics = [
  { id: 1, name: 'Average Engagement Rate', value: '6.5%', description: 'Across all platforms' },
  { id: 2, name: 'Brand Mentions', value: '10K+', description: 'Monthly mentions' },
  { id: 3, name: 'Content Reach', value: '2M+', description: 'Monthly impressions' },
]

export default function SocialMediaPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Social Media & Influencer Marketing
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Build meaningful connections and drive engagement with our comprehensive social media and influencer marketing services. We help brands create authentic relationships with their audience through strategic content and partnerships.
        </p>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#ff3131] text-white">
                  {React.createElement(feature.icon, { className: "h-8 w-8", "aria-hidden": "true" })}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Platform Expertise</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="text-sm text-gray-500">Average Following</dt>
                  <dd className="text-xl font-semibold text-[#ff3131]">{platform.followers}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Engagement Rate</dt>
                  <dd className="text-xl font-semibold text-[#ff3131]">{platform.engagement}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Performance Metrics</h2>
        <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
            >
              <dt className="text-base leading-7 text-gray-600">{metric.name}</dt>
              <dd className="mt-3">
                <span className="text-3xl font-semibold tracking-tight text-[#ff3131]">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-600 block mt-1">{metric.description}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-16">
        <div className="rounded-2xl bg-[#ff3131]/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get a free social media audit and discover opportunities to improve your online presence.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#5ce1e6] transition-colors"
            >
              Get Started
              <UserGroupIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 