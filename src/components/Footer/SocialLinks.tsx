import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/prosper-ventures',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/prosperventures',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/prosperventures',
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
        >
          <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
};