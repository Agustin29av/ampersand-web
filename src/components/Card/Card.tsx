import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  bordered = true
}) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 md:p-8
        ${bordered ? 'border border-slate-200/80' : ''}
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200 hover:-translate-y-1' : 'shadow-sm'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
