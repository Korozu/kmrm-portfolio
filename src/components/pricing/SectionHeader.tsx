import React from 'react';

export interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-4xl font-extrabold text-zinc-700">{number}</span>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-zinc-400 text-sm leading-relaxed ml-14">{subtitle}</p>
      )}
    </div>
  );
}

