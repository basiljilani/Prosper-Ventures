import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { ProductCard } from '../components/Products/ProductCard';
import { products } from '../components/Products/productsData';

export const ProductsPage = () => {
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Innovative solutions designed to revolutionize industries and empower businesses.
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Featured Products</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.title}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Why Our Products Stand Out</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">High Performance</h3>
                <p className="text-gray-700">Built for speed and efficiency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Secure</h3>
                <p className="text-gray-700">Enterprise-grade security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Scalable</h3>
                <p className="text-gray-700">Grows with your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">24/7 Support</h3>
                <p className="text-gray-700">Always here to help</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-navy-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integration</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our products work together in perfect harmony, creating a powerful ecosystem for your business success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-navy-700 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Easy Setup</h3>
                <p className="text-gray-300">
                  Get started quickly with our intuitive setup process. No complex configurations needed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-navy-700 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cross-Platform</h3>
                <p className="text-gray-300">
                  Works seamlessly across all platforms and devices, ensuring consistent performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-navy-700 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">API-First</h3>
                <p className="text-gray-300">
                  Built with modern API-first architecture for maximum flexibility and extensibility.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors duration-300 cursor-pointer group">
                <span className="text-lg font-semibold">Learn more about our integration</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Transform your business with our innovative products. Contact us today for a demo.
            </p>
            <button className="bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
