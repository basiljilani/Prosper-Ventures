import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-navy-800">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-6">About Prosper Ventures</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Empowering businesses through innovative solutions and strategic investments.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded with a vision to transform the business landscape, Prosper Ventures has been at the forefront of innovation and strategic growth since our inception. We believe in creating lasting value through meaningful partnerships and innovative solutions.
                </p>
                <p className="text-gray-700">
                  Our journey is marked by successful collaborations, groundbreaking projects, and a commitment to excellence that continues to drive us forward.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-emerald-500 mr-2">•</span>
                    <div>
                      <h3 className="font-semibold text-navy-900">Innovation</h3>
                      <p className="text-gray-700">Constantly pushing boundaries and embracing new technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-emerald-500 mr-2">•</span>
                    <div>
                      <h3 className="font-semibold text-navy-900">Integrity</h3>
                      <p className="text-gray-700">Operating with transparency and ethical principles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-emerald-500 mr-2">•</span>
                    <div>
                      <h3 className="font-semibold text-navy-900">Excellence</h3>
                      <p className="text-gray-700">Delivering exceptional quality in everything we do</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Add team members here */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-navy-900 text-center">John Doe</h3>
                <p className="text-gray-600 text-center">Chief Executive Officer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-navy-900 text-center">Jane Smith</h3>
                <p className="text-gray-600 text-center">Chief Technology Officer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-navy-900 text-center">Mike Johnson</h3>
                <p className="text-gray-600 text-center">Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
