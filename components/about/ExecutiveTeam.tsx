'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const ExecutiveTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const team = [
    {
      name: 'المهندس أحمد العتيبي',
      title: 'الرئيس التنفيذي',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'خبرة تزيد عن 15 عاماً في مجال التطوير العقاري والإدارة التنفيذية',
      linkedin: '#',
      email: 'ahmed@nokhbat.sa'
    },
    {
      name: 'المهندسة فاطمة الحربي',
      title: 'مديرة العمليات',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'متخصصة في إدارة المشاريع الكبرى والتطوير المستدام',
      linkedin: '#',
      email: 'fatima@nokhbat.sa'
    },
    {
      name: 'المهندس خالد السالم',
      title: 'مدير التصميم',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'معماري حائز على جوائز دولية في التصميم المعماري المبتكر',
      linkedin: '#',
      email: 'khalid@nokhbat.sa'
    },
    {
      name: 'الأستاذة نورا المطيري',
      title: 'مديرة التسويق',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'خبيرة في التسويق العقاري وإدارة علاقات العملاء',
      linkedin: '#',
      email: 'nora@nokhbat.sa'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-warm-sand">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
            فريق <span className="text-obsidian">القيادة</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-3xl mx-auto">
            نخبة من الخبراء والمتخصصين الذين يقودون رؤيتنا نحو التميز
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-pure-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.linkedin}
                    className="w-10 h-10 bg-desert-gold rounded-full flex items-center justify-center hover:bg-warm-sand transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-5 w-5 text-deep-black" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-desert-gold rounded-full flex items-center justify-center hover:bg-warm-sand transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-5 w-5 text-deep-black" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-deep-black mb-2 group-hover:text-desert-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-desert-gold font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-stone-gray text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;