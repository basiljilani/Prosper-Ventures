import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { ServiceCard } from '../components/Services/ServiceCard';
import { services } from '../components/Services/serviceData';
import { Cpu, Coins, Play, Cloud, BarChart, Shield, Globe, Smartphone } from 'lucide-react';

// Additional services for the detailed page
const additionalServices = [
  {
    icon: BarChart,
    title: 'Business Analytics',
    description: 'Data-driven insights and analytics solutions for informed decision making.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets and data.',
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting and implementation.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Custom mobile applications and solutions for modern businesses.',
  },
];

const allServices = [...services, ...additionalServices];

export const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-navy-800">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive technology solutions tailored to drive your business forward.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {allServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={<service.icon className="w-8 h-8" />}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Why Choose Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Expertise</h3>
                <p className="text-gray-700">
                  Our team of experts brings years of industry experience and technical knowledge to every project.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We stay ahead of technological trends to deliver cutting-edge solutions that give you a competitive edge.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Results</h3>
                <p className="text-gray-700">
                  Our focus on measurable outcomes ensures that our services deliver real value to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <button className="bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
