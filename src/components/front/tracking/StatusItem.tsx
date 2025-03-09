import React from 'react';

interface StatusItemProps {
  label: string;
  value: string;
  showDivider: boolean;
}

export const StatusItem: React.FC<StatusItemProps> = ({ label, value, showDivider }) => {
  return (
    <div className="flex gap-5 justify-end items-center self-stretch my-auto max-md:gap-4 max-sm:justify-end max-sm:w-full">
      <div className="flex gap-3 justify-end items-center self-stretch my-auto max-md:gap-2.5">
        <div className="self-stretch my-auto text-lg *:leading-none text-right text-slate-900 max-sm:text-lg">
          {value}
        </div>
        {showDivider && (
          <div className="flex gap-2.5 justify-start self-stretch px-0 py-px w-px h-full">
            <div className="flex flex-1 w-full bg-neutral-300 min-h-[11px]" />
          </div>
        )}
        <div className="self-stretch my-auto text-lg font-semibold leading-none text-slate-900 max-sm:text-xl">
          {label}
        </div>
      </div>
    </div>
  );
};

