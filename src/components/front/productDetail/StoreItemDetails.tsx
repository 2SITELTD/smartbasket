import React from 'react';
import ProductBottomDetails from './productBottomDetails';

export type StoreItemDetailsProps = {
  categories: string[];
  tags: string[];
  sku: string;
  description: string;
};

const StoreItemDetails: React.FC<StoreItemDetailsProps> = ({ categories, tags, sku, description }) => {
  return (
    <div className="flex flex-col w-full">
      <ProductBottomDetails categories={categories} tags={tags} sku={sku} />
      <div className="flex shrink-0 mt-9 h-px bg-neutral-300 max-md:max-w-full" />
      <div className="mt-9 ml-3.5 text-base leading-6 text-right text-slate-700 max-md:max-w-full">{description}</div>
    </div>
  );
};

export default StoreItemDetails;
