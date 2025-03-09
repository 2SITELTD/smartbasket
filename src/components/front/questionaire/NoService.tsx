import React from 'react';

interface NoServiceProps {
  onClose: () => void;
}

export const NoService: React.FC<NoServiceProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-[11px] w-full max-w-[625px]">
      {/* Title and Message */}
      <h2 
        className="text-[24px] leading-[27px] text-[#05172C] font-semibold"
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        מצטערים אבל זה נראה שאנחנו עדיין לא מגיעים לאזור שלך.
      </h2>
      
      {/* Blue Divider */}
      <div className="w-full h-[3px] bg-[#00BAFF]" />
    </div>
  );
};