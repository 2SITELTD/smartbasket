import React from 'react';

interface TrackingStatusProps {
  currentStatus: 'shipping' | 'preparing' | 'delivered';
}

export const TrackingStatus: React.FC<TrackingStatusProps> = ({ currentStatus }) => {
  const statuses = ['shipping', 'preparing', 'delivered'];
  const currentIndex = statuses.indexOf(currentStatus);

  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className="flex w-full items-center gap-[26px]">
        {/* Progress Bar Background */}
        <div className="w-full h-[8px] bg-[#F4F5F5] rounded-full" />
      </div>
      
      {/* Active Progress Bar */}
      <div className="relative w-[571px] h-[7px] bg-[#000] rounded-full shadow-md" 
           style={{ 
             width: `${((currentIndex + 1) / statuses.length) * 100}%`,
             transition: 'width 0.3s ease-in-out'
           }} 
      />

      {/* Status Buttons */}
      <div className="flex justify-between w-full gap-[26px]">
        <button 
          className={`h-[52px] px-[30px] rounded-full font-semibold text-[20px] leading-[29px] ${
            currentStatus === 'shipping' ? 'bg-[#F4F5F5] text-[#778080]' : ''
          }`}
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          משלוח בדרך
        </button>
        <button 
          className={`h-[52px] px-[30px] rounded-full font-semibold text-[20px] leading-[29px] ${
            currentStatus === 'preparing' ? 'bg-[#00BAFF] text-white' : ''
          }`}
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          הזמנה בהכנה
        </button>
        <button 
          className={`h-[52px] px-[30px] rounded-full font-semibold text-[20px] leading-[29px] ${
            currentStatus === 'delivered' ? 'bg-[#000] text-white shadow-md' : ''
          }`}
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          הזמנה הושלמה
        </button>
        <button 
          className={`h-[52px] px-[30px] rounded-full font-semibold text-[20px] leading-[29px] ${
            currentStatus === 'delivered' ? 'bg-[#000] text-white shadow-md' : ''
          }`}
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          נמסר ללקוח
        </button>
      </div>
    </div>
  );
};
