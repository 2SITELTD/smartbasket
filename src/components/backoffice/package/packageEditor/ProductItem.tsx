
import React from 'react';

interface ProductItemProps {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  quantity: number;
  image: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  id,
  name,
  price,
  originalPrice,
  quantity,
  image,
}) => {
  return (
    <div className="flex flex-col mt-4 w-full p-4 bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex gap-7 justify-center items-center p-5 text-2xl font-semibold leading-none text-center text-black whitespace-nowrap bg-zinc-100 rounded-[217px] w-[83px]">
          <div className="gap-2.5 self-stretch px-0.5">{quantity}</div>
        </div>
        <div className="text-2xl font-semibold text-right text-slate-900">
          {name}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-5 items-center">
        <img
          loading="lazy"
          src={image}
          className="object-contain rounded-lg w-[120px] h-[120px]"
          alt={name}
        />
        
        <div className="flex flex-col">
          <div className="flex gap-5 items-center mb-2">
            <div className="font-semibold text-lg">SKU: {id}</div>
          </div>
          
          <div className="flex gap-6 items-start mt-2 whitespace-nowrap">
            <div className="text-xl font-semibold text-red-500">{price}</div>
            <div className="text-xl font-semibold text-gray-500 line-through">{originalPrice}</div>
          </div>
          
          <div className="flex gap-4 mt-3">
            <div className="flex gap-2.5 justify-center items-center px-2.5 bg-white shadow-sm h-[48px] rounded-[103px] w-[48px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2f28069a93a8f7f3537f15220aa3cd94450224651d7728752b2c393afc02537?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain self-stretch my-auto aspect-square w-[13px]"
                alt=""
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center px-2.5 bg-sky-500 shadow-sm h-[48px] rounded-[103px] w-[48px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6521e63a4916b308eea0ef11f645ea7a15b289de07626d19c50c1e658dc617b1?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain self-stretch my-auto aspect-square w-[13px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
