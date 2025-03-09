import React from 'react';

interface PackageHeaderProps {
  packageName: string;
}

export const PackageHeader: React.FC<PackageHeaderProps> = ({ packageName }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between w-full max-md:max-w-full">
      <div className="flex gap-4 items-center h-full min-w-[240px]">
        <div className="flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center text-black whitespace-nowrap bg-zinc-100 rounded-[217px] w-[83px]">
          <div className="gap-2.5 self-stretch px-0.5 my-auto">0</div>
        </div>
        <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
          <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[41px]" />
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8fe934bfa33f06f11abcec6703ed6bb7ba69f6ed05e7f0deced6b451869eaf?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
            alt=""
          />
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto text-xl font-semibold text-center text-black w-[168px]">
          <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0">
            <div className="flex-1 shrink gap-4 self-stretch px-6 py-5 my-auto w-full bg-white border border-gray-500 border-solid rounded-[85px] max-md:px-5">
              עדכן שינויים
            </div>
          </div>
        </div>
      </div>
      <div className="my-auto text-2xl font-semibold leading-none text-right text-black">
        {packageName}
      </div>
    </div>
  );
};