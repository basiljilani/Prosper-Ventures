import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' }
];

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};