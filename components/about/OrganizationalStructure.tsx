'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Cog, TrendingUp } from 'lucide-react';

const OrganizationalStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const departments = [
    {
      icon: Building2,
      title: 'الإدارة التنفيذية',
      description: 'وضع الاستراتيجيات واتخاذ القرارات الرئيسية',
      level: 1
    },
    {
      icon: Users,
      title: 'إدارة المشاريع',
      description: 'التخطيط والتنفيذ والمتابعة لجميع المشاريع',
      level: 2
    },
    {
      icon: Cog,
      title: 'العمليات والصيانة',
      description: 'ضمان جودة التنفيذ وخدمات ما بعد البيع',
      level: 2
    },
    {
      icon: TrendingUp,
      title: 'التسويق والمبيعات',
      description: 'الترويج للمشاريع وإدارة علاقات العملاء',
      level: 2
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
            الهيكل <span className="text-desert-gold">التنظيمي</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            تنظيم محكم يضمن الكفاءة والتميز في الأداء
          </p>
        </motion.div>

        {/* Organizational Chart */}
        <div className="max-w-4xl mx-auto">
          {/* Executive Level */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-desert-gold rounded-xl p-8 text-center shadow-lg max-w-sm">
              <Building2 className="h-12 w-12 text-deep-black mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-black mb-2">
                الإدارة التنفيذية
              </h3>
              <p className="text-deep-black/80 text-sm">
                وضع الاستراتيجيات واتخاذ القرارات الرئيسية
              </p>
            </div>
          </motion.div>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-12 bg-desert-gold/30" />
          </div>

          {/* Departments Level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.filter(dept => dept.level === 2).map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                {/* Connection Line to Top */}
                {index === 1 && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-desert-gold/30" />
                )}
                
                <div className="bg-pure-white rounded-xl p-6 text-center shadow-lg border border-desert-gold/20 hover:border-desert-gold/40 transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-desert-gold/20 rounded-full mb-4">
                    <dept.icon className="h-6 w-6 text-desert-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-deep-black mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-stone-gray text-sm">
                    {dept.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal Connection Lines */}
          <div className="hidden md:block relative -mt-20 mb-8">
            <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-desert-gold/30 transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/4 w-1 h-8 bg-desert-gold/30 transform -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-desert-gold/30 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-lg text-stone-gray leading-relaxed">
            يعمل فريقنا بتناغم تام لضمان تحقيق أهدافنا الاستراتيجية وتقديم أفضل الخدمات لعملائنا.
            كل قسم يلعب دوراً حيوياً في نجاح مشاريعنا وتحقيق رؤيتنا.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;