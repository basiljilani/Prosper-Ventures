import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-gray-300">
        <Phone className="w-5 h-5" />
        <span className="text-lg">+92 51 89 55 777</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300">
        <Mail className="w-5 h-5" />
        <a href="mailto:info@prosperventures.pk" className="hover:text-blue-400 transition-colors text-lg">
          info@prosperventures.pk
        </a>
      </div>
      <div className="flex items-start gap-3 text-gray-300">
        <MapPin className="w-5 h-5 mt-1" />
        <span className="text-lg leading-relaxed">
          Evacuee Trust Complex,<br />
          Agha Khan Rd, F-5/1,<br />
          Islamabad, Pakistan
        </span>
      </div>
    </div>
  );
};