import React from 'react';

interface SubCategoryItemProps {
  name: string;
}

export const SubCategoryItem: React.FC<SubCategoryItemProps> = ({ name }) => {
  return (
    <div className="flex flex-wrap gap-4 items-end mt-4 w-full max-md:max-w-full">
      <div className="flex gap-5 justify-center items-center px-5 w-12 h-12 bg-white shadow-sm min-h-[48px] rounded-[78px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de000aaa7242546180e49eb23af0aea24229a74062b0354bc5e736fe73b0280?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          className="object-contain self-stretch my-auto w-2.5 aspect-[0.83]"
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 shrink text-sm leading-loose text-black basis-[38px] min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex-1 shrink gap-2.5 self-stretch pr-14 w-full text-right max-md:pr-5 max-md:max-w-full">
            תת - קטגוריה:
          </div>
          <div className="flex gap-2.5 items-center pr-14 mt-2.5 w-full whitespace-nowrap max-md:pr-5 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 self-stretch p-5 my-auto w-full rounded-xl border border-solid border-neutral-300 min-h-[48px] min-w-[240px] max-md:max-w-full">
              {name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};