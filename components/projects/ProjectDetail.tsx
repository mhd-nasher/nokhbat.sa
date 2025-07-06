'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  status: string;
  images: string[];
  description: string;
  fullDescription: string;
  features: string[];
  specifications: Record<string, string>;
}

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-deep-black/40" />
        </div>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-desert-gold/20 backdrop-blur-sm border border-desert-gold/30 rounded-full p-3 hover:bg-desert-gold/30 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-elegant-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-desert-gold/20 backdrop-blur-sm border border-desert-gold/30 rounded-full p-3 hover:bg-desert-gold/30 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-elegant-white" />
            </button>
          </>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-stone-gray mb-4">
                <Link href="/" className="hover:text-desert-gold transition-colors duration-300">
                  الرئيسية
                </Link>
                <span>/</span>
                <Link href="/projects" className="hover:text-desert-gold transition-colors duration-300">
                  المشاريع
                </Link>
                <span>/</span>
                <span className="text-elegant-white">{project.title}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-elegant-white mb-4">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center text-stone-gray">
                  <MapPin className="h-5 w-5 mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center text-stone-gray">
                  <Calendar className="h-5 w-5 mr-2" />
                  {project.year}
                </div>
                <div className="flex items-center text-stone-gray">
                  <Building2 className="h-5 w-5 mr-2" />
                  {project.category === 'residential' ? 'سكني' : 
                   project.category === 'commercial' ? 'تجاري' : 'مختلط'}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-deep-black'
                }`}>
                  {project.status === 'completed' ? 'مكتمل' : 'قيد التنفيذ'}
                </span>
              </div>

              <p className="text-xl text-stone-gray leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image Indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageIndex === index ? 'bg-desert-gold' : 'bg-elegant-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Project Details */}
      <section className="py-20 bg-elegant-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-deep-black mb-6">
                  نظرة <span className="text-desert-gold">عامة</span>
                </h2>
                <p className="text-lg text-stone-gray leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                <h3 className="text-2xl font-bold text-deep-black mb-6">
                  المرافق والخدمات
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="h-5 w-5 text-desert-gold flex-shrink-0" />
                      <span className="text-stone-gray">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-pure-white rounded-xl p-8 shadow-lg border border-desert-gold/20 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-deep-black mb-6">
                  مواصفات المشروع
                </h3>
                <div className="space-y-4">
                  {Object.entries(project.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-desert-gold/20 last:border-b-0">
                      <span className="text-stone-gray font-medium">{key}</span>
                      <span className="text-deep-black font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <motion.button
                    className="w-full bg-desert-gold text-deep-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    احجز معاينة
                  </motion.button>
                  <motion.button
                    className="w-full border-2 border-desert-gold text-desert-gold px-6 py-4 rounded-lg font-bold text-lg hover:bg-desert-gold hover:text-deep-black transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    تحميل البروشور
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-elegant-white mb-4">
              مشاريع <span className="text-desert-gold">مشابهة</span>
            </h2>
            <p className="text-xl text-stone-gray">
              استكشف المزيد من مشاريعنا المميزة
            </p>
          </motion.div>

          <div className="text-center">
            <Link href="/projects">
              <motion.button
                className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="ml-2">عرض جميع المشاريع</span>
                <ArrowLeft className="h-5 w-5 rtl-flip" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;