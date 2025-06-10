'use client'

import React from 'react'
import { MagnifyingGlassIcon, DocumentTextIcon, ArrowPathIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Technical SEO',
    description: 'Optimize your website\'s technical foundation for better search engine visibility and performance.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Content Strategy',
    description: 'Develop engaging, SEO-optimized content that resonates with your target audience and drives organic traffic.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Keyword Research',
    description: 'Identify high-value keywords and search trends to target the right audience and improve rankings.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Regular Updates',
    description: 'Stay ahead with regular content updates and optimization based on performance analytics.',
    icon: ArrowPathIcon,
  },
]

const metrics = [
  { id: 1, name: 'Organic Traffic Increase', value: '180%', description: 'Average growth in 6 months' },
  { id: 2, name: 'Keyword Rankings', value: '500+', description: 'First page positions' },
  { id: 3, name: 'Content Engagement', value: '4.5x', description: 'Increase in time on page' },
]

export default function SEOPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          SEO & Content Marketing
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Boost your organic visibility and engage your audience with our comprehensive SEO and content marketing services. We combine technical expertise with creative content strategies to help you rank higher and convert better.
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
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#0099f1] text-white">
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

      {/* Process Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Process</h2>
        <div className="mt-8 relative">
          <div className="absolute top-0 left-8 h-full w-px bg-gray-200" />
          <div className="relative space-y-8">
            {[
              { step: 1, title: 'Technical Audit', description: 'Comprehensive analysis of your website\'s technical SEO elements' },
              { step: 2, title: 'Keyword Strategy', description: 'Research and planning of target keywords and topics' },
              { step: 3, title: 'Content Creation', description: 'Development of optimized, engaging content' },
              { step: 4, title: 'Implementation', description: 'Technical optimization and content publishing' },
              { step: 5, title: 'Monitoring & Updates', description: 'Continuous tracking and optimization of performance' },
            ].map((item) => (
              <div key={item.step} className="relative flex items-start">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#0099f1] text-white">
                  {item.step}
                </div>
                <div className="ml-24">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
                <span className="text-3xl font-semibold tracking-tight text-[#0099f1]">
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
        <div className="rounded-2xl bg-[#0099f1]/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get a free SEO audit and discover opportunities to improve your organic visibility.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#0099f1] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#5ce1e6] transition-colors"
            >
              Get Free SEO Audit
              <MagnifyingGlassIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 