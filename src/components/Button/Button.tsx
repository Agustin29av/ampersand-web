import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'turquesa';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquesa/50 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-navy hover:bg-navy-light text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-navy-dark hover:bg-navy text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 hover:shadow-sm hover:-translate-y-0.5",
    ghost: "bg-transparent text-gray-600 hover:text-turquesa hover:bg-gray-100/80",
    turquesa: "bg-turquesa hover:bg-turquesa-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="transition-transform">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
