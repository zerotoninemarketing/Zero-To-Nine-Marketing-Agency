'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChartBarIcon, RocketLaunchIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable results and ROI.',
    icon: ChartBarIcon,
    href: '/services/performance-marketing',
    color: 'bg-[#5ce1e6]',
    stats: { value: '320%', label: 'ROI' }
  },
  {
    name: 'SEO & Content',
    description: 'Boost your organic visibility and engage your audience with compelling content.',
    icon: RocketLaunchIcon,
    href: '/services/seo',
    color: 'bg-[#0099f1]',
    stats: { value: '180%', label: 'Traffic' }
  },
  {
    name: 'Social Media & Influencer',
    description: 'Build brand awareness and connect with your audience across platforms.',
    icon: MegaphoneIcon,
    href: '/services/social-media',
    color: 'bg-[#ff3131]',
    stats: { value: '10K+', label: 'Reach' }
  },
  {
    name: 'Marketing Consulting',
    description: 'Expert guidance to optimize your marketing strategy and operations.',
    icon: UserGroupIcon,
    href: '/services/consulting',
    color: 'bg-[#ffc65b]',
    stats: { value: '95%', label: 'Success' }
  },
]

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentServiceIndex = services.findIndex(service => service.href === pathname)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Side - Service Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <div className="space-y-1">
                {services.map((service, index) => {
                  const isActive = service.href === pathname
                  const isPast = index < currentServiceIndex
                  const height = `${25 * (index + 1)}%`

                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`relative block group ${isActive ? 'pointer-events-none' : ''}`}
                    >
                      <div className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                        <div className="relative h-24 w-1 mr-3">
                          <div
                            className={`absolute bottom-0 w-full transition-all duration-500 ${
                              isActive || isPast ? service.color : 'bg-gray-200'
                            }`}
                            style={{ height }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            {React.createElement(service.icon, {
                              className: `h-5 w-5 ${
                                isActive ? `${service.color} text-white` : 'text-gray-400'
                              } rounded p-1`
                            })}
                            <span className={`ml-2 text-sm font-medium ${
                              isActive ? 'text-gray-900' : 'text-gray-600'
                            }`}>
                              {service.name}
                            </span>
                          </div>
                          {isActive && (
                            <div className="mt-1 flex items-baseline">
                              <span className="text-2xl font-bold text-[#0099f1]">{service.stats.value}</span>
                              <span className="ml-2 text-sm text-gray-500">{service.stats.label}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Content Area */}
          <main className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 