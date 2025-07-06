'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

const LinkedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featuredProjects = [
    {
      id: 'elegance-complex',
      title: 'مجمع الأناقة السكني',
      location: 'الرياض، حي الملقا',
      year: '2023',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع سكني فاخر يضم 150 وحدة سكنية بتصميم عصري ومرافق متكاملة'
    },
    {
      id: 'central-tower',
      title: 'برج التجارة المركزي',
      location: 'جدة، الكورنيش',
      year: '2024',
      image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'برج تجاري مكون من 25 طابق في قلب المدينة التجارية'
    },
    {
      id: 'tranquil-village',
      title: 'قرية الهدوء',
      location: 'الدمام، الشاطئ',
      year: '2023',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجتمع سكني هادئ مطل على البحر مع مرافق ترفيهية متنوعة'
    },
    {
      id: 'innovation-complex',
      title: 'مجمع الابتكار',
      location: 'الرياض، الملز',
      year: '2024',
      image: 'https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع متعدد الاستخدامات يجمع بين المكاتب والشقق والمحلات التجارية'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-deep-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-elegant-white mb-6">
            مشاريعنا <span className="text-desert-gold">المميزة</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            نماذج من إنجازاتنا التي تعكس التزامنا بالتميز والجودة
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-obsidian hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-elegant-white mb-3 group-hover:text-desert-gold transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-stone-gray">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-stone-gray">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.year}
                  </div>
                </div>

                <p className="text-stone-gray leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA */}
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    className="flex items-center text-desert-gold hover:text-warm-sand transition-colors duration-300 group-hover:translate-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="ml-2">اعرف المزيد</span>
                    <ArrowLeft className="h-4 w-4 rtl-flip" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              عرض جميع المشاريع
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedProjects;