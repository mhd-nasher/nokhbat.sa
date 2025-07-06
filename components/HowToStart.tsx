'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Eye, FileText, Key } from 'lucide-react';

const HowToStart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const steps = [
    {
      id: 1,
      icon: MessageSquare,
      title: 'الاستفسار',
      description: 'تواصل معنا لمناقشة احتياجاتك ومتطلباتك'
    },
    {
      id: 2,
      icon: Eye,
      title: 'المعاينة',
      description: 'نقوم بزيارة الموقع أو عرض المشروع عليك'
    },
    {
      id: 3,
      icon: FileText,
      title: 'التعاقد',
      description: 'توقيع العقد وتحديد جميع التفاصيل'
    },
    {
      id: 4,
      icon: Key,
      title: 'التسليم',
      description: 'استلام وحدتك جاهزة للسكن أو الاستثمار'
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
            كيف <span className="text-desert-gold">نبدأ</span>؟
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            خطوات بسيطة للوصول إلى حلمك العقاري
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-desert-gold/20 hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-pure-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-desert-gold/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-desert-gold rounded-full flex items-center justify-center mr-4">
                      <step.icon className="h-6 w-6 text-deep-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-deep-black">
                        {step.title}
                      </h3>
                      <p className="text-stone-gray">
                        الخطوة {step.id}
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-desert-gold rounded-full border-4 border-elegant-white shadow-lg hidden md:block" />

              {/* Step Number (Mobile) */}
              <div className="md:hidden absolute -top-2 -right-2 w-8 h-8 bg-desert-gold rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-deep-black">
                  {step.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ رحلتك معنا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStart;