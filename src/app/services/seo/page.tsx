'use client'

import React from 'react'
import { MagnifyingGlassIcon, DocumentTextIcon, ArrowPathIcon, GlobeAltIcon, LinkIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'Technical SEO',
    description: 'Optimize your website\'s technical foundation for better search engine visibility, performance, and crawling efficiency.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Content Strategy & Optimization',
    description: 'Develop engaging, SEO-optimized content that resonates with your target audience and drives organic traffic.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Keyword Research & Targeting',
    description: 'Identify high-value keywords and search trends to target the right audience and improve rankings.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Link Building & Backlinks',
    description: 'Build high-authority backlinks and establish your domain authority through strategic link acquisition.',
    icon: LinkIcon,
  },
  {
    name: 'On-Page & Off-Page SEO',
    description: 'Comprehensive optimization of both on-page elements and off-page signals for maximum visibility.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Performance Analytics',
    description: 'Track rankings, traffic, and conversions with detailed SEO analytics and monthly performance reports.',
    icon: ChartBarIcon,
  },
]

const metrics = [
  { id: 1, name: 'Organic Traffic Increase', value: '620%', description: 'Average growth across clients' },
  { id: 2, name: 'Total Impressions', value: '45M+', description: 'Generated for clients' },
  { id: 3, name: 'Keyword Rankings', value: '500+', description: 'First page positions achieved' },
]

const seoServices = [
  {
    name: 'Technical SEO',
    description: 'Optimize your website\'s technical foundation for search engines',
    features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'XML sitemaps', 'Core Web Vitals'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Content SEO',
    description: 'Create and optimize content that ranks in Google search results',
    features: ['Keyword-optimized content', 'Content strategy planning', 'Blog post optimization', 'Service page SEO', 'Content audits'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Link Building',
    description: 'Build high-quality backlinks to boost domain authority',
    features: ['Guest posting', 'Broken link building', 'Resource page outreach', 'PR link acquisition', 'Influencer partnerships'],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Local SEO',
    description: 'Dominate local search results and Google My Business',
    features: ['Google My Business optimization', 'Local citations', 'Review management', 'Local content strategy', 'NAP consistency'],
    color: 'from-orange-500 to-red-600',
  },
]

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Engine Optimization (SEO)
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Dominate Google search results and drive organic traffic to your website. Our comprehensive SEO strategies help you rank #1 for your target keywords.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Free SEO Audit
                <MagnifyingGlassIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is SEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is SEO?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-900">Search Engine Optimization (SEO)</strong> is the practice of optimizing your website to rank higher in Google and other search engines.
                </p>
                <p>
                  When users search for products or services related to your business, SEO ensures your website appears at the top of search results, driving organic (free) traffic to your site.
                </p>
                <p>
                  Our comprehensive SEO strategies combine technical optimization, content creation, and link building to help you dominate search results and outrank your competitors.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">93%</div>
                  <div className="text-gray-600">of online experiences begin with a search engine</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">75%</div>
                  <div className="text-gray-600">of users never scroll past the first page of results</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">14.6%</div>
                  <div className="text-gray-600">average click-through rate for #1 position</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cover all aspects of SEO to maximize your search visibility
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SEO solutions to dominate search results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white mb-4">
                    {React.createElement(feature.icon, { className: 'h-6 w-6', 'aria-hidden': 'true' })}
                  </div>
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to dominate Google search results
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-8 h-full w-px bg-gradient-to-b from-blue-200 to-cyan-200 hidden md:block" />
            <div className="relative space-y-8">
              {[
                { step: 1, title: 'SEO Audit & Analysis', description: 'Comprehensive analysis of your website\'s current SEO performance, technical issues, and opportunities' },
                { step: 2, title: 'Keyword Research & Strategy', description: 'Identify high-value keywords, analyze competition, and develop a strategic keyword targeting plan' },
                { step: 3, title: 'Technical Optimization', description: 'Fix technical SEO issues, optimize site speed, implement schema markup, and improve crawlability' },
                { step: 4, title: 'Content Creation & Optimization', description: 'Create SEO-optimized content and optimize existing pages for target keywords' },
                { step: 5, title: 'Link Building & Outreach', description: 'Build high-quality backlinks through strategic outreach and content marketing' },
                { step: 6, title: 'Monitoring & Reporting', description: 'Track rankings, traffic, and conversions with monthly SEO performance reports and optimization' },
              ].map((item) => (
                <div key={item.step} className="relative flex items-start">
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-xl z-10">
                    {item.step}
                  </div>
                  <div className="ml-24 md:ml-24">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven SEO Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics from our SEO optimization campaigns
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="flex flex-col rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all"
              >
                <dt className="text-base leading-7 text-gray-600 font-semibold mb-2">{metric.name}</dt>
                <dd className="mt-2">
                  <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-600 block mt-2">{metric.description}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Google Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how to rank #1 for your target keywords and drive organic traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Free SEO Audit
              <MagnifyingGlassIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
