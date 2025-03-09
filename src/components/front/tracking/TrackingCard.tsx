import React from 'react';
import { Card } from '../../ui/card';

interface TrackingCardProps {
  title: string;
  children: React.ReactNode;
  titleWidth?: number;
}

export const TrackingCard: React.FC<TrackingCardProps> = ({ title, children, titleWidth = 181 }) => {
  return (
    <Card className="p-10 bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[11px]">
          <h2 
            className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            {title}
          </h2>
          <div className="mt-3 bg-sky-500 rounded-sm h-[3px] w-[154px] max-sm:w-full ml-auto" />
          {/* <div 
            className="h-[3px] bg-[#00BAFF] ml-auto" 
            style={{ width: `${titleWidth}px` }}
          /> */}
        </div>
        <div className="h-[1px] w-full bg-[#D2D2D2]" />
        {children}
      </div>
    </Card>
  );
};
