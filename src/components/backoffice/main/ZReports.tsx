import React from 'react';
import { SectionCard } from './SectionCard';
import { ZReportButton } from './ZReportButton';

export const ZReports: React.FC = () => {
  return (
    <SectionCard title="Z ניהול דוחות">
      <div className="grid grid-cols-2 gap-[30px] items-start">
        <div className="bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-[30px] space-y-4">
          <ZReportButton label= "סוף יום - Z דוח" />
          <ZReportButton label="חודשי - Z דוח" />
        </div>
        
        <div className="bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-[30px] space-y-4">
          <ZReportButton label="רבעוני - Z דוח" />
          <ZReportButton label="שנתי - Z דוח" />
        </div>
      </div>
    </SectionCard>
  );
};
