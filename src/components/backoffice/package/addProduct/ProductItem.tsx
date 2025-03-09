import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number | null;
    oldPrice: number | null;
    quantity: number;
    image: string;
  };
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto">
        <div className={`flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center text-black whitespace-nowrap ${product.quantity === 0 ? 'bg-red-500' : 'bg-zinc-100'} rounded-[217px] w-[83px]`}>
          <div className="gap-2.5 self-stretch px-0.5 my-auto">{product.quantity}</div>
        </div>
        <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
          <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[41px]" />
        </div>
        <div className={`flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto ${product.quantity === 0 ? 'bg-red-500' : 'bg-sky-500'} shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]`}>
          <img
            loading="lazy"
            src={`http://b.io/ext_${product.id * 2 + 1}-`}
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 self-stretch my-auto min-w-[240px]">
        <div className="flex gap-5 items-center h-full min-w-[240px]">
          <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-2xl font-semibold leading-none">
            <div className="text-black">{product.name}</div>
            {product.price && product.oldPrice && (
              <div className="flex gap-6 items-start mt-5 whitespace-nowrap">
                <div className="text-black">₪{product.price.toFixed(2)}</div>
                <div className="text-black line-through">₪{product.oldPrice.toFixed(2)}</div>
              </div>
            )}
          </div>
          <div className="flex gap-2.5 self-stretch py-2.5 w-px h-full">
            <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[60px]" />
          </div>
          <img
            loading="lazy"
            src={product.image}
            className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.83] w-[66px]"
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
};