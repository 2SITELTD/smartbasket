
import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-between w-[336px] h-10 relative">
      {/* Progress Line Background */}
      <div className="absolute top-1/2 left-0 w-[302px] h-[10px] bg-[#F4F5F5] -translate-y-1/2 rounded-full" />
      
      {/* Active Progress Line */}
      <div 
        className="absolute top-1/2 left-0 h-[10px] bg-[#087094] -translate-y-1/2 rounded-full transition-all duration-300"
        style={{ 
          width: `${((currentStep - 1) / (totalSteps - 1)) * 302}px`,
        }}
      />
      
      {/* Step Circles */}
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isPast = stepNumber < currentStep;
        
        return (
          <div
            key={index}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[22px] font-bold transition-all duration-300 ${
              isActive ? 'bg-[#087094] text-white' :
              isPast ? 'bg-[#087094] text-white' :
              'bg-[#F4F5F5] text-[#778080]'
            } ${
              isPast ? 'shadow-md' : ''
            }`}
            style={{ fontFamily: index === 0 ? 'Ploni DL 1.1 AAA' : 'Open Sans Hebrew' }}
          >
            {stepNumber}
          </div>
        );
      })}
    </div>
  );
};
