import React from 'react';

export const WeeklyOffer: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-center mb-4">הצעת השבוע</h3>
      <div className="relative">
        <img 
          src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/box.png" 
          alt="Weekly offer" 
          className="w-full h-[321px] object-cover rounded-xl"
        />
        <div className="absolute top-4 right-4 bg-[#FEC740] px-4 py-2 rounded-l-full">
          <span className="text-[#264653] font-semibold">מבצע!</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <h4 className="text-2xl font-semibold text-[#264653]">מארז ירוקים</h4>
        <div className="flex justify-center gap-6 mt-2">
          <span className="text-[#FC4B4E] text-2xl font-bold">₪69.90</span>
          <span className="text-[#76808A] text-2xl font-bold line-through">₪89.90</span>
        </div>
        <p className="text-[#264653] mt-4">
          פה יהיה כתוב פירוט מלא של החבילה ומה היא כוללת, עם הנעה לפעולה.
        </p>
        <button className="w-full bg-[#00BAFF] text-white rounded-full py-4 mt-6">
          הוספה לעגלה
        </button>
      </div>
    </div>
  );
};