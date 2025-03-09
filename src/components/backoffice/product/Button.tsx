import React from 'react';

interface ButtonProps {
  variant: 'filled' | 'outline';
  color?: 'default' | 'red';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, color = 'default', fullWidth = false, children }) => {
  const baseClasses = "px-16 py-3 rounded-3xl text-xl font-semibold max-md:px-5";
  const variantClasses = {
    filled: "bg-sky-500 text-black",
    outline: "bg-white border border-solid"
  };
  const colorClasses = {
    default: "border-sky-500",
    red: "border-red-500 text-black"
  };
  const widthClass = fullWidth ? "w-full" : "";

  const className = `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${widthClass}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;