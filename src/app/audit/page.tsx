'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LAUNCH_DATE = new Date('2024-08-07T00:00:00Z').getTime()

const calculateTimeLeft = () => {
  const now = new Date().getTime()
  const difference = LAUNCH_DATE - now
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }
  
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

export default function AuditPage() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-turquoise to-brand-blue opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              <span className="text-brand-blue">Marketing Audit Tool</span>
              <br />
              <span className="text-3xl sm:text-4xl font-medium mt-4 block">Coming Soon</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We are building a powerful tool to analyze your marketing performance and provide 
              actionable insights. Get ready for a game-changing addition to your marketing arsenal.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 px-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-turquoise/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    {isClient ? (
                      <div className="text-4xl sm:text-5xl font-bold text-brand-blue mb-2">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    ) : (
                      <div className="text-4xl sm:text-5xl font-bold text-brand-blue mb-2">00</div>
                    )}
                    <div className="text-sm text-gray-500 font-medium">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features Preview */}
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  title: 'Performance Analysis',
                  description: 'Get detailed insights into your marketing campaigns performance across all channels.'
                },
                {
                  title: 'Competitor Research',
                  description: "Analyze your competitors' strategies and find opportunities to outperform them."
                },
                {
                  title: 'AI-Powered Recommendations',
                  description: 'Receive personalized suggestions to improve your marketing ROI.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Notification Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Notified at Launch</h3>
              <form className="max-w-md mx-auto">
                <div className="flex gap-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-turquoise focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition-colors"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-blue to-brand-turquoise opacity-20 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </>
  )
} 