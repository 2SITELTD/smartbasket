import React from 'react';
import { useSelector } from 'react-redux';
import { selectPaymentInfo } from '../../../store/paymentSlice';
import { PaymentItem } from './PaymentItem';
import { ApplePayIcon } from './ApplePayIcon';

interface PaymentInfo {
  couponCode: string;
  paymentMethod: string;
  cardNumber: string;
}

export const PaymentSection: React.FC = () => {
  const paymentInfo = useSelector(selectPaymentInfo);

  const paymentItems = [
    { label: 'קוד קופון', value: paymentInfo.couponCode },
    {
      label: 'אמצעי תשלום',
      value: (
        <div className="flex items-center gap-2">
          <span className="text-gray-500 ml-10">{paymentInfo.cardNumber}</span>
          <span>-</span>
          <ApplePayIcon />
          <span>{paymentInfo.paymentMethod}</span>
        </div>
      )
    }
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col self-stretch p-5 mx-auto my-0 w-full max-w-screen-lg bg-white rounded-xl shadow-sm max-md:p-4 max-sm:p-3">
        <div className="self-end text-2xl font-semibold leading-none text-right text-slate-900 max-sm:text-xl">
          תשלום
        </div>
        <div className="mt-3 w-full bg-neutral-300 min-h-[1px]" />
        <div className="flex flex-wrap gap-10 justify-between mt-3 w-full max-md:gap-5">
          {paymentItems.map((item, index) => (
            <PaymentItem key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </>
  );
};

