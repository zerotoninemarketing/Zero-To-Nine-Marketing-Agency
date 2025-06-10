'use client'

import React from 'react'
import { ArrowTrendingUpIcon, ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data-Driven Campaigns',
    description: 'Leverage advanced analytics and real-time data to optimize your marketing campaigns for maximum ROI.',
    icon: ChartBarIcon,
  },
  {
    name: 'Performance Tracking',
    description: 'Monitor key metrics and KPIs in real-time with our advanced tracking and reporting dashboard.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Continuous Optimization',
    description: 'Ongoing campaign optimization based on performance data and market trends.',
    icon: ArrowTrendingUpIcon,
  },
]

const metrics = [
  { id: 1, name: 'Average ROI', value: '320%', description: 'Return on marketing investment' },
  { id: 2, name: 'Conversion Rate', value: '15%', description: 'Above industry average' },
  { id: 3, name: 'Client Retention', value: '95%', description: 'Satisfaction rate' },
]

export default function PerformanceMarketingPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Performance Marketing
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Drive measurable results with our data-driven performance marketing strategies. We help businesses achieve their marketing goals through targeted campaigns, continuous optimization, and transparent reporting.
        </p>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Approach</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-turquoise text-white">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
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
                <span className="text-3xl font-semibold tracking-tight text-brand-turquoise">
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
        <div className="rounded-2xl bg-brand-turquoise/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to Boost Your Marketing Performance?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started with a free consultation and discover how our performance marketing services can help grow your business.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-turquoise px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-blue transition-colors"
            >
              Schedule a Consultation
              <ArrowTrendingUpIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 