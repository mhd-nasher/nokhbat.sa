'use client';

import { motion } from 'framer-motion';
import { Settings, Wrench } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-desert-gold rounded-full opacity-40"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
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
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-block p-4 rounded-full bg-desert-gold/20 backdrop-blur-sm border border-desert-gold/30">
              <Settings className="w-12 h-12 text-desert-gold" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-elegant-white mb-6 leading-tight"
          >
            خدماتنا <span className="text-desert-gold">المتميزة</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-stone-gray mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            نقدم مجموعة شاملة من الخدمات العقارية المتخصصة لتلبية جميع احتياجاتكم
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;