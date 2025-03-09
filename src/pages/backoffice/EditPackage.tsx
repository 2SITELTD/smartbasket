
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../components/backoffice/package/editPackage/ProductItem';
import { ProductInfo } from '../../components/backoffice/package/editPackage/ProductInfo';
import { TagSection } from '../../components/backoffice/package/editPackage/TagSection';
import { DescriptionSection } from '../../components/backoffice/package/editPackage/DescriptionSection.tsx';
import { selectInventory, selectQuantityByPackageId } from '../../store/inventorySlice';
import { selectPackageById } from '../../store/packageSlice';
import { RootState } from '../../store';

export const EditPackage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const packageItem = useSelector((state: RootState) => selectPackageById(state, packageId));
  const packageProducts = packageItem.items;
  const inventoryItem = useSelector((state: RootState) => selectQuantityByPackageId(state, packageId));
  const [isOpen, setIsOpen] = useState(true);
  const inventoryItems = useSelector(selectInventory);
  const products = packageItem.items;

  // Create an array of product details
  const productDetails = packageProducts.map((product) => {
    // Find the corresponding inventory item
    const inventoryItem = inventoryItems.find(
      (item) => item.id === product.id && !item.isPackage
    );

    // If the inventory item is found, return the desired properties
    if (inventoryItem) {
      return {
        id: inventoryItem.id,
        quantity: inventoryItem.quantity,
        name: product.name,
        discountedPrice: product.price,
        originalPrice: product.originalPrice,
        imageUrl: product.image,
        stock: inventoryItem.quantity
      };
    }

    // Return null or a default object if not found
    return null;
  }).filter(item => item !== null);

  // Check if any product is out of stock
  const hasOutOfStockProduct = productDetails.some(product => product?.stock === 0);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex flex-col p-5 bg-white rounded-xl shadow-sm mx-auto max-w-[69rem]">
      {/* Display warning banner only if any product is out of stock */}
      {hasOutOfStockProduct && (
        <div className="flex justify-between w-full text-2xl font-semibold leading-none text-center text-white max-md:max-w-full mb-4">
          <div className="flex flex-1 shrink gap-4 items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
            <div className="flex flex-1 shrink gap-7 justify-center items-center self-stretch p-5 my-auto w-full bg-red-500 rounded-lg basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-center self-stretch px-0.5 my-auto min-w-[240px] max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/207808443036d30b512ce781d9e5a6e1665ee1f3e2bdc180e31000d92eb54072?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  alt=""
                />
                <div className="self-stretch my-auto max-md:max-w-full">
                  שימו לב המארז ירד מהחנות כי יש חוסר באחד מהמוצרים
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fe6f2b604af776c9d7f667c36f4bec1a9b97aea0635c3bef23ba4f0c122c32?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-10 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex gap-4 items-center h-full min-w-[240px]">
          <div className="flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center text-white whitespace-nowrap bg-red-500 rounded-[217px] w-[83px]">
            <div className="gap-2.5 self-stretch px-0.5 my-auto">{inventoryItem}</div>
          </div>
          <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
            <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[41px]" />
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto text-xl font-semibold text-center text-slate-900 w-[168px]">
            <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0">
              <div className="flex-1 shrink gap-4 self-stretch px-6 py-5 my-auto w-full bg-white border border-gray-500 border-solid rounded-[85px] max-md:px-5 h-[48px] flex items-center justify-center">
                עדכן שינויים
              </div>
            </div>
          </div>
        </div>
        <div onClick={toggleOpen} className="my-auto cursor-pointer text-2xl font-semibold leading-none text-right text-slate-900">
          {packageItem.title}
        </div>
      </div>
      <div className="flex mt-4 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
      
      {/* Product list - only this part toggles open/closed */}
      {isOpen && (
        <div className="w-full">
          {productDetails.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      )}
      
      {/* Package info and image side by side */}
      <div className="flex flex-wrap gap-5 justify-between mt-4">
        <div className="flex-1 min-w-[60%]">
          <ProductInfo
            sku={packageItem.id}
            stock={inventoryItem}
            bundleName={packageItem.title}
            smartBasketPrice={String(packageItem.price)}
            purchasePrice={String(packageItem.originalPrice)}
            marketPrice={String(packageItem.originalPrice)}
          />
          <TagSection />
        </div>
        <div className="w-[312px] bg-white rounded-xl shadow-sm p-5">
          <div className="relative w-full h-[250px]">
            <div className="absolute right-0 top-0 z-10 py-1 text-sm text-right text-black">
              <div className="flex shrink-0 bg-amber-300 shadow-sm h-[31px] rounded-[71.392px_0px_0px_71.392px]" />
              <div className="z-10 mt-1 mb-0 max-md:mx-2.5 max-md:mb-2.5 absolute right-2 top-1">
                מבצע!
              </div>
            </div>
            <img 
              src={packageItem.image || "https://via.placeholder.com/250"} 
              alt={packageItem.title}
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
      
      {/* Description section with short and long descriptions side by side */}
      <DescriptionSection
        longDescription={packageItem.description}
        shortDescription={packageItem.description}
      />
    </div>
  );
};
