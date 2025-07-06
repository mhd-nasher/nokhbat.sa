'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Wrench, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Building2,
      title: 'التطوير العقاري',
      description: 'تطوير مشاريع سكنية وتجارية متكاملة بأعلى معايير الجودة',
      features: ['تصميم معماري مبتكر', 'إدارة المشاريع', 'ضمان الجودة', 'التسليم في الموعد'],
      delay: 0.1
    },
    {
      icon: Users,
      title: 'الاستشارات العقارية',
      description: 'استشارات متخصصة في الاستثمار العقاري وتقييم المشاريع',
      features: ['تحليل السوق', 'تقييم الاستثمارات', 'دراسات الجدوى', 'التخطيط الاستراتيجي'],
      delay: 0.2
    },
    {
      icon: Wrench,
      title: 'إدارة المشاريع',
      description: 'إدارة شاملة للمشاريع من التخطيط حتى التسليم',
      features: ['التخطيط والجدولة', 'مراقبة الجودة', 'إدارة المقاولين', 'التقارير الدورية'],
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: 'التسويق العقاري',
      description: 'خدمات تسويقية متطورة لترويج المشاريع العقارية',
      features: ['استراتيجيات التسويق', 'إدارة المبيعات', 'العلاقات العامة', 'التسويق الرقمي'],
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'خدمات الصيانة',
      description: 'خدمات صيانة شاملة للمباني والمرافق',
      features: ['صيانة دورية', 'إصلاحات طارئة', 'إدارة المرافق', 'خدمة عملاء 24/7'],
      delay: 0.5
    },
    {
      icon: Lightbulb,
      title: 'الحلول الذكية',
      description: 'تطبيق أحدث التقنيات في المباني الذكية',
      features: ['أنظمة ذكية', 'توفير الطاقة', 'الأمان المتطور', 'التحكم الآلي'],
      delay: 0.6
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
            خدمات <span className="text-desert-gold">متكاملة</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال العقارات
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group bg-pure-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-desert-gold/20 hover:border-desert-gold/40"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold/20 rounded-full mb-6 group-hover:bg-desert-gold/30 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-desert-gold" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-deep-black mb-4 group-hover:text-desert-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-stone-gray leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-stone-gray">
                    <div className="w-2 h-2 bg-desert-gold rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className="mt-6 w-full bg-desert-gold text-deep-black px-6 py-3 rounded-lg font-medium hover:bg-warm-sand transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                اطلب الخدمة
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-deep-black mb-4">
            هل تحتاج خدمة مخصصة؟
          </h3>
          <p className="text-stone-gray mb-6">
            تواصل معنا لمناقشة احتياجاتك الخاصة
          </p>
          <motion.button
            className="bg-deep-black text-elegant-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-obsidian transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تواصل معنا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;