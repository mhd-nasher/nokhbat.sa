import Navigation from '@/components/Navigation';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'مشاريعنا - نخبة المباني',
  description: 'استكشف مجموعة مشاريعنا المميزة في القطاع العقاري',
};

export default function ProjectsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}