import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Shalavya Agrawal',
    default: 'Shalavya Agrawal - Data Scientist.',
  },
  description:
    'I’m Shalavya, a data scientist from India. I focus on creating smart, reliable, and scalable AI/ML systems.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
