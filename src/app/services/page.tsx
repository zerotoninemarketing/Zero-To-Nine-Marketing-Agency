'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Sparkles, CheckCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

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

      {/* Results Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Clientele Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real metrics from our SEO & GEO optimization campaigns
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">47M+</div>
                <div className="text-blue-100">Total Impressions Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$8.4M+</div>
                <div className="text-blue-100">Revenue Generated for Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1,247+</div>
                <div className="text-blue-100">AI Search Rankings Achieved</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">342%</div>
                <div className="text-blue-100">Average Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a Free SEO & GEO Audit
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Our team will analyze your current visibility and show you exactly how to rank #1 in Google, ChatGPT, Perplexity, and Gemini.
          </p>
          <ConsultationForm />
        </div>
      </section>
    </div>
  )
}

function ConsultationForm() {
  const [state, handleSubmit] = useForm('mdkqbwgv')

  if (state.succeeded) {
    return (
      <div className="bg-green-500 text-white p-8 rounded-xl max-w-md mx-auto">
        <CheckCircle size={48} className="mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-lg">Our team will get in touch with you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <input
            type="url"
            name="website"
            id="website"
            required
            placeholder="Enter your website URL"
            className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
          />
          <ValidationError prefix="Website" field="website" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {state.submitting ? 'Submitting...' : 'Get Free Audit'}
        </button>
      </div>
      <p className="text-sm text-blue-200 mt-4">
        No credit card required • 100% free analysis • Response within 24 hours
      </p>
    </form>
  )
}
