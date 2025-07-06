'use client';

import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: 'الشركة',
      links: [
        { name: 'من نحن', href: '/about' },
        { name: 'مشاريعنا', href: '/projects' },
        { name: 'الخدمات', href: '/services' },
        { name: 'الأخبار', href: '/news' }
      ]
    },
    {
      title: 'الخدمات',
      links: [
        { name: 'التطوير العقاري', href: '/services/development' },
        { name: 'الاستشارات', href: '/services/consulting' },
        { name: 'إدارة المشاريع', href: '/services/management' },
        { name: 'الصيانة', href: '/services/maintenance' }
      ]
    },
    {
      title: 'الدعم',
      links: [
        { name: 'تواصل معنا', href: '/contact' },
        { name: 'الأسئلة الشائعة', href: '/faq' },
        { name: 'بوابة الصيانة', href: '/maintenance-portal' },
        { name: 'خدمة العملاء', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-deep-black text-elegant-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <Building2 className="h-8 w-8 text-desert-gold" />
              <span className="text-xl font-bold">نخبة المباني</span>
            </div>
            <p className="text-stone-gray mb-6 leading-relaxed">
              نبني أحلامك بأرقى المعايير العالمية في قطاع العقارات السكنية والتجارية
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-desert-gold" />
                <span className="text-sm">+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-desert-gold" />
                <span className="text-sm">info@nokhbat.sa</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-desert-gold" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-desert-gold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-stone-gray hover:text-desert-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-stone-gray text-sm mb-4 md:mb-0"
            >
              © 2024 نخبة المباني. جميع الحقوق محفوظة.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4 rtl:space-x-reverse"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-stone-gray/20 rounded-full flex items-center justify-center hover:bg-desert-gold hover:text-deep-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;