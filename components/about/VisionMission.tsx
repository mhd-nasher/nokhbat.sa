'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-elegant-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold/20 rounded-full mb-6">
              <Eye className="h-8 w-8 text-desert-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
              <span className="text-desert-gold">رؤيتنا</span>
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-8">
              أن نكون الشركة الرائدة في مجال التطوير العقاري في المملكة العربية السعودية،
              ونساهم في بناء مجتمعات عصرية ومستدامة تلبي تطلعات المواطنين وتعكس رؤية المملكة 2030.
            </p>
            <div className="space-y-4">
              {[
                'الريادة في التطوير العقاري',
                'الابتكار في التصميم والتنفيذ',
                'الاستدامة البيئية والاجتماعية'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <div className="w-2 h-2 bg-desert-gold rounded-full" />
                  <span className="text-stone-gray">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-desert-gold/20 rounded-full mb-6">
              <Target className="h-8 w-8 text-desert-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
              <span className="text-desert-gold">مهمتنا</span>
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-8">
              نلتزم بتطوير مشاريع عقارية متميزة تجمع بين الجودة العالية والتصميم الإبداعي
              والخدمات المتكاملة، مع الحرص على تحقيق أعلى مستويات رضا العملاء وخلق قيمة مضافة للمجتمع.
            </p>
            <div className="space-y-4">
              {[
                'تقديم حلول عقارية متكاملة',
                'ضمان أعلى معايير الجودة',
                'خدمة عملاء استثنائية'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <div className="w-2 h-2 bg-desert-gold rounded-full" />
                  <span className="text-stone-gray">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;