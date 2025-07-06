'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد الحربي',
      role: 'مالك شقة في مجمع الأناقة',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'تجربة رائعة مع نخبة المباني. الجودة عالية والخدمة ممتازة. أنصح بالتعامل معهم.',
      rating: 5
    },
    {
      id: 2,
      name: 'فاطمة عبدالله',
      role: 'مستثمرة عقارية',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'استثمار ناجح مع فريق محترف. تم تسليم المشروع في الوقت المحدد بأعلى جودة.',
      rating: 5
    },
    {
      id: 3,
      name: 'خالد العتيبي',
      role: 'رجل أعمال',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'خدمة ما بعد البيع ممتازة. الفريق متعاون وسريع في الاستجابة لأي طلب.',
      rating: 5
    },
    {
      id: 4,
      name: 'نورا السالم',
      role: 'مالكة فيلا',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'تصميم مبدع وتنفيذ متقن. حققوا حلمي في المنزل المثالي.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-deep-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C7B694 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-elegant-white mb-6">
            آراء <span className="text-desert-gold">عملائنا</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            شهادات حقيقية من عملائنا الكرام حول تجربتهم معنا
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${currentSlide * -100}%)`,
                direction: 'ltr'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-obsidian to-stone-gray/20 rounded-2xl p-8 text-center shadow-2xl border border-desert-gold/20 hover:border-desert-gold/40 transition-all duration-300"
                  >
                    {/* Quote Icon */}
                    <div className="text-desert-gold mb-6">
                      <Quote className="h-8 w-8 mx-auto" />
                    </div>

                    {/* Content */}
                    <p className="text-lg text-elegant-white mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Profile */}
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-desert-gold mr-4"
                      />
                      <div className="text-right">
                        <h4 className="text-lg font-bold text-elegant-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-stone-gray">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4 rtl:space-x-reverse">
            <motion.button
              onClick={prevSlide}
              className="bg-desert-gold text-deep-black p-3 rounded-full hover:bg-warm-sand transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-desert-gold' : 'bg-stone-gray'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="bg-desert-gold text-deep-black p-3 rounded-full hover:bg-warm-sand transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;