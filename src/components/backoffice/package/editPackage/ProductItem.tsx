import React from 'react';

export interface ProductItemProps {
  quantity: number;
  name: string;
  discountedPrice: number;
  originalPrice: number;
  imageUrl: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  quantity,
  name,
  discountedPrice,
  originalPrice,
  imageUrl
}) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
        <div className="flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center whitespace-nowrap bg-zinc-100 rounded-[217px] text-slate-900 w-[83px]">
          <div className="gap-2.5 self-stretch px-0.5 my-auto">{quantity}</div>
        </div>
        <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
          <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[42px]" />
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5559ec16f2cc8aca45c5d946d7e5b66f21dfb645627db1ab4a7a21e83431cd0f?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
            alt=""
          />
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-sky-500 shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84c6dd8d8714abd73f1e8cd339c5f72656afe95ca4befffd6bccbdf4505df525?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center self-stretch px-px py-1 my-auto text-2xl font-semibold leading-none text-center whitespace-nowrap rounded-none text-slate-900 w-[156px]">
          <div className="flex gap-9 items-start px-4 py-4 w-full rounded-3xl bg-blend-normal bg-zinc-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebd7e4f65381fe9ab415e7e831538a7e96dfb6844f8974fccaf4619a07934fe?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
              className="object-contain shrink-0 aspect-[0.93] w-[13px]"
              alt=""
            />
            <div className="gap-2.5 self-stretch px-0.5">1</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 self-stretch my-auto min-w-[240px]">
        <div className="flex gap-5 items-center h-full min-w-[240px]">
          <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-2xl font-semibold leading-none">
            <div className="text-slate-900">{name}</div>
            <div className="flex gap-6 items-start mt-5 whitespace-nowrap">
              <div className="text-red-500">{discountedPrice}</div>
              <div className="text-gray-500 line-through">{originalPrice}</div>
            </div>
          </div>
          <div className="flex gap-2.5 self-stretch py-2.5 w-px h-full">
            <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[60px]" />
          </div>
          <img
            loading="lazy"
            src={imageUrl}
            className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.83] w-[66px]"
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};