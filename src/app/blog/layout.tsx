import React from 'react'

export const metadata = {
  title: 'Blog | Zero To Nine Marketing & Consultancy',
  description: 'Stay updated with the latest marketing insights, trends, and strategies through our blog.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 