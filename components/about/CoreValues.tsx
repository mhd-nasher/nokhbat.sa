'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, Lightbulb } from 'lucide-react';

const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const values = [
    {
      icon: Shield,
      title: 'النزاهة',
      description: 'نلتزم بأعلى معايير الشفافية والصدق في جميع تعاملاتنا',
      delay: 0.1
    },
    {
      icon: Award,
      title: 'التميز',
      description: 'نسعى دائماً لتحقيق أفضل النتائج وتجاوز توقعات عملائنا',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'الشراكة',
      description: 'نؤمن بقوة العمل الجماعي وبناء علاقات طويلة الأمد',
      delay: 0.3
    },
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نتبنى أحدث التقنيات والحلول الإبداعية في مشاريعنا',
      delay: 0.4
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
            قيمنا <span className="text-desert-gold">الأساسية</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            المبادئ التي توجه عملنا وتشكل هويتنا المؤسسية
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: value.delay }}
              className="group bg-obsidian rounded-xl p-8 text-center hover:bg-gradient-to-br hover:from-obsidian hover:to-stone-gray/20 transition-all duration-300 hover:-translate-y-2 border border-desert-gold/20 hover:border-desert-gold/40"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold/20 rounded-full mb-6 group-hover:bg-desert-gold/30 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-desert-gold" />
              </div>
              <h3 className="text-xl font-bold text-elegant-white mb-4 group-hover:text-desert-gold transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-stone-gray leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-elegant-white italic">
            "قيمنا ليست مجرد كلمات، بل أسلوب حياة نعيشه في كل مشروع"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;