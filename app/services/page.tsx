import Navigation from '@/components/Navigation';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'خدماتنا - نخبة المباني',
  description: 'استكشف مجموعة خدماتنا المتميزة في مجال التطوير العقاري',
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </main>
  );
}