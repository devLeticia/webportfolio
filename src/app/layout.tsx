import './globals.css'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import ClarityInit from './components/ClarityInit'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'Letícia Gonçalves | Software Developer, UX Designer',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    console.warn('Warning: NEXT_PUBLIC_GA_ID is not set. Google Analytics will not be initialized.')
  }

  return (
    <html lang='en' className='scroll-smooth'>
      <body className={poppins.className}>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <ClarityInit />
    </html>
  )
}
