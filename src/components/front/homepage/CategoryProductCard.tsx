import React from 'react';

interface CategoryProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  isSale: boolean;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  isSale 
}) => {
  return (
    <div className="relative rounded-lg w-[344px] h-[109px] flex flex-row-reverse overflow-hidden">
      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-center px-4 text-right">
        {/* Product Name */}
        <h4 
          className="text-[22px] leading-[25px] font-semibold text-[#05172C] mb-2"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {name}
        </h4>
        
        {/* Price Container */}
        <div className="flex items-center justify-start gap-2 ml-5">
          {originalPrice ? (
            <>
              <span className="text-[22px] font-bold text-[#FC4B4E] font-['PT_Sans']">
                ₪{price.toFixed(2)}
              </span>
              <span className="text-[22px] font-bold text-[#778080] line-through font-['PT_Sans']">
                ₪{originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[22px] font-bold text-[#05172C] font-['PT_Sans']">
              ₪{price.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Image Container - Left side */}
      <div className="w-[94px] h-[109px] flex-shrink-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sale Badge */}
      {isSale && (
        <div className="absolute top-2 right-1 bg-[#FEC740] px-2 py-0 rounded-l-full">
          <span 
            className="text-xs leading-6 text-[#264653]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            מבצע!
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryProductCard;
