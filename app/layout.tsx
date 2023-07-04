import Nav from '@/components/layout/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Sansar',
  description: 'Sansar for music lovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
          <main>
            <div className="max-w-7xl m-auto">
              {children}
            </div>
          </main>
      </body>
    </html>
  )
}

