import React from 'react';

export const SavingsHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-end w-full text-2xl leading-none text-right text-slate-900 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[287px]">
        <div className="self-end">כמה חסכת החודש?</div>
        <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
      </div>
    </div>
  );
};

