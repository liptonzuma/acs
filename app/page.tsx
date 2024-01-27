import { Metadata } from 'next';
import HeroSection from './components/home/hero/HeroSection';
import ProductAndServices from './components/home/services/ProductAndServices';
import CoreValues from './components/home/values/CoreValues';
import Testimonies from './components/home/testimonies/Testimonies';
import Contact from './components/home/contact/Contact';

export const metadata: Metadata = {
  title: 'Adaptive Computer Solutions',
  description:
    'Partner with us for top-tier talent and unparalleled support in achieving your software development goals.',
};
export default function Home() {
  return (
    <main className="content">
      <section id="home">
        <HeroSection />
      </section>
      <CoreValues />
      <ProductAndServices />
      <Testimonies />
      <Contact />
    </main>
  );
}
