import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  url?: string;
  index: number;
}

export const ProductCard = ({ title, description, url, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-navy-800 p-8 rounded-2xl hover:bg-navy-700 transition-colors duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Learn More →
        </a>
      )}
    </motion.div>
  );
};