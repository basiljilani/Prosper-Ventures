import React from 'react';
import { FooterLogo } from './FooterLogo';
import { FooterSection } from './FooterSection';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <FooterLogo />
          </div>
          <div className="flex justify-end">
            <FooterSection title="Contact">
              <ContactInfo />
            </FooterSection>
          </div>
        </div>
        
        <div className="py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              {new Date().getFullYear()} Prosper Ventures Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};