import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rsve group',
  description: 'RSV Engineering Group Ltd. is an independent firm that provides focused advice and solutions to clients, mainly in the areas of Highway Engineering, Civil Works, Laboratory Testing, Geotechnical Engineering services, Engineering Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
