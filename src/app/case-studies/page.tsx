'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon, ChartBarIcon, ArrowTrendingUpIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-blue-600">Case</span> Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real results from real businesses. See how we&apos;ve helped companies across the UAE 
              achieve remarkable growth through strategic digital marketing.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {[
            {
              title: 'E-commerce Growth & Digital Marketing',
              client: 'Curvylane',
              industry: 'Fashion & E-commerce',
              duration: '8 Months',
              challenge: 'New fashion e-commerce brand struggling with brand awareness, website traffic, and online sales in the competitive UAE market.',
              solution: 'Implemented comprehensive digital marketing strategy including Meta ads, Google Shopping campaigns, SEO optimization, and social media management.',
              results: [
                { metric: 'Monthly Sales', before: '$4,100', after: '$23,200', improvement: '467%' },
                { metric: 'Website Traffic', before: '2,500', after: '18,000', improvement: '620%' },
                { metric: 'Conversion Rate', before: '1.8%', after: '4.2%', improvement: '133%' },
                { metric: 'Social Media Followers', before: '500', after: '8,500', improvement: '1,600%' }
              ],
              testimonial: {
                name: 'Curvylane Team',
                role: 'Founders',
                content: 'Zero To Nine transformed our brand from a startup to a recognized fashion destination. Their comprehensive marketing approach helped us establish a strong online presence and achieve consistent sales growth.'
              },
              services: ['Meta Ads', 'Google Shopping', 'SEO', 'Social Media Management', 'Content Marketing']
            },
            {
              title: 'Restaurant Marketing & Local SEO',
              client: 'Boketto Resto & Bo\'s Paradise',
              industry: 'Food & Beverage',
              duration: '6 Months',
              challenge: 'Two restaurant locations struggling with local visibility, online orders, and foot traffic despite excellent food quality and service.',
              solution: 'Developed local SEO strategy, Google My Business optimization, social media campaigns, and delivery platform optimization.',
              results: [
                { metric: 'Local Search Rankings', before: 'Page 4', after: '#1 Position', improvement: 'Top Rank' },
                { metric: 'Online Orders', before: '25/day', after: '120/day', improvement: '380%' },
                { metric: 'Google Reviews', before: '8', after: '156', improvement: '1,850%' },
                { metric: 'Foot Traffic', before: '80/day', after: '250/day', improvement: '213%' }
              ],
              testimonial: {
                name: 'Boketto Management',
                role: 'Restaurant Owners',
                content: 'Zero To Nine helped us dominate local search results and significantly increase our online orders. Our restaurants are now the go-to choice for food lovers in the area.'
              },
              services: ['Local SEO', 'Google My Business', 'Social Media Marketing', 'Delivery Optimization']
            },
            {
              title: 'Jewelry Brand Digital Transformation',
              client: 'Caro Jewels',
              industry: 'Luxury & Jewelry',
              duration: '7 Months',
              challenge: 'Premium jewelry brand with low online presence and struggling to reach affluent customers in the UAE market.',
              solution: 'Created luxury-focused digital marketing campaigns, influencer partnerships, and premium content strategy targeting high-value customers.',
              results: [
                { metric: 'Average Order Value', before: '$220', after: '$680', improvement: '213%' },
                { metric: 'Website Traffic', before: '1,200', after: '12,000', improvement: '900%' },
                { metric: 'Social Media Engagement', before: '3%', after: '18%', improvement: '500%' },
                { metric: 'Customer Lifetime Value', before: '$330', after: '$1,310', improvement: '300%' }
              ],
              testimonial: {
                name: 'Caro Jewels Team',
                role: 'Brand Managers',
                content: 'Zero To Nine helped us position our brand as a premium jewelry destination. Their luxury marketing approach and influencer partnerships have significantly increased our customer value.'
              },
              services: ['Luxury Marketing', 'Influencer Partnerships', 'Premium Content', 'Social Media Management']
            },
            {
              title: 'SEO & Content Marketing Success',
              client: 'MSOfficeGeek',
              industry: 'Technology & Software',
              duration: '5 Months',
              challenge: 'Software tutorial website with poor search rankings and low organic traffic despite valuable content.',
              solution: 'Implemented comprehensive SEO strategy, content optimization, technical SEO improvements, and link building campaigns.',
              results: [
                { metric: 'Organic Traffic', before: '3,500', after: '28,000', improvement: '700%' },
                { metric: 'Search Rankings', before: 'Page 3-5', after: '#1-3 Positions', improvement: 'Top Rankings' },
                { metric: 'Keyword Rankings', before: '15', after: '180', improvement: '1,100%' },
                { metric: 'Content Engagement', before: '2 min', after: '8 min', improvement: '300%' }
              ],
              testimonial: {
                name: 'MSOfficeGeek Team',
                role: 'Content Creators',
                content: 'Zero To Nine\'s SEO expertise transformed our website from a hidden gem to a top-ranking resource. Our organic traffic and user engagement have skyrocketed.'
              },
              services: ['Technical SEO', 'Content Optimization', 'Link Building', 'Keyword Research']
            },
            {
              title: 'Food Blog & Recipe Platform Growth',
              client: 'TastedRecipes',
              industry: 'Food & Content',
              duration: '4 Months',
              challenge: 'Recipe and food blog with great content but poor search visibility and low user engagement.',
              solution: 'Optimized content for search engines, improved user experience, implemented recipe schema markup, and enhanced social media presence.',
              results: [
                { metric: 'Monthly Visitors', before: '8,000', after: '45,000', improvement: '463%' },
                { metric: 'Recipe Views', before: '15,000', after: '120,000', improvement: '700%' },
                { metric: 'User Engagement', before: '1.5 min', after: '6 min', improvement: '300%' },
                { metric: 'Social Shares', before: '200', after: '2,500', improvement: '1,150%' }
              ],
              testimonial: {
                name: 'TastedRecipes Team',
                role: 'Food Bloggers',
                content: 'Zero To Nine helped us become a top food blog in the region. Their SEO and content strategy made our recipes discoverable and engaging for food lovers.'
              },
              services: ['Content SEO', 'Recipe Schema', 'User Experience', 'Social Media Marketing']
            },
            {
              title: 'Resume Template Business Growth',
              client: 'Ready Resume Templates',
              industry: 'Professional Services',
              duration: '6 Months',
              challenge: 'Resume template business with low online visibility and poor conversion rates despite high-quality products.',
              solution: 'Implemented targeted SEO strategy, conversion optimization, and content marketing focused on career and job search keywords.',
              results: [
                { metric: 'Monthly Sales', before: '$820', after: '$4,900', improvement: '500%' },
                { metric: 'Organic Traffic', before: '2,000', after: '15,000', improvement: '650%' },
                { metric: 'Conversion Rate', before: '2.1%', after: '6.8%', improvement: '224%' },
                { metric: 'Customer Reviews', before: '25', after: '180', improvement: '620%' }
              ],
              testimonial: {
                name: 'Ready Resume Team',
                role: 'Business Owners',
                content: 'Zero To Nine helped us dominate the resume template market. Their SEO strategy and conversion optimization have made us the go-to choice for job seekers.'
              },
              services: ['SEO Strategy', 'Conversion Optimization', 'Content Marketing', 'User Experience']
            }
          ].map((caseStudy, index) => (
            <div
              key={caseStudy.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="text-sm font-medium">
                    {caseStudy.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-cyan-100 font-medium">{caseStudy.client}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="mb-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <ChartBarIcon className="w-5 h-5 text-red-500 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <ArrowTrendingUpIcon className="w-5 h-5 text-green-500 mr-2" />
                      Solution
                    </h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <UsersIcon className="w-5 h-5 text-blue-600 mr-2" />
                    Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.results.map((result) => (
                      <div key={result.metric} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-600 mb-2">{result.metric}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Before</p>
                            <p className="text-sm font-semibold text-red-500">{result.before}</p>
                          </div>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                          <div className="text-center">
                            <p className="text-xs text-gray-500">After</p>
                            <p className="text-sm font-semibold text-green-500">{result.after}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Improvement</p>
                            <p className="text-sm font-bold text-blue-600">{result.improvement}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service) => (
                      <span key={service} className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <blockquote className="text-gray-600 italic mb-4">
                    &ldquo;{caseStudy.testimonial.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudy.testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{caseStudy.testimonial.name}</p>
                      <p className="text-sm text-gray-600">{caseStudy.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business grow and achieve remarkable results like these.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 