'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Sparkles } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO & GEO solutions to dominate both traditional search and AI-powered engines
            </p>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">SEO</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Search Engine Optimization to help your brand rank #1 on Google and dominate traditional search results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Technical SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">On-page & off-page SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Content optimization & keyword research</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Link building & backlink strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Monthly SEO performance reports</span>
                </li>
              </ul>
              <Link
                href="/services/seo"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                View More
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">620%</div>
                  <div className="text-gray-600">Average Traffic Increase</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">45M+</div>
                  <div className="text-gray-600">Total Impressions Generated</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">467%</div>
                  <div className="text-gray-600">Average Sales Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO/GEO Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                    <div className="text-3xl font-bold mb-2">1,247+</div>
                    <div className="text-purple-100">AI Search Rankings Achieved</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                    <div className="text-3xl font-bold mb-2">847</div>
                    <div className="text-purple-100">ChatGPT Queries Ranking #1</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                    <div className="text-3xl font-bold mb-2">623</div>
                    <div className="text-purple-100">Perplexity Answers Featured</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">AEO/GEO</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Answer Engine Optimization & Generative Engine Optimization to dominate ChatGPT, Perplexity, Gemini, and Meta AI.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">ChatGPT, Perplexity & Gemini optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-optimized content creation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Structured data & schema markup for AI</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI search ranking monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bi-weekly GEO performance reports</span>
                </li>
              </ul>
              <Link
                href="/services/answerengineoptimization"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                View More
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
