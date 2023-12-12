import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XCoolTools',
  description: 'All the tools you need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} min-h-screen`}>
        <a title="Web Analytics" href="https://clicky.com/101436800"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
        <script async data-id="101436800" src="//static.getclicky.com/js"></script>

        <Header />
        {children}
      </body>
    </html>
  )
}
