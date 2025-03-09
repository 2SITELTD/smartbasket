
import React from "react";
import { CartSummaryProps } from "../../../types/cartTypes";

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalItems,
  totalSavings,
  totalAmount
}) => {
  return (
    <div className="items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-60 gap-2.5 text-2xl font-semibold leading-none w-full md:w-[365px] p-4 md:p-10 rounded-[18px] max-md:mt-4">
      <div className="self-stretch flex min-w-60 w-full flex-col items-stretch my-auto">
        {/* Items count */}
        <div className="flex w-full max-w-full flex-col items-stretch text-[#05172C] text-right">
          <div className="text-base md:text-xl">יש {totalItems} מוצרים בעגלה שלך</div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-[160px] items-endmt-2 md:ml-auto" />
        </div>

        <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4" />

        {/* Savings */}
        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-[#FC4B4E] flex w-full flex-col text-white text-right justify-center mt-4 p-4 rounded-xl">
          <div className="flex w-full items-center justify-between">
            <div className="text-lg md:text-[22px]">₪{totalSavings?.toFixed(2)}</div>
            <div className="text-base md:text-[18px]">:סה״כ חסכת</div>
          </div>
        </div>

        {/* Total */}
        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex w-full flex-col text-[#05172C] text-right justify-center mt-4 p-4 rounded-xl">
          <div className="flex w-full justify-between text-lg md:text-[22px]">
            <div>₪{totalAmount.toFixed(2)}</div>
            <div className="text-base md:text-[18px]">:סה״כ לתשלום</div>
          </div>
        </div>

        {/* Coupon Form */}
        <form className="w-full text-sm font-normal leading-loose mt-4">
          <div className="text-[#05172C] text-right">קוד קופון:</div>
          <input
            type="text"
            placeholder="הכניסו כאן קוד קופון"
            className="border border-[color:var(--Shade-1---Gray,#D2D2D2)] w-full gap-5 text-[#264653] mt-2.5 p-5 rounded-xl border-solid input-right-placeholder"
          />
        </form>

        {/* Notes Form */}
        <div className="w-full text-sm font-normal leading-loose mt-4 flex flex-col flex-grow">
          <div className="text-[#05172C] text-right">הערה להזמנה:</div>
          <textarea
            placeholder="הוסיפו כאן הערות"
            className="border border-[color:var(--Shade-1---Gray,#D2D2D2)] w-full gap-5 text-[#264653] mt-2.5 p-5 rounded-xl border-solid flex-grow min-h-[100px] input-right-placeholder"
          />
        </div>
      </div>
    </div>
  );
};
