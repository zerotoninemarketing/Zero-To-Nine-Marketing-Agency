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
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="text-brand-blue">Dominate Search Results</span> <span className="text-gray-900">with Proven SEO</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We've generated 100.8M+ impressions and helped 50+ businesses achieve 300%+ organic traffic growth. 
                Your success story starts here.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-gradient-to-r from-[#5ce1e6] to-[#0099f1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                >
                  Get Free SEO Audit
                </Link>
                <Link href="/case-studies" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#0099f1] transition-colors">
                  View Case Studies <span aria-hidden="true">→</span>
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

      {/* Google Search Console Results */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our SEO Results 
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've generated millions of impressions and helped clients dominate search results
            </p>
          </div>
          
            {/* GSC Screenshots */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Google Search Console Results
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* GSC Performance Overview */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">Performance Overview</h4>
                  <div className="bg-white rounded-lg p-4">
                    <img 
                      src="/images/gsc-screenshots/gsc-performance.jpg" 
                      alt="Google Search Console Performance Overview"
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                
                {/* GSC Search Analytics */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">Search Analytics</h4>
                  <div className="bg-white rounded-lg p-4">
                    <img 
                      src="/images/gsc-screenshots/gsc-analytics.jpg" 
                      alt="Google Search Console Search Analytics"
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          
          {/* Metrics Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">18.8M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Total Impressions</div>
              <div className="text-sm text-gray-600">Generated across one single 
                client campaign</div>
              <div className="text-xs text-gray-500 mt-2">Last 12 months</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.5M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Recent Impressions</div>
              <div className="text-sm text-gray-600">Accelerated growth for one of our clients in recent months</div>
              <div className="text-xs text-gray-500 mt-2">Last 3 months</div>
            </div>
          </div>
          
          {/* Authority Proof Section - Moved Below Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Featured Backlinks & Authority
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">HubSpot</p>
                  <p className="text-sm text-gray-600">MSOffice Geek featured</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Foretec DS</p>
                  <p className="text-sm text-gray-600">MSOffice Geek coverage</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Excel Data Pro</p>
                  <p className="text-sm text-gray-600">Domain Authority 20+</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">50+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Client Success</p>
                  <p className="text-sm text-gray-600">Across 15+ industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Marketing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance Marketing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond SEO, we deliver exceptional results through targeted paid advertising campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meta Ads Performance</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average CTR</span>
                  <span className="font-semibold text-green-600">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-blue-600">8.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROAS</span>
                  <span className="font-semibold text-purple-600">4.2x</span>
                </div>
              </div>
              
               {/* Meta Ads Results */}
               <div className="bg-white rounded-lg p-4">
                 <img 
                   src="/images/ad-results/meta-ads-dashboard.jpg" 
                   alt="Meta Ads Dashboard Performance"
                   className="max-w-full h-auto max-h-64 md:max-h-72 object-contain mx-auto rounded-lg shadow-sm"
                 />
               </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Ads Performance</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quality Score</span>
                  <span className="font-semibold text-green-600">8.7/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Click-Through Rate</span>
                  <span className="font-semibold text-blue-600">4.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost per Conversion</span>
                  <span className="font-semibold text-purple-600">$24.50</span>
                </div>
              </div>
              
              {/* Google Ads Results */}
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="/images/ad-results/google-ads-dashboard.png" 
                  alt="Google Ads Dashboard Performance"
                  className="max-w-full h-auto max-h-64 md:max-h-72 object-contain mx-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Our performance marketing campaigns consistently deliver exceptional ROI and measurable business growth
            </p>
            <Link href="/services/performance-marketing" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Performance Marketing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've helped businesses across industries achieve remarkable growth through strategic SEO
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              { 
                name: 'iOrders', 
                type: 'Restaurant SaaS',
                description: 'Restaurant management software for Canada & US',
                logo: '/images/client-logos/iorders-logo.png.png',
                url: 'https://www.iorders.ca/'
              },
              { 
                name: 'South District Group', 
                type: 'Debt Collection',
                description: 'Professional debt collection services',
                logo: '/images/client-logos/south-district-logo.png.png',
                url: 'https://www.southdistrictgroup.com/'
              },
              { 
                name: 'Excel Data Pro', 
                type: 'B2B SaaS',
                description: 'Excel automation & data solutions',
                logo: '/images/client-logos/excel-data-pro-logo.png.jpg',
                url: 'https://exceldatapro.com/'
              },
              { 
                name: 'MSOffice Geek', 
                type: 'Software Solutions',
                description: 'Microsoft Office optimization tools',
                logo: '/images/client-logos/msoffice-geek-logo.png.webp',
                url: 'https://msofficegeek.com/'
              },
              { 
                name: 'Ready Resume Templates', 
                type: 'Content Business',
                description: 'Professional resume templates',
                logo: '/images/client-logos/ready-resume-logo.png.png',
                url: 'https://readyresumetemplates.com/'
              },
              { 
                name: 'Flight Path Travel', 
                type: 'Travel Agency',
                description: 'International travel services',
                logo: '/images/client-logos/flight-path-logo.png.png',
                url: 'https://www.flightpathtravel.in/'
              }
            ].map((brand) => (
              <div key={brand.name} className="text-center group flex flex-col items-center">
                {/* Clickable Client Logo */}
                <a 
                  href={brand.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-24 h-16 mb-3 group-hover:scale-105 transition-transform flex items-center justify-center"
                  title={`Visit ${brand.name} website`}
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hidden">
                    <span className="text-white font-bold text-xs text-center leading-tight">
                      {brand.name.split(' ').map(word => word.slice(0, 4)).join('\n')}
                    </span>
                  </div>
                </a>
                <p className="text-sm font-medium text-gray-900 mb-1 text-center">{brand.name}</p>
                <p className="text-xs text-gray-500 mb-1 text-center">{brand.type}</p>
                <p className="text-xs text-gray-400 leading-tight text-center">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>    

      {/* SEO Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SEO Success Stories
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from businesses that transformed their online presence with our SEO strategies
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce SEO',
                client: 'iOrders',
                metrics: [
                  { label: 'Organic Traffic', value: '620%', color: 'text-green-600' },
                  { label: 'Monthly Sales', value: '467%', color: 'text-blue-600' },
                  { label: 'Keyword Rankings', value: 'Top 10', color: 'text-purple-600' }
                ],
                description: 'Comprehensive SEO strategy including technical optimization, content creation, and link building.'
              },
              {
                title: 'Local SEO',
                client: 'South District',
                metrics: [
                  { label: 'Local Rankings', value: 'Top 3', color: 'text-green-600' },
                  { label: 'Online Orders', value: '380%', color: 'text-blue-600' },
                  { label: 'Google My Business', value: 'Optimized', color: 'text-purple-600' }
                ],
                description: 'Local SEO optimization with Google My Business management and citation building.'
              },
              {
                title: 'B2B SaaS SEO',
                client: 'Excel Data Pro',
                metrics: [
                  { label: 'HubSpot Backlink', value: 'Achieved', color: 'text-green-600' },
                  { label: 'Organic Traffic', value: '450%', color: 'text-blue-600' },
                  { label: 'Lead Generation', value: '300%', color: 'text-purple-600' }
                ],
                description: 'B2B content strategy with high-authority backlink building and technical SEO.'
              }
            ].map((caseStudy) => (
              <div key={caseStudy.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-500">{caseStudy.client}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{metric.label}:</span>
                      <span className={`font-semibold ${metric.color}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-600">{caseStudy.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              View All Case Studies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent SEO Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include content creation, optimization, and backlink building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: 'Starter',
                price: '$550',
                pages: '15 Content Pages',
                features: ['Blog Posts & Service Pages', 'Backlink Building', 'Monthly Reporting']
              },
              {
                name: 'Growth',
                price: '$850',
                pages: '25 Content Pages',
                features: ['Priority Content Creation', 'Advanced Backlink Strategy', 'Bi-weekly Reporting', 'Competitor Analysis'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$1,699',
                pages: '50 Content Pages',
                features: ['Premium Content Strategy', 'High-Authority Backlinks', 'Weekly Reporting', 'Dedicated SEO Manager']
              }
            ].map((plan) => (
              <div key={plan.name} className={`bg-white border-2 rounded-xl p-8 relative ${plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-sm text-gray-600 mb-6">per month</div>
                  
                  <div className="text-sm font-semibold text-gray-900 mb-4">{plan.pages}</div>
                  
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
      </div>

          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Detailed Pricing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              30-day results guarantee • No long-term contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real results from real businesses we've helped grow.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Curvylane Team',
                role: 'Fashion E-commerce',
                content: 'Zero To Nine helped us increase our online sales by 467% in just 8 months. Their comprehensive marketing approach and expertise in the UAE market is unmatched.',
                image: '/images/testimonial1.jpg',
                rating: 5
              },
              {
                name: 'Boketto Management',
                role: 'Restaurant Chain',
                content: 'The team at Zero To Nine transformed our local presence completely. Our restaurants now rank #1 in local search and our online orders increased by 380%.',
                image: '/images/testimonial2.jpg',
                rating: 5
              },
              {
                name: 'Caro Jewels Team',
                role: 'Luxury Jewelry',
                content: 'Working with Zero To Nine was a game-changer for our luxury brand. Their premium marketing strategies helped us increase our average order value by 213%.',
                image: '/images/testimonial3.jpg',
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5ce1e6] to-[#0099f1] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 50+ businesses that have transformed their online presence with our proven SEO strategies. 
            Get started with a free technical SEO audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free SEO Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            30-day results guarantee • No long-term contracts • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
} 