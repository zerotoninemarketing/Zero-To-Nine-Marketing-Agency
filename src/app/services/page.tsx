'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts'
import { useRouter } from 'next/navigation'

interface Service {
  name: string
  revenue: number
  color: string
}

const services: Service[] = [
  {
    name: 'Social Media Automation',
    revenue: 250,
    color: '#5ce1e6'
  },
  {
    name: 'Marketing Consulting',
    revenue: 190,
    color: '#0099f1'
  },
  {
    name: 'Staff Training',
    revenue: 160,
    color: '#ff3131'
  },
  {
    name: 'Content Production',
    revenue: 130,
    color: '#ffc65b'
  },
  {
    name: 'Sponsorship Marketing',
    revenue: 90,
    color: '#5ce1e6'
  },
  {
    name: 'Influencer Marketing',
    revenue: 60,
    color: '#0099f1'
  },
  {
    name: 'Content Marketing',
    revenue: 40,
    color: '#ff3131'
  },
  {
    name: 'SEO',
    revenue: 25,
    color: '#ffc65b'
  },
  {
    name: 'Performance Marketing',
    revenue: 0,
    color: '#5ce1e6'
  }
]

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
  }>
}

export default function ServicesPage() {
  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-gray-600">₹{payload[0].value} Cr</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Our Services & Impact
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Explore our range of marketing solutions
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={services}
                margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide={true} />
                <YAxis label={{ value: 'Revenue Generated (in Cr)', angle: -90, position: 'insideLeft', style: { fontSize: '0.875rem' } }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="revenue">
                  {services.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Responsive Service List for Mobile */}
          <div className="block lg:hidden mt-8">
            <div className="overflow-x-auto">
              <div className="flex gap-4 min-w-max">
                {services.map((service) => (
                  <div key={service.name} className="flex flex-col items-center bg-gray-50 rounded-lg p-3 min-w-[140px] shadow-sm border">
                    <span className="font-semibold text-gray-900 text-sm text-center">{service.name}</span>
                    <span className="text-lg font-bold mt-2" style={{ color: service.color }}>{service.revenue} Cr</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 