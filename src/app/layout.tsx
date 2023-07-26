import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'Letícia Gonçalves | Software Dev',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
