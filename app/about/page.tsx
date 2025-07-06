import Navigation from '@/components/Navigation';
import AboutIntro from '@/components/about/AboutIntro';
import VisionMission from '@/components/about/VisionMission';
import CoreValues from '@/components/about/CoreValues';
import ExecutiveTeam from '@/components/about/ExecutiveTeam';
import OrganizationalStructure from '@/components/about/OrganizationalStructure';
import LinkedProjects from '@/components/about/LinkedProjects';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'من نحن - نخبة المباني',
  description: 'تعرف على رؤيتنا ومهمتنا وفريقنا في نخبة المباني',
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <AboutIntro />
      <VisionMission />
      <CoreValues />
      <ExecutiveTeam />
      <OrganizationalStructure />
      <LinkedProjects />
      <Footer />
    </main>
  );
}