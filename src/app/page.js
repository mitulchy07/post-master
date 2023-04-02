import Banner from '@/components/home/Banner';
import Brands from '@/components/home/Brands';
import FAQS from '@/components/home/FAQS';
import Services from '@/components/home/Services';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Brands></Brands>
      <Services></Services>
      <FAQS></FAQS>
    </main>
  );
}
