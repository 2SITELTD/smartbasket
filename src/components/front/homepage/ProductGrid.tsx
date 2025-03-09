import React from 'react';
import { ProductCard } from '../shop/ProductCard';
import { Product } from '../../../types/product';
import { selectHotProducts } from '../../../store/productSlice';
import { RootState } from '../../../store';

interface ProductGridProps {
  products: Product[];
  rows: number; // Number of rows to display
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, rows }) => {
  // Calculate the number of columns based on the rows prop
  const columns = Math.ceil(products.length / rows); // Calculate columns based on total products and rows
  console.log(columns)
  return (
    <div className="bg-[#f4f5f5] py-2">
      <div className="flex justify-center w-full">
        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] px-4`}> {/* Dynamic columns */}
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;