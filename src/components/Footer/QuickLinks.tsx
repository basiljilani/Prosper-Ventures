import React from 'react';

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Mission & Vision', href: '#mission-vision' },
];

export const QuickLinks = () => {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};