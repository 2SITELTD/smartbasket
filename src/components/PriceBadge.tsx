import React from 'react';

interface PriceBadgeProps {
  title: string;
  price: number;
  originalPrice: number;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ title, price, originalPrice }) => {
  return (
    <div className="hidden md:block bg-[#FEC740] p-6 rounded-r-full shadow-lg w-[485px] relative overflow-hidden">
      {/* Circle background with prices */}
      <div className="absolute -left-8 bottom-0 translate-y-[calc(50%-30px)] w-[241px] h-[241px] bg-[#f8e097] rounded-full">
        <div className="relative h-full w-full">
          <span 
            className="absolute top-12 right-16 text-base leading-[13px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            רק ב-
          </span>
          <span className="absolute top-16 left-20 text-[#FC4B4E] text-[38px] font-bold leading-[50px] font-['PT_Sans']">
            ₪{price.toFixed(2)}
          </span>
          <span className="absolute top-24 left-20 text-[#778080] text-[15px] font-bold leading-[50px] line-through font-['PT_Sans']">
            ₪{originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="relative z-10 text-right ml-[-250px]" style={{ transform: 'translateX(-75px)' }}> {/* Content above the circle */}
        <div style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          <p className="hidden md:block text-[22px] leading-[48px] mb-4">מבצע חם!</p>
          <h3 className="text-[30px] leading-[48px] mb-4">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PriceBadge;