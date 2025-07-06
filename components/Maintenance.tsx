'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Smartphone, Clock, Shield } from 'lucide-react';

const Maintenance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Smartphone,
      title: 'سهولة الاستخدام',
      description: 'واجهة بسيطة وسهلة الاستخدام من أي مكان'
    },
    {
      icon: Clock,
      title: 'خدمة سريعة',
      description: 'استجابة فورية لجميع طلبات الصيانة'
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'فنيين مدربين وقطع غيار أصلية'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-elegant-white to-warm-sand">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
              بوابة الصيانة <span className="text-desert-gold">الذكية</span>
            </h2>
            <p className="text-xl text-stone-gray mb-8 leading-relaxed">
              نقدم لك خدمة صيانة متطورة من خلال بوابة إلكترونية تتيح لك إدارة جميع احتياجاتك بكل سهولة
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-desert-gold/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-desert-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-gray">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              دخول بوابة الصيانة
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-pure-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold rounded-full mb-4">
                  <Settings className="h-8 w-8 text-deep-black animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="text-2xl font-bold text-deep-black mb-2">
                  بوابة الصيانة الذكية
                </h3>
                <p className="text-stone-gray">
                  خدمة متطورة لإدارة طلبات الصيانة
                </p>
              </div>

              {/* Mock Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-elegant-white rounded-lg">
                  <span className="text-deep-black font-medium">طلبات الصيانة</span>
                  <span className="bg-desert-gold text-deep-black px-3 py-1 rounded-full text-sm">5</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-elegant-white rounded-lg">
                  <span className="text-deep-black font-medium">الطلبات المكتملة</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">12</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-elegant-white rounded-lg">
                  <span className="text-deep-black font-medium">التقييمات</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-desert-gold/20 to-warm-sand/30 rounded-2xl transform rotate-3 scale-105 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;