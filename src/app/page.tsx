'use client'

import React from 'react'
import Link from 'next/link'
import { ChartBarIcon, RocketLaunchIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Chart */}
      <div className="relative isolate overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5ce1e6] to-[#0099f1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#5ce1e6] to-[#0099f1]">
                Transform Your Digital Presence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Zero To Nine Marketing & Consultancy helps businesses achieve exceptional growth through data-driven strategies and innovative solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-gradient-to-r from-[#5ce1e6] to-[#0099f1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#0099f1] transition-colors">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Animated Growth Chart */}
            <div className="relative h-[400px] bg-white rounded-2xl shadow-xl p-6">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10" />
              {/* Grid Lines */}
              <div className="absolute inset-x-6 inset-y-12 grid grid-rows-4 gap-0">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-t border-gray-100" />
                ))}
              </div>
              {/* Y-axis labels */}
              <div className="absolute left-0 top-12 h-[calc(100%-48px)] flex flex-col justify-between">
                {[100, 75, 50, 25, 0].map((value) => (
                  <span key={value} className="text-sm text-gray-500">{value}%</span>
                ))}
              </div>
              {/* Growth Line */}
              <div className="absolute bottom-12 left-12 right-6 h-[calc(100%-48px)]">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M0 336 C 100 300, 200 100, 400 50"
                    className="stroke-[#5ce1e6] stroke-2 fill-none"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      animation: 'draw 2s ease-out forwards'
                    }}
                  />
                  <style jsx>{`
                    @keyframes draw {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </svg>
                {/* Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5ce1e6]/10 to-transparent" style={{ clipPath: 'polygon(0 100%, 0 80%, 25% 60%, 50% 30%, 100% 15%, 100% 100%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {[
              { value: '320%', label: 'Average ROI', color: 'from-[#5ce1e6] to-[#4ac8cd]' },
              { value: '180%', label: 'Traffic Growth', color: 'from-[#0099f1] to-[#0081cc]' },
              { value: '90%', label: 'Engagement Rate', color: 'from-[#ff3131] to-[#e62c2c]' },
              { value: '60%', label: 'Client Growth', color: 'from-[#ffc65b] to-[#ffb327]' },
            ].map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className={`order-first text-3xl font-semibold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent sm:text-5xl`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer end-to-end digital marketing services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {[
            {
              name: 'Performance Marketing',
              description: 'Data-driven campaigns that deliver measurable results and ROI.',
              icon: ChartBarIcon,
              color: 'bg-[#5ce1e6]',
              gradient: 'from-[#5ce1e6] to-[#4ac8cd]',
              href: '/services'
            },
            {
              name: 'SEO & Content',
              description: 'Boost your organic visibility and engage your audience with compelling content.',
              icon: RocketLaunchIcon,
              color: 'bg-[#0099f1]',
              gradient: 'from-[#0099f1] to-[#0081cc]',
              href: '/services'
            },
            {
              name: 'Social Media',
              description: 'Build brand awareness and connect with your target audience effectively.',
              icon: MegaphoneIcon,
              color: 'bg-[#ff3131]',
              gradient: 'from-[#ff3131] to-[#e62c2c]',
              href: '/services'
            },
            {
              name: 'Marketing Consulting',
              description: 'Strategic guidance to help your business grow and succeed.',
              icon: UserGroupIcon,
              color: 'bg-[#ffc65b]',
              gradient: 'from-[#ffc65b] to-[#ffb327]',
              href: '/services'
            },
          ].map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="group relative rounded-2xl p-6 text-sm leading-6 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className={`rounded-lg bg-gradient-to-r ${feature.gradient} p-2 w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(feature.icon, { className: "h-6 w-6 text-white" })}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-gray-600">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-gray-500">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate bg-gray-50">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5ce1e6] to-[#0099f1] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Let's discuss how we can help you achieve your digital marketing goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gradient-to-r from-[#5ce1e6] to-[#0099f1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#0099f1] transition-colors">
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 