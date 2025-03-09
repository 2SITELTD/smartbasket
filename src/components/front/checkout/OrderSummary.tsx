
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Card } from '../../ui/card';
import { DeliveryNTotal } from './DeliveryNTotal';

export const OrderSummary: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Card className="p-10 max-md:p-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[11px]">
          <h2 
            className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            סיכום הזמנה
          </h2>
          <div className="h-[3px] w-[119px] bg-[#00BAFF] ml-auto" />
        </div>
        <div className="h-[1px] w-full bg-[#D2D2D2]" />
        <div className="p-5 bg-white shadow-md rounded-lg max-md:p-3">
          <DeliveryNTotal totalPrice={cart.totalPrice} />
        </div>
      </div>
    </Card>
  );
};
