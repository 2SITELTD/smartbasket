
import React from 'react';

export interface ProductInfoProps {
  sku: string;
  stock: number;
  bundleName: string;
  smartBasketPrice: string | number;
  purchasePrice: string | number;
  marketPrice: string | number;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  sku,
  stock,
  bundleName,
  smartBasketPrice,
  purchasePrice,
  marketPrice
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          שם מארז:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={bundleName}
          />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          כמות מלאי:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={stock}
          />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          מק"ט:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={sku}
          />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          מחיר SmartBasket:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={smartBasketPrice}
          />
        </div>
        <div className="text-xs text-right text-gray-500 mt-1">
          זה המחיר שיופיע באדום.
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          מחיר רכישה:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={purchasePrice}
          />
        </div>
        <div className="text-xs text-right text-gray-500 mt-1">
          מחיר מבצע מהספק.
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-sm leading-5 text-right text-slate-900 mb-1">
          מחיר שוק:
        </div>
        <div className="flex items-center px-3 h-[48px] border border-gray-500 border-solid rounded-xl">
          <input 
            type="text" 
            className="w-full h-full text-center" 
            value={marketPrice}
          />
        </div>
        <div className="text-xs text-right text-gray-500 mt-1">
          במבצע? סמן בקופסא.
        </div>
      </div>
    </div>
  );
};
