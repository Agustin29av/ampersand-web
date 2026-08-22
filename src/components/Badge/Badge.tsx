import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'slate' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  className = '',
  icon
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors";
  
  const variants = {
    teal: "bg-teal-50 text-teal-700 border border-teal-200/80 shadow-xs",
    slate: "bg-slate-100 text-slate-700 border border-slate-200 shadow-xs",
    outline: "bg-white/80 text-teal-600 border border-teal-500/30 backdrop-blur-xs shadow-xs"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
};
