# Marketing Agency Website

A modern, responsive website for a digital marketing agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, professional design with easy navigation
- Service pages detailing each marketing service
- Marketing API Data Audit Tool with three pricing tiers
- Contact form for inquiries and consultation requests
- Responsive design for all devices
- Modern UI components using Headless UI and Heroicons

## Services

- Performance Marketing
- SEO
- Staff Training
- Content Marketing
- Content Production
- Sponsorship Marketing
- Influencer Marketing
- Marketing Consulting
- Social Media Automation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Headless UI
- Heroicons
- Stripe for payments
- Chart.js for data visualization
- Next Auth for authentication

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
cd marketing-agency
npm install
\`\`\`

3. Create a .env.local file with your environment variables:
\`\`\`
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and API handlers
- `/src/styles` - Global styles and Tailwind configuration

## SEO and Sitemap

The website includes automatic sitemap generation and robots.txt files for better SEO:

- **Sitemap**: Automatically generated at `/sitemap.xml` with all static routes and blog posts
- **Robots.txt**: Available at `/robots.txt` with proper crawling rules
- **Blog Integration**: Automatically includes all WordPress blog posts in the sitemap
- **Environment Variables**: Set `NEXT_PUBLIC_SITE_URL` and `WORDPRESS_API_URL` in your environment variables

### Environment Variables for SEO

Add these to your `.env.local` file:

\`\`\`bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 