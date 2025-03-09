import React from 'react';
import { GeneralManagement } from '../../components/backoffice/main/GeneralManagement';
import { PackageManagement } from '../../components/backoffice/main/PackageManagement';
import { GeneralReports } from '../../components/backoffice/main/GeneralReports';
import { ZReports } from '../../components/backoffice/main/ZReports';

export const Main: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 max-w-[1104px] mx-auto">
        {/* General Management Section */}
        <GeneralManagement />

        {/* Package Management Section */}
        <PackageManagement />

        {/* General Reports Section */}
        <GeneralReports />

        {/* Z Reports Section */}
        <ZReports />
      </div>
    </div>
  );
};

