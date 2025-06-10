'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChartBarIcon, RocketLaunchIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable results and ROI.',
    icon: ChartBarIcon,
    href: '/services/performance-marketing',
    color: 'bg-brand-turquoise',
    height: '80%',
    textColor: 'text-brand-turquoise'
  },
  {
    name: 'SEO & Content',
    description: 'Boost your organic visibility and engage your audience with compelling content.',
    icon: RocketLaunchIcon,
    href: '/services/seo',
    color: 'bg-brand-blue',
    height: '70%',
    textColor: 'text-brand-blue'
  },
  {
    name: 'Social Media',
    description: 'Build brand awareness and connect with your audience across platforms.',
    icon: MegaphoneIcon,
    href: '/services/social-media',
    color: 'bg-brand-red',
    height: '90%',
    textColor: 'text-brand-red'
  },
  {
    name: 'Consulting',
    description: 'Expert guidance to optimize your marketing strategy and operations.',
    icon: UserGroupIcon,
    href: '/services/consulting',
    color: 'bg-brand-yellow',
    height: '60%',
    textColor: 'text-brand-yellow'
  },
]

export default function ServicesGraphPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">Comprehensive digital marketing solutions for your business</p>
        </div>

        {/* Graph Container */}
        <div className="relative h-[400px] mt-16">
          {/* Y-axis */}
          <div className="absolute left-0 top-0 h-full w-12 flex flex-col justify-between text-sm text-gray-600">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

          {/* Graph Area */}
          <div className="ml-12 h-full flex items-end justify-around">
            {services.map((service) => (
              <div
                key={service.name}
                className="relative group"
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Bar */}
                <Link href={service.href}>
                  <div
                    className={`w-24 ${service.color} transition-all duration-300 cursor-pointer hover:opacity-90`}
                    style={{ height: service.height }}
                  >
                    <service.icon className="absolute top-2 left-1/2 transform -translate-x-1/2 h-6 w-6 text-white" />
                  </div>
                </Link>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
                  {service.name}
                </div>

                {/* Tooltip */}
                {hoveredService === service.name && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 p-2 bg-white rounded-lg shadow-lg text-sm z-10">
                    <div className={`font-semibold ${service.textColor} mb-1`}>{service.name}</div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* X-axis */}
          <div className="absolute left-12 right-0 bottom-0 h-px bg-gray-200" />
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-turquoise transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
} 