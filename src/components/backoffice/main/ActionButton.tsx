import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  label, 
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-8 py-5 rounded-full shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] ${
        variant === 'primary' 
          ? 'bg-[#00BAFF] text-white' 
          : 'bg-white text-[#05172C]'
      }`}
    >
      <span 
        className="text-xl font-semibold"
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {label}
      </span>
      <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
    </button>
  );
};
