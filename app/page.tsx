import HeroSection from './hero/HeroSection';
import CoreValues from './values/CoreValues';

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
