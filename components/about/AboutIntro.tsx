'use client';

import { motion } from 'framer-motion';
import { Building2, Target, Eye } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/70 to-deep-black/90" />
      </div>

      {/* Animated geometric pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-desert-gold rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block p-6 rounded-full bg-desert-gold/20 backdrop-blur-sm border border-desert-gold/30">
              <Building2 className="w-16 h-16 text-desert-gold" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-elegant-white mb-6 leading-tight"
          >
            نبني بالرؤية
            <br />
            <span className="text-desert-gold">نقود بالثقة</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-stone-gray mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            منذ أكثر من عقد من الزمن، نحن نشكل مستقبل العقارات في المملكة العربية السعودية
            بمشاريع تجمع بين الفخامة والابتكار والاستدامة
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Building2, number: '25+', label: 'مشروع مكتمل' },
              { icon: Target, number: '10+', label: 'سنوات خبرة' },
              { icon: Eye, number: '500+', label: 'عميل سعيد' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-obsidian/80 backdrop-blur-sm border border-desert-gold/20 rounded-xl p-6 text-center hover:border-desert-gold/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
              >
                <stat.icon className="h-8 w-8 text-desert-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-elegant-white mb-1">
                  {stat.number}
                </div>
                <div className="text-stone-gray text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;