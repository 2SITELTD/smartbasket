import React from 'react';

interface ProductItemProps {
  quantity: number;
  name: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  isOutOfStock?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  quantity,
  name,
  currentPrice,
  originalPrice,
  image,
  isOutOfStock
}) => {
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-[30px]">
      {/* Quantity Badge */}
      <div className={`w-[83px] h-[53px] flex items-center justify-center rounded-lg ${
        isOutOfStock ? 'bg-[#FC4B4E]' : 'bg-[#F4F5F5]'
      }`}>
        <span 
          className={`text-[22px] leading-[25px] font-semibold ${
            isOutOfStock ? 'text-white' : 'text-[#05172C]'
          }`}
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {quantity}
        </span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-end gap-5 ml-4">
        <span 
          className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          {name}
        </span>
        <div className="flex gap-6">
          <span 
            className="text-[22px] leading-[25px] font-semibold text-[#FC4B4E]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            {currentPrice}
          </span>
          <span 
            className="text-[22px] leading-[25px] font-semibold text-[#778080]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            {originalPrice}
          </span>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-[50px] h-[60px] bg-[#F6F5F5]">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};
