import React from 'react';

interface SavingsAmountProps {
  amount: number;
}

export const SavingsAmount: React.FC<SavingsAmountProps> = ({ amount }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center p-5 mt-4 w-full text-5xl leading-none text-center text-white whitespace-nowrap bg-red-500 rounded-xl shadow-sm max-md:max-w-full max-md:text-4xl">
      <div className="self-stretch my-auto max-md:text-4xl">החודש!</div>
      <div className="self-stretch my-auto text-7xl leading-none max-md:text-4xl">
        ₪{amount.toFixed(2)}
      </div>
      <div className="self-stretch my-auto max-md:text-4xl">חסכת</div>
    </div>
  );
};

