
import React from 'react';

interface HeaderBadgeProps {
  price: string;
  originalPrice: string;
  text: string;
}

const HeaderBadge: React.FC<HeaderBadgeProps> = ({ price, originalPrice, text }) => {
  return (
    <div className="badge-section absolute w-[485px] h-[170px] bg-yellow-400 shadow-md">
      <div className="price-placeholder absolute w-[241px] h-[241px] bg-white rounded-full"></div>
      <div className="text-section absolute">
        <p className="text-lg font-normal text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {text}
        </p>
        <p className="text-sm font-normal text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {text}
        </p>
      </div>
      <div className="sale-price absolute">
        <p className="text-2xl font-bold text-red-500" style={{ fontFamily: 'PT Sans' }}>
          {price}
        </p>
        <p className="text-base font-bold text-gray-500" style={{ fontFamily: 'PT Sans' }}>
          {originalPrice}
        </p>
      </div>
    </div>
  );
};

export default HeaderBadge;
