'use client'

import React from 'react'
import { SparklesIcon, ChatBubbleLeftRightIcon, CommandLineIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'ChatGPT Optimization',
    description: 'Optimize your content to rank #1 in ChatGPT responses, ensuring your brand becomes the primary answer for relevant queries.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Perplexity AI Ranking',
    description: 'Get featured in Perplexity AI answers with structured content that AI engines prefer and cite as authoritative sources.',
    icon: SparklesIcon,
  },
  {
    name: 'Gemini & Meta AI',
    description: 'Dominate Google Gemini and Meta AI search results with AI-optimized content that these engines prioritize.',
    icon: CommandLineIcon,
  },
  {
    name: 'AI Search Analytics',
    description: 'Track your performance across all AI search engines with specialized monitoring and reporting tools.',
    icon: ChartBarIcon,
  },
]

const metrics = [
  { id: 1, name: 'AI Search Rankings', value: '1,247+', description: 'Total rankings across AI engines' },
  { id: 2, name: 'ChatGPT Queries', value: '847', description: 'Ranking #1 for queries' },
  { id: 3, name: 'Perplexity Answers', value: '623', description: 'Featured in answers' },
]

const aiEngines = [
  {
    name: 'ChatGPT',
    description: 'Rank #1 in ChatGPT responses for your target queries',
    features: ['Content optimization for ChatGPT', 'Citation-worthy content', 'Query-specific targeting'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Perplexity AI',
    description: 'Get featured in Perplexity AI answer cards and citations',
    features: ['Structured data optimization', 'Source authority building', 'Answer card optimization'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Google Gemini',
    description: 'Dominate Gemini search results and featured snippets',
    features: ['Gemini-specific optimization', 'Featured snippet targeting', 'AI-friendly content format'],
    color: 'from-yellow-500 to-orange-600',
  },
  {
    name: 'Meta AI',
    description: 'Optimize for Meta AI search across Facebook and Instagram',
    features: ['Meta AI content strategy', 'Social signal optimization', 'Cross-platform visibility'],
    color: 'from-purple-500 to-pink-600',
  },
]

export default function AnswerEngineOptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Dominate AI search engines like ChatGPT, Perplexity, Gemini, and Meta AI. Make your brand the #1 answer in AI-powered search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Free AEO/GEO Audit
                <SparklesIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is AEO/GEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is AEO & GEO?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-900">Answer Engine Optimization (AEO)</strong> and{' '}
                  <strong className="text-gray-900">Generative Engine Optimization (GEO)</strong> are the new frontiers of search marketing.
                </p>
                <p>
                  While traditional SEO helps you rank in Google, AEO/GEO ensures your brand appears as the #1 answer in AI-powered search engines like ChatGPT, Perplexity, Gemini, and Meta AI.
                </p>
                <p>
                  As more users turn to AI for answers, being invisible in AI search means losing customers to competitors who are already ranking.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">93%</div>
                  <div className="text-gray-600">of consumers use AI search before making purchase decisions</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-2">76%</div>
                  <div className="text-gray-600">of potential customers never see you if you're not in AI results</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$847</div>
                  <div className="text-gray-600">average daily revenue lost per business not ranking in AI search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engines Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optimize for All Major AI Search Engines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize your content to rank across ChatGPT, Perplexity, Gemini, and Meta AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiEngines.map((engine) => (
              <div
                key={engine.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${engine.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{engine.name}</h3>
                  <p className="text-white/90">{engine.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {engine.features.map((feature, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AEO/GEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive optimization strategies for AI search engines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all"
              >
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex-shrink-0">
                    {React.createElement(feature.icon, { className: 'h-6 w-6', 'aria-hidden': 'true' })}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AEO/GEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to dominate AI search engines
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-8 h-full w-px bg-gradient-to-b from-purple-200 to-pink-200 hidden md:block" />
            <div className="relative space-y-8">
              {[
                { step: 1, title: 'AI Search Audit', description: 'Comprehensive analysis of your current visibility across ChatGPT, Perplexity, Gemini, and Meta AI' },
                { step: 2, title: 'Content Strategy', description: 'Develop AI-optimized content that answers queries the way AI engines prefer' },
                { step: 3, title: 'Structured Data Setup', description: 'Implement schema markup and structured data for AI engine understanding' },
                { step: 4, title: 'Content Optimization', description: 'Optimize existing and new content for AI search engine algorithms' },
                { step: 5, title: 'Monitoring & Reporting', description: 'Track rankings across all AI engines with bi-weekly performance reports' },
              ].map((item) => (
                <div key={item.step} className="relative flex items-start">
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold text-xl z-10">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics from our AEO/GEO optimization campaigns
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="flex flex-col rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all"
              >
                <dt className="text-base leading-7 text-gray-600 font-semibold mb-2">{metric.name}</dt>
                <dd className="mt-2">
                  <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate AI Search Results?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free AEO/GEO audit and discover how to rank #1 in ChatGPT, Perplexity, Gemini, and Meta AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Free AEO/GEO Audit
              <SparklesIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

