import React from 'react';
import { StatusItem } from './StatusItem';

interface DeliveryStatusProps {
  className?: string;
}

export const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ className = '' }) => {

  return (
    <div className={`flex flex-wrap gap-10 justify-between items-center px-4 py-0 max-w-[984px] max-md:gap-8 max-md:px-6 max-md:py-0 max-sm:flex-col max-sm:gap-5 max-sm:items-end max-sm:px-4 max-sm:py-0 ${className}`}>
      <StatusItem
        label="זמן הגעה"
        value={'90 דקות'}
        showDivider={true}
      />
      <div className="self-stretch my-auto text-lg font-semibold leading-none text-right text-slate-900 max-sm:text-lg">
        מצב משלוח
      </div>
    </div>
  );
};

