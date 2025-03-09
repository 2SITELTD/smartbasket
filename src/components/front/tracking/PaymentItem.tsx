import React from 'react';

interface PaymentItemProps {
  label: string;
  value: React.ReactNode;
}

export const PaymentItem: React.FC<PaymentItemProps> = ({ label, value }) => {
  return (
    <div className="flex gap-3 justify-end items-center w-full max-md:flex-col max-md:items-end">
      <div className="gap-2 text-xl text-slate-900 max-md:w-full max-sm:text-base">
        {value}
      </div>
      <div className="mx-3 my-0 w-px bg-neutral-300 h-[11px]" />
      <div className="text-lg font-semibold leading-none text-right text-slate-900 w-[120px] max-md:mb-2 max-sm:text-lg">
        {label}
      </div>
    </div>
  );
};