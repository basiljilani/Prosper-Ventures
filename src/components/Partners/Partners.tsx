import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { partners } from './partnersData';
import { Building2, Network, Landmark, LayoutGrid } from 'lucide-react';

const PartnerIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Jazz':
      return <Network className="w-12 h-12" />;
    case 'Telenor':
      return <Building2 className="w-12 h-12" />;
    case 'HBL':
      return <Landmark className="w-12 h-12" />;
    case 'Microsoft':
      return <LayoutGrid className="w-12 h-12" />;
    default:
      return null;
  }
};

export const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Working with industry leaders to create innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-40 flex items-center justify-center mb-6 
                             transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="text-emerald-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <PartnerIcon name={partner.name} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors duration-300">
            Become a Partner
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
