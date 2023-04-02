import Banner from '@/components/home/Banner';
import Brands from '@/components/home/Brands';
import Calculator from '@/components/home/Calculator';
import FAQS from '@/components/home/FAQS';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonial';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Brands></Brands>
      <Services></Services>
      <Calculator></Calculator>
      <Testimonials></Testimonials>
      <FAQS></FAQS>
    </main>
  );
}
