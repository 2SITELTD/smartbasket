import React from 'react';

export const AddSubCategory: React.FC = () => {
  return (
    <div className="flex flex-col pr-14 mt-4 w-full text-sm leading-loose text-black max-md:pr-5 max-md:max-w-full">
      <div className="flex w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-2.5 items-center px-5 mt-4 w-full max-md:max-w-full">
        <div className="self-stretch my-auto">
          הוסף תת - קטגוריה חדשה
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28fb974fba68ced5466e936512be8336c85a4be8ec82700f5dca4f1e4848cd6b?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square fill-gray-500"
          alt=""
        />
      </div>
    </div>
  );
};