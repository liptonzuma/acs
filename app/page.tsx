import HeroSection from './components/hero/HeroSection';
import CoreValues from './components/values/CoreValues';

export default function Home() {
  return (
    <main className="content">
      <section id="home">
        <HeroSection />
      </section>
      <CoreValues />
    </main>
  );
}
