import React from 'react';

interface SectionCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white text-right rounded-lg shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-8 ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-[11px]">
          <h2 
            className="text-[22px] leading-[25px] text-[#05172C] font-semibold"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            {title}
          </h2>
          <div className="w-full h-[3px] bg-[#00BAFF]" />
        </div>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
};
