import React from 'react';

interface ButtonFilledProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const ButtonFilled = React.forwardRef<HTMLButtonElement, ButtonFilledProps>(
  ({ children, className = '', fullWidth = true, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          flex items-center justify-center
          min-h-[52px] px-6
          rounded-full
          border border-[#778080]
          bg-white text-[#778080]
          text-[20px] leading-[29px] font-normal
          transition-colors duration-200
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        {...props}
      >
        <span className="px-4">{children}</span>
      </button>
    );
  }
);

ButtonFilled.displayName = 'ButtonFilled';
