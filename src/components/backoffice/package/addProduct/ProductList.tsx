import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'חלב טרי 3%', price: 8.90, oldPrice: 10.90, quantity: 333, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a10afa1b2401930c43cb868cce158b0ca5bbdf9cda5a92f86464893f1bcbf26e?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030' },
    { id: 2, name: 'לחם אחיד פרוס', price: null, oldPrice: null, quantity: 0, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c305ea162555d81767a956650366833e2212ea1b04274897dfa1053c7b282cb5?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030' },
    { id: 3, name: 'ערגליות תפוח', price: 12.90, oldPrice: 18.90, quantity: 13, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f793706b80419674f5bbc1dcaee0b817081e8ca6153cc55a38601c52d6cb831b?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030' },
    { id: 4, name: 'חלב טרי 3% - תנובה', price: 8.90, oldPrice: 10.90, quantity: 333, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/992576f5ba5dc9f014836f5a61737a16ff629290c35f3304739007d926741847?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030' },
    { id: 5, name: 'חלב טרי 3% - תנובה', price: 8.90, oldPrice: 10.90, quantity: 333, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/314c8e936a62da7ec6b329f93ee3c30ec7f860363f489cc6876b11d1d8299a31?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030' },
  ];

  return (
    <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <ProductItem product={product} />
          {index < products.length - 1 && (
            <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};