'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react'

type Result = {
  client: string
  metric: string
  before: string
  after: string
  growth: string
  logo: string
  industry: string
}

type Testimonial = {
  name: string
  company: string
  rating: number
  text: string
}

type PricingPlan = {
  name: string
  price: string
  period: string
  popular: boolean
  features: string[]
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [state, handleSubmit] = useForm('mdkqbwgv')

  const results: Result[] = [
    {
      client: 'iOrders',
      metric: 'Organic Traffic Growth',
      before: '2,500 visits/month',
      after: '18,000 visits/month',
      growth: '+620%',
      logo: '/images/client-logos/iorders-logo.png.png',
      industry: 'Restaurant SaaS',
    },
    {
      client: 'MSOffice Geek',
      metric: 'Organic Traffic & Rankings',
      before: '3,500 visits/month',
      after: '28,000 visits/month',
      growth: '+700%',
      logo: '/images/client-logos/msoffice-geek-logo.png.webp',
      industry: 'Software Solutions',
    },
    {
      client: 'Excel Data Pro',
      metric: 'HubSpot Backlink & Traffic',
      before: 'Low visibility',
      after: 'HubSpot featured + 450% traffic',
      growth: '+450%',
      logo: '/images/client-logos/excel-data-pro-logo.png.jpg',
      industry: 'B2B SaaS',
    },
    {
      client: 'Ready Resume Templates',
      metric: 'Organic Traffic & Sales',
      before: '2,000 visits/month',
      after: '15,000 visits/month',
      growth: '+650%',
      logo: '/images/client-logos/ready-resume-logo.png.png',
      industry: 'Content Business',
    },
    {
      client: 'Flight Path Travel',
      metric: 'SEO Rankings & Visibility',
      before: 'Page 3-4 rankings',
      after: 'Top 3 positions',
      growth: '+380%',
      logo: '/images/client-logos/flight-path-logo.png.png',
      industry: 'Travel Agency',
    },
    {
      client: 'South District Group',
      metric: 'Local SEO & Rankings',
      before: 'Limited local presence',
      after: 'Top local rankings',
      growth: '+420%',
      logo: '/images/client-logos/south-district-logo.png.png',
      industry: 'Debt Collection',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Curvylane Team',
      company: 'Fashion E-commerce',
      rating: 5,
      text: 'Zero To Nine helped us increase our online sales by 467% in just 8 months. Their comprehensive marketing approach and expertise in the UAE market is unmatched.',
    },
    {
      name: 'Boketto Management',
      company: 'Restaurant Chain',
      rating: 5,
      text: 'The team at Zero To Nine transformed our local presence completely. Our restaurants now rank #1 in local search and our online orders increased by 380%.',
    },
    {
      name: 'Caro Jewels Team',
      company: 'Luxury Jewelry',
      rating: 5,
      text: 'Working with Zero To Nine was a game changer for our luxury brand. Their premium strategies helped us increase our average order value by 213%.',
    },
  ]

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$549',
      period: 'per month',
      popular: false,
      features: [
        '15 Content Pages (SEO & GEO Optimized)',
        'ChatGPT + Perplexity Optimization',
        'Blog Posts & Service Pages',
        'Basic Backlink Building',
        'Monthly SEO & GEO Ranking Reports',
        'Competitor Analysis',
      ],
    },
    {
      name: 'Growth',
      price: '$849',
      period: 'per month',
      popular: true,
      features: [
        '30 Content Pages (SEO & GEO Optimized)',
        'Full AI Search Optimization (ChatGPT, Perplexity, Gemini, Meta AI)',
        'Priority Content Creation',
        'Advanced Backlink Strategy',
        'Bi-weekly SEO & GEO Rankings',
        'Dedicated Account Manager',
        'Competitive Analysis Dashboard',
        'Schema Markup Optimization',
      ],
    },
    {
      name: 'Enterprise',
      price: '$1,699',
      period: 'per month',
      popular: false,
      features: [
        'Unlimited Content Pages (SEO & GEO Optimized)',
        'Complete AI Ecosystem Dominance',
        'Premium Content Strategy',
        'High-Authority Backlinks',
        'Weekly SEO & GEO Reporting',
        'Dedicated SEO & GEO Manager',
        'Custom AI Training Data',
        'Priority Support 24/7',
        'Quarterly Strategy Sessions',
        'Flexible Pricing After Setup',
      ],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % results.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [results.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % results.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + results.length) % results.length)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 The Future of SEO & GEO is Here
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Want to Rank in <span className="text-yellow-300">ChatGPT</span>,{' '}
                <span className="text-green-300">Perplexity</span> & <span className="text-blue-300">Gemini</span>?
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Traditional SEO has evolved. AI search engines are the new battleground. We dominate ChatGPT, Perplexity,
                Gemini, and Meta AI so your brand becomes the #1 answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consult"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center justify-center"
                >
                  Get Free SEO & GEO Audit <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="#pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition inline-flex items-center justify-center"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/20 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 relative">
                      <Image
                        src="/images/chatgpt-logo.jpg"
                        alt="ChatGPT logo"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">ChatGPT</div>
                      <div className="text-sm text-blue-200">Ranking #1 for 847 queries</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/20 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 relative">
                      <Image
                        src="/images/perplexity-ai-logo.jpg"
                        alt="Perplexity logo"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Perplexity</div>
                      <div className="text-sm text-blue-200">Featured in 623 answers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/20 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 relative">
                      <Image
                        src="/images/gemini-google-logo.jpg"
                        alt="Gemini logo"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Gemini</div>
                      <div className="text-sm text-blue-200">Top 3 for 512 searches</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amplification Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              While You&apos;re <span className="text-red-500">Invisible</span>, Your Competitors Are{' '}
              <span className="text-green-400">Winning</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day without AI search optimization means lost customers, revenue, and market share. The cost of
              waiting? Catastrophic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-900/30 border border-red-500 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">93%</div>
              <div className="text-gray-300">of consumers use AI search before making purchase decisions</div>
            </div>
            <div className="bg-red-900/30 border border-red-500 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">$847</div>
              <div className="text-gray-300">average daily revenue lost per business not ranking in AI search</div>
            </div>
            <div className="bg-red-900/30 border border-red-500 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">76%</div>
              <div className="text-gray-300">of your potential customers never see you if you&apos;re not in AI results</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Our Clientele Results</h3>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
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

      {/* Results Slider */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real Results from Real Businesses</h2>
            <p className="text-xl text-gray-600">See how we&apos;ve transformed our clients&apos; AI search presence</p>
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 shadow-xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-20 bg-white rounded-lg p-4 shadow-md flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={results[currentSlide].logo}
                    alt={`${results[currentSlide].client} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{results[currentSlide].client}</h3>
              <div className="text-sm text-gray-500 mb-2">{results[currentSlide].industry}</div>
              <div className="text-blue-600 font-semibold text-lg mb-8">{results[currentSlide].metric}</div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-gray-500 text-sm mb-2">Before</div>
                  <div className="text-2xl font-bold text-red-600">{results[currentSlide].before}</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-6 shadow-md text-white flex items-center justify-center">
                  <div className="text-4xl font-bold">{results[currentSlide].growth}</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-gray-500 text-sm mb-2">After</div>
                  <div className="text-2xl font-bold text-green-600">{results[currentSlide].after}</div>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
              aria-label="Previous result"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
              aria-label="Next result"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {results.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-3 rounded-full transition ${idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transparent SEO & GEO Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include content creation, optimization, and
              backlink building with SEO & GEO metrics tracking. Flexible pricing available after initial setup.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-yellow-400'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle
                        className={`mr-3 flex-shrink-0 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`}
                        size={20}
                      />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                    plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">30-day results guarantee • No long-term contracts • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consult" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate AI Search Results?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Get a free SEO & GEO consultation. Our team will analyze your current visibility and show you exactly how to rank #1
            in ChatGPT, Perplexity, and Gemini.
          </p>

          {state.succeeded ? (
            <div className="bg-green-500 text-white p-8 rounded-xl">
              <CheckCircle size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-lg">Our team will get in touch with you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-200 text-sm" />
                <input
                  id="website"
                  type="url"
                  name="website"
                  placeholder="Enter your website URL"
                  required
                  className="px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                />
                <ValidationError prefix="Website" field="website" errors={state.errors} className="text-red-200 text-sm" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Submitting...' : 'Get Free Consult'}
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No credit card required • 100% free analysis • Response within 24 hours
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}