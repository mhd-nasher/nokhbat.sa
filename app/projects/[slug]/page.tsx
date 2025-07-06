import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import Footer from '@/components/Footer';

// This would typically come from a database or CMS
const projects = {
  'elegance-complex': {
    id: 'elegance-complex',
    title: 'مجمع الأناقة السكني',
    location: 'الرياض، حي الملقا',
    year: '2023',
    category: 'residential',
    status: 'completed',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'مجمع سكني فاخر يضم 150 وحدة سكنية بتصميم عصري ومرافق متكاملة',
    fullDescription: 'يقع مجمع الأناقة السكني في قلب حي الملقا الراقي بالرياض، ويعتبر من أرقى المشاريع السكنية في المنطقة. يضم المجمع 150 وحدة سكنية متنوعة تتراوح بين الشقق والفلل، جميعها مصممة وفقاً لأحدث المعايير العالمية.',
    features: [
      'مسابح خارجية وداخلية',
      'صالة رياضية مجهزة بالكامل',
      'حدائق ومناطق خضراء واسعة',
      'مواقف سيارات تحت الأرض',
      'أمن وحراسة على مدار الساعة',
      'مناطق لعب للأطفال',
      'مركز تجاري صغير'
    ],
    specifications: {
      'المساحة الإجمالية': '50,000 متر مربع',
      'عدد الوحدات': '150 وحدة',
      'عدد الطوابق': '8 طوابق',
      'مواقف السيارات': '300 موقف',
      'المساحات الخضراء': '15,000 متر مربع'
    }
  },
  'central-tower': {
    id: 'central-tower',
    title: 'برج التجارة المركزي',
    location: 'جدة، الكورنيش',
    year: '2024',
    category: 'commercial',
    status: 'in-progress',
    images: [
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'برج تجاري مكون من 25 طابق في قلب المدينة التجارية',
    fullDescription: 'يقع برج التجارة المركزي على كورنيش جدة في موقع استراتيجي مميز. يتكون البرج من 25 طابقاً ويضم مكاتب تجارية فاخرة ومراكز تسوق ومطاعم راقية.',
    features: [
      'مكاتب تجارية بمساحات متنوعة',
      'مركز تسوق في الطوابق السفلية',
      'مطاعم ومقاهي راقية',
      'مواقف سيارات متعددة الطوابق',
      'أنظمة أمان متطورة',
      'إطلالات بانورامية على البحر الأحمر'
    ],
    specifications: {
      'الارتفاع': '120 متر',
      'عدد الطوابق': '25 طابق',
      'المساحة المكتبية': '30,000 متر مربع',
      'مواقف السيارات': '500 موقف',
      'المساحة التجارية': '8,000 متر مربع'
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'مشروع غير موجود - نخبة المباني',
    };
  }

  return {
    title: `${project.title} - نخبة المباني`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}