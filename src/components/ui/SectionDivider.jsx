import React from 'react';

const SectionDivider = ({ color = 'currentColor' }) => {
  return (
    <div className="w-full flex items-center justify-center my-16" aria-hidden="true">
      <div className="w-24 h-px bg-current opacity-30"></div>
      <svg width="80" height="40" viewBox="0 0 100 50" className="mx-4 text-accent">
        <path d="M50 0 L60 25 L50 50 L40 25 Z" fill="currentColor" />
        <path d="M30 25 L40 25" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M70 25 L60 25" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="75" cy="25" r="3" fill="currentColor" opacity="0.5"/>
      </svg>
      <div className="w-24 h-px bg-current opacity-30"></div>
    </div>
  );
}
export default SectionDivider;