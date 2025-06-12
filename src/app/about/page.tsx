'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-brand-turquoise/20 via-white to-brand-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-brand-blue">About</span> Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zero to Nine Marketing is a digital marketing agency specializing in Meta and Google Ads, SEO, GEO, 
              Social Media Automation, Content Automation, Staff Training, and social media content for brands 
              and businesses looking to grow online and increase sales.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-turquoise to-brand-blue opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind Zero to Nine Marketing</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Mohammed Lashkaria */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-brand-turquoise shadow-lg">
                <Image
                  src="/images/mohammed.jpg"
                  alt="Mohammed Lashkaria"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohammed Lashkaria</h3>
              <p className="text-brand-blue font-semibold mb-4">CEO & Co-founder</p>
              <p className="text-gray-600 text-center max-w-md">
                A visionary leader with extensive experience in digital growth and scaling businesses.
                Mohammed's expertise in strategic marketing has helped numerous businesses achieve 
                remarkable online success.
              </p>
            </motion.div>

            {/* Mo. Faeem Lashkaria */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-brand-blue shadow-lg">
                <Image
                  src="/images/faeem-lashkaria.jpg"
                  alt="Mo. Faeem Lashkaria"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mo. Faeem Lashkaria</h3>
              <p className="text-brand-turquoise font-semibold mb-4">Co-founder & Technical Lead</p>
              <p className="text-gray-600 text-center max-w-md">
                With nearly a decade of experience in website development and SEO since 2014,
                Faeem brings technical excellence and deep understanding of search engine dynamics
                to every project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-brand-red">Our</span> Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in November 2024, Zero to Nine Marketing was born out of a real need. Mohammed Lashkaria 
              noticed a friend struggling to build an online presence for his brand and stepped in to help — 
              leveraging his experience in digital growth and scaling. Mo. Faeem Lashkaria, has been in website 
              development and SEO since 2014. Together, they realized their combined skills could help many 
              businesses succeed online, which led to the creation of the agency.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-brand-yellow">Our</span> Approach
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Zero to Nine Marketing, we focus on delivering high-quality work backed by smart automation. 
              What sets us apart is our results-driven and personalized approach. Every business is different — 
              so we don't follow templates. We craft unique strategies tailored to each client's goals, helping 
              them scale by increasing sales, onboarding new clients, and freeing up their time to focus on 
              innovation and product development.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
              <span className="text-brand-turquoise">Our</span> Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">Comprehensive solutions for your digital growth</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Social Media Marketing",
                  description: "We manage and grow your brand's presence across platforms like Instagram, Facebook, and more — driving engagement, leads, and sales.",
                  color: "brand-blue"
                },
                {
                  title: "Content Marketing",
                  description: "We create strategic content plans tailored to your audience, helping you build trust, authority, and consistent traffic.",
                  color: "brand-turquoise"
                },
                {
                  title: "SEO",
                  description: "We optimize your website to rank higher in search engines and attract high-quality organic traffic that converts.",
                  color: "brand-red"
                },
                {
                  title: "Content Production",
                  description: "From graphics to video editing and reels, we handle all aspects of content creation to keep your brand sharp and engaging.",
                  color: "brand-yellow"
                },
                {
                  title: "Content Management",
                  description: "We automate and schedule your content across platforms, so you stay consistent without the manual work.",
                  color: "brand-blue"
                },
                {
                  title: "Staff Training & Process Automation",
                  description: "We train your teams and streamline business processes through automation — saving time and boosting efficiency.",
                  color: "brand-turquoise"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 hover:-translate-y-1"
                  style={{ borderColor: `var(--${service.color})` }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            <span className="text-brand-red">Our</span> Culture
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            We're a small, focused, and transparent team that's deeply committed to results. What makes us 
            different is our honest approach — we never take on more clients than we can handle, and we never 
            make unrealistic promises just to close a deal. We love working with businesses that bring new 
            ideas to the table, and our team brings energy, strategy, and genuine excitement to every project 
            we take on.
          </p>
        </motion.div>
      </div>

      {/* Global Presence */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-turquoise text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Global Presence</h2>
            <p className="text-lg leading-8">
              Proudly based in Surat, India, serving clients across the US, UK, Canada, Australia, UAE, and India.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CEO Quote */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <blockquote className="text-2xl font-medium italic text-gray-900 max-w-3xl mx-auto">
            "We're not just marketers — we're growth partners. From strategy to execution, we help businesses 
            turn ideas into impact, and ambition into achievement."
          </blockquote>
          <p className="mt-6 text-lg font-semibold text-brand-blue">— Mohammed Lashkaria, CEO & Co-founder</p>
        </motion.div>
      </div>
    </div>
  )
} 