import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JAYDAY — Portfolio',
  description: 'Web Designer & Publisher Portfolio',
  // 도메인 구입 후 아래 수정
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'JAYDAY — Portfolio',
    description: 'Web Designer & Publisher Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="/xeicon/xeicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
