'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users, Clock, Star } from 'lucide-react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'نلتزم بأعلى معايير الجودة في كل مشروع نقوم به',
      delay: 0.1
    },
    {
      icon: Award,
      title: 'خبرة متميزة',
      description: 'أكثر من 10 سنوات من الخبرة في مجال التطوير العقاري',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من المهندسين والمعماريين المحترفين',
      delay: 0.3
    },
    {
      icon: Clock,
      title: 'التسليم في الموعد',
      description: 'نلتزم بالمواعيد المحددة دون تأخير',
      delay: 0.4
    },
    {
      icon: Star,
      title: 'خدمة عملاء مميزة',
      description: 'دعم مستمر وخدمة عملاء على مدار الساعة',
      delay: 0.5
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-elegant-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
            لماذا <span className="text-desert-gold">نخبة المباني</span>؟
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            نحن نقدم أفضل الحلول العقارية بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="group bg-pure-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-warm-sand/20"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold/10 rounded-full mb-6 group-hover:bg-desert-gold/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-desert-gold" />
                </div>
                <h3 className="text-xl font-bold text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-stone-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تعرف على المزيد
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;