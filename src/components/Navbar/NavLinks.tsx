import React from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' }
];

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};