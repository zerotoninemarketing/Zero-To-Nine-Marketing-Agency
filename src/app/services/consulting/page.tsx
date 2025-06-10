'use client'

import React from 'react'
import { LightBulbIcon, PresentationChartLineIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Strategy Development',
    description: 'Custom marketing strategies aligned with your business goals and market opportunities.',
    icon: LightBulbIcon,
  },
  {
    name: 'Performance Analysis',
    description: 'In-depth analysis of your marketing performance and competitive landscape.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Team Training',
    description: 'Comprehensive training and skill development for your marketing team.',
    icon: UserGroupIcon,
  },
  {
    name: 'Implementation Support',
    description: 'Hands-on guidance and support in executing marketing initiatives.',
    icon: WrenchScrewdriverIcon,
  },
]

const expertise = [
  { area: 'Digital Marketing', level: 'Expert', years: '15+' },
  { area: 'Brand Strategy', level: 'Advanced', years: '12+' },
  { area: 'Market Research', level: 'Expert', years: '10+' },
  { area: 'Analytics', level: 'Advanced', years: '8+' },
]

const metrics = [
  { id: 1, name: 'Client Success Rate', value: '95%', description: 'Goals achieved' },
  { id: 2, name: 'ROI Improvement', value: '250%', description: 'Average increase' },
  { id: 3, name: 'Client Retention', value: '4.8', description: 'Out of 5 stars' },
]

export default function ConsultingPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Marketing Consulting
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Transform your marketing operations with expert guidance and strategic consulting. Our experienced consultants help businesses optimize their marketing strategies, improve team performance, and achieve sustainable growth.
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
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-yellow text-white">
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

      {/* Expertise Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Expertise</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item.area}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.area}</h3>
              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="text-sm text-gray-500">Experience Level</dt>
                  <dd className="text-xl font-semibold text-brand-yellow">{item.level}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Years Experience</dt>
                  <dd className="text-xl font-semibold text-brand-yellow">{item.years}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Consulting Process</h2>
        <div className="mt-8 relative">
          <div className="absolute top-0 left-8 h-full w-px bg-gray-200" />
          <div className="relative space-y-8">
            {[
              { step: 1, title: 'Discovery', description: 'Understanding your business, goals, and challenges' },
              { step: 2, title: 'Analysis', description: 'In-depth analysis of your current marketing performance' },
              { step: 3, title: 'Strategy', description: 'Developing customized solutions and action plans' },
              { step: 4, title: 'Implementation', description: 'Supporting the execution of recommended strategies' },
              { step: 5, title: 'Optimization', description: 'Continuous monitoring and improvement of results' },
            ].map((item) => (
              <div key={item.step} className="relative flex items-start">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-white">
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
                <span className="text-3xl font-semibold tracking-tight text-brand-yellow">
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
        <div className="rounded-2xl bg-brand-yellow/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to Transform Your Marketing?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a free consultation to discuss how we can help improve your marketing performance.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-yellow px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-turquoise transition-colors"
            >
              Schedule Consultation
              <LightBulbIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 