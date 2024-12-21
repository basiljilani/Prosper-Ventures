import React from 'react';
import { Hexagon } from 'lucide-react';

export const FooterLogo = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Hexagon className="w-10 h-10 text-emerald-400" />
          <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-2xl">P</span>
        </div>
        <span className="text-2xl font-bold text-white">Prosper Ventures</span>
      </div>
      <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
        Pioneering technology solutions that drive digital transformation and empower businesses for the future.
      </p>
    </div>
  );
};