'use client'

import React, { useState, useEffect } from 'react'

// Set a fixed launch date (August 7, 2024)
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

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 px-4">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, index) => (
        <div 
          key={index}
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
        </div>
      ))}
    </div>
  )
} 