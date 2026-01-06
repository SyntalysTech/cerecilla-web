import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white shadow-lg shadow-[#87CEEB]/25 hover:shadow-xl hover:shadow-[#87CEEB]/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-gradient-to-r from-[#ff6b6b] to-[#ff4444] text-white shadow-lg shadow-[#ff4444]/25 hover:shadow-xl hover:shadow-[#ff4444]/30 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-[#87CEEB] text-[#87CEEB] hover:bg-[#87CEEB] hover:text-white',
    ghost: 'text-slate-600 hover:text-[#87CEEB] hover:bg-[#87CEEB]/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}
