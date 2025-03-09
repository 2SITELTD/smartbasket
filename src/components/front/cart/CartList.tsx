
import React from "react";
import { CartItem } from "./CartItem";
import { CartItemProps } from "../../../types/cartTypes";

interface CartListProps {
  cartItems: CartItemProps[];
  size?: 'big' | 'small';
}

export const CartList: React.FC<CartListProps> = ({ cartItems, size='big' }) => {
  return (
    <div className="text-right justify-center items-stretch bg-white flex min-w-[300px] flex-col flex-1 pl-4 pr-4 py-6 rounded-[18px] max-md:rounded-none shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)]">
      {/* Title - Only show on desktop */}
      <div className="hidden md:flex w-full flex-col text-2xl text-[#05172C] font-semibold text-right leading-none max-md:max-w-full">
        <div className="text-right flex w-[160px] max-w-full flex-col items-stretch ml-auto">
          <div className='text-right'>
            <h3>עגלת קניות</h3>
          </div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px] ml-auto" />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[652px] flex-col  items-stretch justify-center flex-1 mt-4 max-md:mt-0 max-md:max-w-full">
        {/* <div className=" self-center flex min-h-px w-full" /> */}
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-start bg-white shadow-md p-4 rounded-md mt-4">
            <h3 className="text-red-500 text-2xl font-semibold">העגלה שלך ריקה</h3>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        )}
      </div>
    </div>
  );
};
