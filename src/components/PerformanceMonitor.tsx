'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if web vitals are available
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
              // You can send this to your analytics service
              if (entry.startTime > 1800) {
                console.warn('FCP is above 1.8s threshold:', entry.startTime);
              }
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.initiatorType === 'img' && resourceEntry.duration > 1000) {
              console.warn('Slow image load:', resourceEntry.name, resourceEntry.duration);
            }
          }
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => {
        observer.disconnect();
        resourceObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
