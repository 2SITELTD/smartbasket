import React from 'react';
import { SectionCard } from './SectionCard';
import { ReportButton } from './ReportButton';

export const GeneralReports: React.FC = () => {
  return (
    <SectionCard title={<div className="text-right">ניהול דוחות כללי</div>}>
      <div className="grid grid-cols-3 gap-[30px]">
        <ReportButton label="דוחות משלוחים" />
        <ReportButton label="דוחות הזמנות לקוחות" />
        <ReportButton label="דוחות הזמנות מרכז" />
      </div>
    </SectionCard>
  );
};
