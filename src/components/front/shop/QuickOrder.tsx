import React from 'react';

export const QuickOrder: React.FC = () => {
  return (
    <div className="w-full h-[200px] bg-[#00BAFF] rounded-xl shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h3 className="text-2xl font-semibold text-white">הזמנה מהירה</h3>
        <button className="bg-white/60 text-[#264653] font-bold rounded-full px-8 py-2">
          לסלים שלי
        </button>
      </div>
    </div>
  );
};