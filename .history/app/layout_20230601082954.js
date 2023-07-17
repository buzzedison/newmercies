import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  weight: ['400',  '700',  '900'],
  subsets: ['latin'] })

export const metadata = {
  title: 'New Mercies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={lato.className}>   <Navbar/>
      {children}
  <Footer/>
      </body>
    </html>
  )
}
