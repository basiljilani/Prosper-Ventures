import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-gray-300 shrink-0" />
        <span className="text-lg text-gray-300 hover:text-emerald-500">
          +92 51 89 55 777
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-gray-300 shrink-0" />
        <a 
          href="mailto:info@prosperventures.pk" 
          className="text-lg text-gray-300 hover:text-emerald-500"
        >
          info@prosperventures.pk
        </a>
      </div>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 mt-1 text-gray-300 shrink-0" />
        <div className="text-lg leading-relaxed text-gray-300">
          <span className="block hover:text-emerald-500">
            Evacuee Trust Complex
          </span>
          <span className="block hover:text-emerald-500">
            Agha Khan Rd, F-5/1 Islamabad,
          </span>
          <span className="block hover:text-emerald-500">
            Pakistan
          </span>
        </div>
      </div>
    </div>
  );
};