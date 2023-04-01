import Brands from '@/components/home/Brands'
import Services from '@/components/home/Services'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Brands></Brands>
     <Services></Services>
    </main>
  )
}
