import React from 'react';
import { Hexagon } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Hexagon className="w-10 h-10 text-emerald-400" />
        <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">P</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">Prosper Ventures</span>
        <span className="text-xs text-emerald-400">Empowering progress through innovation</span>
      </div>
    </div>
  );
};