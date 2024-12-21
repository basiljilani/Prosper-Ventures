import React from 'react';
import { motion } from 'framer-motion';

interface MissionVisionCardProps {
  title: string;
  content: string;
  index: number;
}

export const MissionVisionCard = ({ title, content, index }: MissionVisionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-navy-800 p-8 rounded-2xl"
    >
      <h2 className="text-3xl font-bold text-emerald-400 mb-4">{title}</h2>
      <p className="text-gray-300 leading-relaxed text-lg">{content}</p>
    </motion.div>
  );
};