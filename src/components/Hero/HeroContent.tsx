import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Shaping Tomorrow
        <br />
        <span className="text-emerald-400">Today</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Where innovation meets possibility. Building the digital foundations that transform ideas into reality.
      </p>
      
      <button
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Discover Our Vision
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};