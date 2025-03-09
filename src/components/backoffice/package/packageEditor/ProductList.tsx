import React from 'react';
import { ProductItem } from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  quantity: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </>
  );
};