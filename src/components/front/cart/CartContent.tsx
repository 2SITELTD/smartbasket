import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Card } from '../../ui/card';

export const CartContent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Card className="p-4 sm:p-10 w-full max-w-[547px]">
  <div className="flex flex-col gap-4">
    <div className="h-[1px] w-full bg-[#D2D2D2]" />

    {/* Cart Items */}
    <div className="flex flex-col gap-3 sm:gap-[10px]">
      {cart.items.map((item) => (
        <div key={item.id} className="flex items-center gap-3 sm:gap-5 justify-between">
          
          {/* Quantity Controls */}
          <button className='bg-white shadow-lg rounded-full w-10 h-10 sm:w-[52px] sm:h-[52px]'>
            {item.quantity}
          </button>

          {/* Product Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-end">
              <h3 
                className="text-base sm:text-[22px] leading-[20px] sm:leading-[25px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                {item.name}
              </h3>
              <div className="flex gap-4 sm:gap-6">
                <span 
                  className="text-base sm:text-[22px] leading-[20px] sm:leading-[25px] font-semibold text-[#FC4B4E]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  ₪{item.price.toFixed(2)}
                </span>
                {item.originalPrice && (
                  <span 
                    className="text-sm sm:text-[22px] leading-[18px] sm:leading-[25px] font-semibold text-[#778080] line-through"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  >
                    ₪{item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="w-10 h-12 sm:w-[42px] sm:h-[51px] bg-[#F6F5F5] rounded overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Change Shipping Button */}
    <button 
      className="w-full h-12 sm:h-[52px] border border-[#778080] text-[#778080] rounded-full text-base sm:text-[20px] font-normal"
      style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
    >
      שינוי פרטי משלוח
    </button>
  </div>
</Card>

  );
};
