import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Full Stack Software Engineer',
  description: 'Full Stack Software Engineer Portfolio - Showcasing modern web applications built with React, Node.js, and cutting-edge technologies.',
  keywords: 'software engineer, full stack developer, web development, React, Node.js, portfolio',
  authors: [{ name: 'Victor Nguyen' }],
  openGraph: {
    type: 'website',
    title: 'Victor Nguyen - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer Portfolio - Showcasing modern web applications built with React, Node.js, and cutting-edge technologies.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Nguyen - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer Portfolio - Showcasing modern web applications built with React, Node.js, and cutting-edge technologies.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
