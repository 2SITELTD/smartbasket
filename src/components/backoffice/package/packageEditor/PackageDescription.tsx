import React from 'react';

interface PackageDescriptionProps {
  extendedDescription: string;
  shortDescription: string;
}

export const PackageDescription: React.FC<PackageDescriptionProps> = ({
  extendedDescription,
  shortDescription,
}) => {
  return (
    <div className="flex flex-wrap gap-3 p-5 mt-4 w-full text-sm text-right bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="leading-loose text-black max-md:max-w-full">
          תיאור מורחב:
        </div>
        <div className="flex-1 shrink gap-5 p-5 mt-2.5 leading-6 text-black rounded-xl border border-solid border-neutral-300 size-full max-md:max-w-full">
          {extendedDescription}
        </div>
      </div>
      <div className="flex gap-4 self-start min-h-[220px] min-w-[240px] w-[316px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <div className="leading-loose text-black">תיאור קצר:</div>
          <div className="flex-1 shrink gap-5 p-5 mt-2.5 leading-6 text-black rounded-xl border border-solid border-neutral-300 size-full">
            {shortDescription}
          </div>
        </div>
      </div>
    </div>
  );
};