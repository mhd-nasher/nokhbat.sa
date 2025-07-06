'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: 25, suffix: '+', label: 'مشروع مكتمل' },
    { number: 10, suffix: '+', label: 'سنوات خبرة' },
    { number: 500, suffix: '+', label: 'عميل سعيد' },
    { number: 15, suffix: '+', label: 'جائزة ومكافأة' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-warm-sand">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
            إنجازاتنا <span className="text-obsidian">بالأرقام</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            أرقام تعكس مسيرة نجاحنا وثقة عملائنا
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-pure-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-desert-gold/20">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-desert-gold mb-2"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {counts[index]}{stat.suffix}
                </motion.div>
                <div className="text-stone-gray font-medium">
                  {stat.label}
                </div>
              </div>
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
          <blockquote className="text-2xl md:text-3xl font-bold text-deep-black italic">
            "نبني الثقة مع كل مشروع نسلمه"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;