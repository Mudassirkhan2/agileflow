import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AgileFlow',
  description: "AgileFlow - Manage your team's work, projects, & tasks online·",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
