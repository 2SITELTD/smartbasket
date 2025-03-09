import React from "react";
import { InventoryItem } from "../../../types/inventoryTypes";
import { selectProductById } from "../../../store/productSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface ProductCardProps {
  item: InventoryItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const product = useSelector((state: RootState) =>
    selectProductById(state, item.id)
  );
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className={`flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center text-black whitespace-nowrap ${item.quantity > 0 ? "bg-zinc-100" : "bg-red-600"} rounded-full`}>
            <div className="gap-2.5 self-stretch px-0.5 my-auto min-w-[40px]">
              {item?.quantity}
            </div>
          </div>
          <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
            <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[41px]" />
          </div>
          {item.isOutOfStock ? (
            <div className="flex gap-4 justify-center items-center self-stretch px-6 py-5 my-auto text-xl font-semibold text-center text-black bg-sky-500 border border-sky-500 border-solid rounded-[85px] w-[168px] max-md:px-5">
              <div className="self-stretch my-auto">הצג מוצר</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7981bcdfa5feb662c0add127892b9b35e499ca210145745dd42e2bcd3afc8cc7?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.33]"
                alt=""
              />
            </div>
          ) : (
            <div className="flex gap-3 items-center self-stretch px-6 py-5 my-auto text-xl font-semibold text-center text-black bg-white border border-gray-500 border-solid rounded-[85px] max-md:px-5">
              <div className="self-stretch my-auto">הסתר מוצר</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c803626776bd16231a7aeb893bb59de536cc7659d7accd258c19bed9c05bf2?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.33]"
                alt=""
              />
            </div>
          )}
          <div className="gap-4 self-stretch px-6 py-5 my-auto text-xl font-semibold text-center text-black bg-sky-500 border border-sky-500 border-solid rounded-[85px] w-[135px] max-md:px-5">
            ערוך מוצר
          </div>
        </div>
        <div className="flex gap-5 self-stretch my-auto ">
          <div className="flex gap-5 items-center h-full">
            <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-2xl font-semibold leading-none ">
              <div className="text-black">{product.name}</div>
              <div className="flex gap-6 items-start mt-5 whitespace-nowrap">
              <div
                  className={`text-black line-through ${
                    product.originalPrice ? "visible" : "invisible"
                  }`}
                >
                  ₪{product.originalPrice?.toFixed(2)}
                </div>
                <div className="text-black">₪{product.price.toFixed(2)}</div>
              </div>
            </div>
            <div className="flex gap-2.5 self-stretch py-2.5 w-px h-full">
              <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[60px]" />
            </div>
            <div className="w-[66px] h-[80px]">
              <img
                loading="lazy"
                src={product.image}
                className="object-contain shrink-0  my-auto rounded-lg aspect-[0.83] "
                alt={product.name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
    </>
  );
};
