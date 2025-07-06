import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Maintenance from '@/components/Maintenance';
import Testimonials from '@/components/Testimonials';
import HowToStart from '@/components/HowToStart';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <WhyUs />
      <Projects />
      <Stats />
      <Maintenance />
      <Testimonials />
      <HowToStart />
      <FinalCTA />
      <Footer />
    </main>
  );
}