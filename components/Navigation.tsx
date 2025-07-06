'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'المشاريع', href: '/projects' },
    { name: 'الخدمات', href: '/services' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Building2 className="h-8 w-8 text-desert-gold" />
              <span className="text-xl font-bold text-elegant-white">
                نخبة المباني
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={`relative transition-colors duration-300 ${
                    isActive(item.href) 
                      ? 'text-desert-gold' 
                      : 'text-elegant-white hover:text-desert-gold'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-desert-gold"
                      layoutId="activeTab"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block bg-desert-gold text-deep-black px-6 py-3 rounded-lg font-medium hover:bg-warm-sand transition-all duration-300 hover:shadow-lg hover:shadow-desert-gold/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            احجز معاينة
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-elegant-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-deep-black/95 backdrop-blur-lg rounded-lg mt-4 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`block py-2 transition-colors duration-300 ${
                        isActive(item.href) 
                          ? 'text-desert-gold' 
                          : 'text-elegant-white hover:text-desert-gold'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.button
                  className="w-full bg-desert-gold text-deep-black px-6 py-3 rounded-lg font-medium hover:bg-warm-sand transition-all duration-300 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsOpen(false)}
                >
                  احجز معاينة
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;