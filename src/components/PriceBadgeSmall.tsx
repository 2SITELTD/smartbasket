import React from 'react';

interface PriceBadgeSmallProps {
  title: string;
  price: number;
  originalPrice: number;
}

const PriceBadgeSmall: React.FC<PriceBadgeSmallProps> = ({ title, price, originalPrice }) => {
  return (
    <div className="absolute bottom-[20px] w-[164px] h-[69px] bg-[#FEC740] rounded-l-full shadow-md overflow-hidden">
      {/* White circle background */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[116px] h-[115px] bg-[#f8de8f] rounded-full" />
      
      {/* Content */}
      <div className="relative z-10 p-3 flex flex-col h-full justify-center">
        <h3 
          className="text-[16px] leading-6 text-[#05172C] font-semibold mb-1 truncate"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[#FC4B4E] text-base font-bold font-['PT_Sans']">
            ₪{price.toFixed(2)}
          </span>
          <span className="text-[#05172C] text-sm line-through font-['PT_Sans'] font-bold">
            ₪{originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceBadgeSmall;
