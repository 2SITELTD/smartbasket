
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { MeatDepartmentBanner } from './MeatDepartmentBanner';
import { selectFilteredProducts } from '../../../store/selectors';
import { ResultsAndSorting } from './ResultsAndSorting';
import { useMobile } from '../../../hooks/use-mobile';



export const ProductGrid: React.FC = () => {
  const isMobile = useMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const currentProducts = useSelector(selectFilteredProducts);

  const productsPerPage = isMobile ? 10 : 15;
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);

  // Dynamically get current page products
  const getCurrentPageProducts = () => {
    const start = currentPage * productsPerPage;
    return currentProducts.slice(start, start + productsPerPage);
  };

  const pageProducts = getCurrentPageProducts();
  const topProducts = isMobile ? pageProducts.slice(0, 4) : pageProducts.slice(0, 6);
  const bottomProducts = isMobile ? pageProducts.slice(4, 10) : pageProducts.slice(6, 15);

  return (
    <div className="flex flex-col gap-8">
      {/* Results and Sorting */}
      <ResultsAndSorting 
        totalItems={currentProducts.length}
        currentPage={currentPage + 1}
        itemsPerPage={productsPerPage}
      />

      {/* Top 6 Products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-2">
        {topProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Meat Department Banner */}
      <MeatDepartmentBanner />

      {/* Bottom Products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bottomProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-[#00BAFF]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
