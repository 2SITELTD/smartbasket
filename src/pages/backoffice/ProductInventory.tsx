import React from 'react';
import { ProductCard } from '../../components/backoffice/inventory/ProductCard.tsx';
import { FilterSection } from '../../components/backoffice/inventory/FilterSection.tsx';
import { PackageCard } from '../../components/backoffice/inventory/PackageCard.tsx';
import { useSelector } from 'react-redux';
import { selectInventory } from '../../store/inventorySlice.ts';
import { selectPackages, selectProducts } from '../../store/inventorySlice.ts'





export const ProductInventory: React.FC = () => {

  const products = useSelector(selectProducts);
  const packages = useSelector(selectPackages);
  console.log(products, packages)

  return (
    <div className="flex gap-8 justify-center">
      <div className="flex flex-col flex-1 shrink p-10 w-full bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-end w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[120px]">
            <div className="self-end">מלאי מוצרים</div>
            <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
          </div>
        </div>
        <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
        <FilterSection />
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} item={pkg} />
        ))}
        <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};