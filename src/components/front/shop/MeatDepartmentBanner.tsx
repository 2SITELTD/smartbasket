import React from 'react';

export const MeatDepartmentBanner: React.FC = () => {
  return (
    <div className="w-full h-[170px] bg-[#FEC740] rounded-xl shadow-lg relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h3 className="text-2xl text-white font-medium mb-4">
          מבחר ענק של מבצעים<br/>במחלקת בשרים
        </h3>
        <div className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 bg-white rounded-full" />
          <span className="text-sm">בשרים</span>
        </div>
      </div>
    </div>
  );
};