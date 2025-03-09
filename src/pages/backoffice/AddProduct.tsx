import React from 'react';
import { ProductFilter } from '../../components/backoffice/package/addProduct/ProductFilter.tsx';
import { ProductList } from '../../components/backoffice/package/addProduct/ProductList.tsx';
import { AddProductButton } from '../../components/backoffice/package/addProduct/AddProductButton.tsx';

export const AddProduct: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch p-10 bg-white rounded-2xl shadow-sm max-md:px-5">
      <div className="flex flex-col items-end w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[120px]">
          <div className="self-end">מלאי מוצרים</div>
          <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
        </div>
      </div>
      <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full font-semibold max-md:max-w-full">
          <AddProductButton />
          <div className="self-stretch my-auto text-2xl leading-none text-right text-black">
            סינון מוצרים
          </div>
        </div>
        <div className="flex mt-4 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
        <ProductFilter />
      </div>
      <ProductList />
    </div>
  );
};