import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-white font-semibold text-2xl">{title}</h3>
      {children}
    </div>
  );
};