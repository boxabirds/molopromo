import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Why Julian is the Best Fit for Molo',
  description: 'A personal pitch demonstrating alignment, commitment, and capability for the Product Manager role at Molo.',
  openGraph: {
    title: 'Why Julian is the Best Fit for Molo',
    description: 'Father. Engineer. Product Leader. Ready to help Molo change parenting forever.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
