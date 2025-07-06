'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/70 to-deep-black/90" />
      </div>

      {/* Animated background elements */}
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
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-elegant-white mb-6 leading-tight">
              اجعل حلمك <span className="text-desert-gold">حقيقة</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-gray mb-8 leading-relaxed">
              "النجاح يبدأ بخطوة واحدة، والمنزل المثالي يبدأ بقرار واحد"
            </p>
            <p className="text-lg text-stone-gray max-w-2xl mx-auto">
              انضم إلى مئات العملاء الذين حققوا أحلامهم العقارية معنا
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25 group animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                اتصل بنا الآن
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ←
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="border-2 border-desert-gold text-desert-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-desert-gold hover:text-deep-black transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Phone, text: '+966 11 234 5678', label: 'هاتف' },
              { icon: Mail, text: 'info@nokhbat.sa', label: 'بريد إلكتروني' },
              { icon: MessageCircle, text: '+966 50 123 4567', label: 'واتساب' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-3 rtl:space-x-reverse text-stone-gray hover:text-desert-gold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <contact.icon className="h-5 w-5" />
                <div className="text-center">
                  <p className="text-sm">{contact.label}</p>
                  <p className="font-medium">{contact.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-desert-gold/20"
          >
            <p className="text-sm text-stone-gray">
              © 2024 نخبة المباني - جميع الحقوق محفوظة
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;