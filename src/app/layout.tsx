import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'Leticia Goncalves',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
