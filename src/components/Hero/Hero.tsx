import React from 'react';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/30">
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};