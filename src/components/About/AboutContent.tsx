import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Target } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Pioneering solutions that reshape industries',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Growth',
    description: 'Accelerating business transformation',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'Empowering individuals and businesses',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Impact',
    description: 'Creating lasting technological change',
  },
];

export const AboutContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 font-lexend">About Prosper Ventures</h2>
        <p className="text-gray-600 mb-8 leading-relaxed font-lexend">
          Prosper Ventures Pvt. Ltd. is at the forefront of digital transformation, creating impactful platforms that drive efficiency and accelerate growth. Our solutions span fintech, digital entertainment, artificial intelligence, and cloud services.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="text-blue-500 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold mb-1 font-lexend">{feature.title}</h3>
                <p className="text-sm text-gray-500 font-lexend">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
            alt="Innovation"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};