import React from 'react';

export const ListsHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/b0bea7aebaa50101778523c7d2ff359ceaf9f94bd043a73ae61341f0d2cd0a95?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
        className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2.89] w-[156px]"
        alt="Company logo"
      />
      <div className="flex flex-col self-stretch my-auto w-32">
        <div className="self-end">הרשימות שלי</div>
        <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
      </div>
    </div>
  );
};
