import { Metadata } from 'next';
import HeroSection from './components/hero/HeroSection';
import ProductAndServices from './components/services/ProductAndServices';
import CoreValues from './components/values/CoreValues';

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
    </main>
  );
}
