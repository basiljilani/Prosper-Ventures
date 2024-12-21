import React from 'react';
import { Linkedin } from 'lucide-react';

export const SocialButton = () => {
  return (
    <a
      href="https://linkedin.com/company/prosper-ventures"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
      aria-label="Visit our LinkedIn page"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  );
};