'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import Link from 'next/link'

const services = [
  {
    name: 'Social Media Automation',
    revenue: 250,
    slug: 'social-media-automation',
    color: '#5ce1e6',
    description: 'Streamline your social media presence with AI-powered automation tools and strategies.',
    benefits: ['24/7 Social Media Management', 'AI-Driven Content Scheduling', 'Analytics & Reporting'],
    features: [
      'Automated post scheduling across platforms',
      'AI-powered content recommendations',
      'Real-time engagement analytics',
      'Competitor analysis tools',
      'Automated response management'
    ]
  },
  {
    name: 'Marketing Consulting',
    revenue: 190,
    slug: 'marketing-consulting',
    color: '#0099f1',
    description: 'Expert guidance to transform your marketing strategy and achieve business growth.',
    benefits: ['Custom Strategy Development', 'Market Analysis', 'Growth Planning'],
    features: [
      'Comprehensive market analysis',
      'Custom marketing strategy',
      'ROI optimization',
      'Brand positioning',
      'Growth roadmap development'
    ]
  },
  {
    name: 'Staff Training',
    revenue: 160,
    slug: 'staff-training',
    color: '#ff3131',
    description: 'Comprehensive training programs to empower your marketing team.',
    benefits: ['Hands-on Workshops', 'Digital Marketing Skills', 'Team Development'],
    features: [
      'Custom training programs',
      'Hands-on workshops',
      'Digital marketing certification',
      'Team building exercises',
      'Performance tracking'
    ]
  },
  {
    name: 'Content Production',
    revenue: 130,
    slug: 'content-production',
    color: '#ffc65b',
    description: 'High-quality content creation services for all your marketing needs.',
    benefits: ['Video Production', 'Graphic Design', 'Copywriting'],
    features: [
      'Professional video production',
      'Graphic design services',
      'Content writing',
      'Animation creation',
      'Brand asset development'
    ]
  },
  {
    name: 'Sponsorship Marketing',
    revenue: 90,
    slug: 'sponsorship-marketing',
    color: '#5ce1e6',
    description: 'Strategic sponsorship opportunities to enhance brand visibility.',
    benefits: ['Event Sponsorships', 'Influencer Partnerships', 'Brand Integration'],
    features: [
      'Event partnership planning',
      'Sponsorship ROI analysis',
      'Brand integration strategy',
      'Partnership management',
      'Impact measurement'
    ]
  },
  {
    name: 'Influencer Marketing',
    revenue: 60,
    slug: 'influencer-marketing',
    color: '#0099f1',
    description: 'Connect with influential voices to amplify your brand message.',
    benefits: ['Influencer Selection', 'Campaign Management', 'Performance Tracking'],
    features: [
      'Influencer identification',
      'Campaign strategy',
      'Content collaboration',
      'Performance analytics',
      'Relationship management'
    ]
  },
  {
    name: 'Content Marketing',
    revenue: 40,
    slug: 'content-marketing',
    color: '#ff3131',
    description: 'Strategic content creation and distribution to engage your audience.',
    benefits: ['Content Strategy', 'SEO Optimization', 'Content Distribution'],
    features: [
      'Content strategy development',
      'SEO optimization',
      'Content calendar planning',
      'Distribution strategy',
      'Performance analysis'
    ]
  },
  {
    name: 'SEO',
    revenue: 25,
    slug: 'seo',
    color: '#ffc65b',
    description: 'Boost your organic search rankings and online visibility.',
    benefits: ['Technical SEO', 'Content Optimization', 'Link Building'],
    features: [
      'Technical SEO audit',
      'Keyword research',
      'On-page optimization',
      'Link building strategy',
      'SEO reporting'
    ]
  },
  {
    name: 'Performance Marketing',
    revenue: 0,
    slug: 'performance-marketing',
    color: '#5ce1e6',
    description: 'Data-driven campaigns that deliver measurable results.',
    benefits: ['PPC Management', 'Conversion Optimization', 'ROI Tracking'],
    features: [
      'PPC campaign management',
      'Conversion rate optimization',
      'A/B testing',
      'Analytics setup',
      'ROI tracking'
    ]
  }
]

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    payload: any
  }>
}

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Service not found</h1>
          <button
            onClick={() => router.push('/services')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Services
          </button>
        </div>
      </div>
    )
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-gray-600">₹{payload[0].value} Cr</p>
          <p className="text-sm text-blue-600 mt-1">Click to view service</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {service.name}
            </h1>
            <p className="text-base text-gray-600 mb-4">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Key Benefits
                </h2>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Features
                </h2>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 