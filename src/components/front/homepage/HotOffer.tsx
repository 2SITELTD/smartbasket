import React from 'react';
import CountdownTimer from './CountdownTimer';

const HotOffer: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-[345px]">
        <div>
            <h3 className="text-2xl font-semibold text-[#05172C] mb-4 text-center" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                הצעת השבוע
            </h3>
        </div>
      <div className="relative mb-4 -mx-6">
                <div className="bg-gray-100 overflow-hidden flex justify-center">
                  <img
                    src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/weekly-special.png"
                    alt="Weekly Special"
                    className="w-[calc(100%+3rem)] h-auto object-contain"
                  />
                </div>
        <div className="absolute top-4 right-4 bg-[#FEC740] p-2 rounded-lg">
          <span className="text-[#264653] font-semibold">מבצע!</span>
        </div>
      </div>
      <h4 className="text-lg font-semibold text-[#264653] mb-2" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
        מארז ירקות
      </h4>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-[#FC4B4E] text-xl font-bold">₪69.90</span>
        <span className="text-sm text-[#778080] line-through">₪89.90</span>
      </div>
      <p className="text-sm text-[#264653] mb-4" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
        פה יהיה כתוב פרטים מלאים של החבילה ומה היא כוללת, עם הנעה לפעולה.
      </p>
      <CountdownTimer days={365} hours={2} minutes={28} seconds={15} />
      <button className="w-full mt-4 py-3 bg-[#00BAFF] text-white font-semibold rounded-full" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
        הוספה לעגלה
      </button>
    </div>
  );
};

export default HotOffer;
