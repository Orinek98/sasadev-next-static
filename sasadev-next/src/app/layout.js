import { Inter } from 'next/font/google'
import './globals.css'
import './styles/image-slider.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SasaDev',
  description: 'Saverio Santonocito',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
