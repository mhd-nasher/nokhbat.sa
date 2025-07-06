'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';

const ProjectsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 'elegance-complex',
      title: 'مجمع الأناقة السكني',
      location: 'الرياض، حي الملقا',
      year: '2023',
      category: 'residential',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع سكني فاخر يضم 150 وحدة سكنية بتصميم عصري ومرافق متكاملة'
    },
    {
      id: 'central-tower',
      title: 'برج التجارة المركزي',
      location: 'جدة، الكورنيش',
      year: '2024',
      category: 'commercial',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'برج تجاري مكون من 25 طابق في قلب المدينة التجارية'
    },
    {
      id: 'tranquil-village',
      title: 'قرية الهدوء',
      location: 'الدمام، الشاطئ',
      year: '2023',
      category: 'residential',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجتمع سكني هادئ مطل على البحر مع مرافق ترفيهية متنوعة'
    },
    {
      id: 'innovation-complex',
      title: 'مجمع الابتكار',
      location: 'الرياض، الملز',
      year: '2024',
      category: 'mixed',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع متعدد الاستخدامات يجمع بين المكاتب والشقق والمحلات التجارية'
    },
    {
      id: 'luxury-villas',
      title: 'فلل الفخامة',
      location: 'الرياض، الدرعية',
      year: '2023',
      category: 'residential',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجموعة من الفلل الفاخرة بتصميم معماري استثنائي'
    },
    {
      id: 'business-park',
      title: 'حديقة الأعمال',
      location: 'جدة، شمال جدة',
      year: '2024',
      category: 'commercial',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مجمع تجاري متطور يضم مكاتب ومراكز تسوق ومطاعم'
    }
  ];

  const filters = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'residential', label: 'سكني' },
    { id: 'commercial', label: 'تجاري' },
    { id: 'mixed', label: 'مختلط' },
    { id: 'completed', label: 'مكتمل' },
    { id: 'in-progress', label: 'قيد التنفيذ' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || 
                         project.category === activeFilter || 
                         project.status === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section ref={ref} className="py-20 bg-elegant-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="ابحث عن مشروع أو موقع..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black placeholder-stone-gray focus:outline-none focus:border-desert-gold transition-colors duration-300 shadow-sm"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-desert-gold text-deep-black shadow-lg'
                    : 'bg-pure-white text-stone-gray border border-desert-gold/30 hover:bg-desert-gold/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="bg-pure-white rounded-lg p-1 border border-desert-gold/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-desert-gold text-deep-black' : 'text-stone-gray'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-desert-gold text-deep-black' : 'text-stone-gray'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        }`}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-pure-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-desert-gold/20 ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-deep-black'
                }`}>
                  {project.status === 'completed' ? 'مكتمل' : 'قيد التنفيذ'}
                </span>
              </div>

              {/* Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'md:w-1/3 h-48 md:h-auto' : 'h-64'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                <div>
                  <h3 className="text-xl font-bold text-deep-black mb-3 group-hover:text-desert-gold transition-colors duration-300">
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
                </div>

                {/* CTA */}
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    className="flex items-center text-desert-gold hover:text-warm-sand transition-colors duration-300 group-hover:translate-x-2 font-medium"
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

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-deep-black mb-2">
              لا توجد مشاريع مطابقة
            </h3>
            <p className="text-stone-gray">
              جرب تغيير معايير البحث أو الفلتر
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              عرض المزيد من المشاريع
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;