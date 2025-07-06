'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 11 234 5678', '+966 11 234 5679'],
      description: 'متاح من السبت إلى الخميس'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@nokhbat.sa', 'sales@nokhbat.sa'],
      description: 'نرد خلال 24 ساعة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الرياض، المملكة العربية السعودية', 'حي الملقا، شارع الملك فهد'],
      description: 'مكتبنا الرئيسي'
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      details: ['+966 50 123 4567'],
      description: 'خدمة سريعة ومباشرة'
    }
  ];

  const workingHours = [
    { day: 'السبت - الأربعاء', hours: '8:00 ص - 6:00 م' },
    { day: 'الخميس', hours: '8:00 ص - 4:00 م' },
    { day: 'الجمعة', hours: 'مغلق' }
  ];

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/70 to-deep-black/90" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-elegant-white mb-6 leading-tight"
            >
              تواصل <span className="text-desert-gold">معنا</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-stone-gray mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              نحن هنا لمساعدتك في تحقيق حلمك العقاري. تواصل معنا اليوم ودعنا نبدأ رحلة البناء معاً
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section ref={ref} className="py-20 bg-elegant-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-8">
                أرسل لنا <span className="text-desert-gold">رسالة</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-deep-black mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black placeholder-stone-gray focus:outline-none focus:border-desert-gold transition-colors duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-black mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black placeholder-stone-gray focus:outline-none focus:border-desert-gold transition-colors duration-300"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-black mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black placeholder-stone-gray focus:outline-none focus:border-desert-gold transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-deep-black mb-2">
                    الموضوع *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black focus:outline-none focus:border-desert-gold transition-colors duration-300"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="inquiry">استفسار عام</option>
                    <option value="project">استفسار عن مشروع</option>
                    <option value="investment">فرص استثمارية</option>
                    <option value="maintenance">خدمات الصيانة</option>
                    <option value="partnership">شراكات</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-black mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-pure-white border border-desert-gold/30 rounded-lg px-4 py-3 text-deep-black placeholder-stone-gray focus:outline-none focus:border-desert-gold transition-colors duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-desert-gold text-deep-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-sand transition-all duration-300 hover:shadow-xl hover:shadow-desert-gold/25 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  إرسال الرسالة
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-8">
                معلومات <span className="text-desert-gold">التواصل</span>
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-pure-white rounded-xl p-6 shadow-lg border border-desert-gold/20 hover:border-desert-gold/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0 w-12 h-12 bg-desert-gold/20 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-desert-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-deep-black mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-stone-gray mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-desert-gold">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-pure-white rounded-xl p-6 shadow-lg border border-desert-gold/20"
              >
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-desert-gold mr-3" />
                  <h3 className="text-lg font-bold text-deep-black">
                    ساعات العمل
                  </h3>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-stone-gray">{schedule.day}</span>
                      <span className="text-deep-black font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-elegant-white mb-4">
              موقعنا على <span className="text-desert-gold">الخريطة</span>
            </h2>
            <p className="text-xl text-stone-gray">
              زورنا في مكتبنا الرئيسي في قلب الرياض
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-stone-gray/20 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-desert-gold mx-auto mb-4" />
              <p className="text-elegant-white text-lg">
                خريطة تفاعلية - قريباً
              </p>
              <p className="text-stone-gray">
                الرياض، حي الملقا، شارع الملك فهد
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}