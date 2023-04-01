import Brands from '@/components/home/Brands'
import FAQS from '@/components/home/FAQS'
import Services from '@/components/home/Services'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Brands></Brands>
      <Services></Services>
      <FAQS></FAQS>
    </main>
  )
}
