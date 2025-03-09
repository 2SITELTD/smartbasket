import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface ZReportButtonProps {
  label: string;
  onClick?: () => void;
}

export const ZReportButton: React.FC<ZReportButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between gap-4 w-full bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-[30px]"
    >
      <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#00BAFF] rounded-full shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)]">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="text-white text-[13px]" 
        />
      </div>
      <span 
        className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {label}
      </span>
    </button>
  );
};
