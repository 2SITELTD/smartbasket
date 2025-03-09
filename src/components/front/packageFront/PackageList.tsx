import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import PackageDetailCard from './PackageDetailCard';
import { useSelector } from 'react-redux';
import { selectPackages } from '../../../store/packageSlice';

const PackageList: React.FC = () => {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [favoritePackages, setFavoritePackages] = useState<string[]>([]);
  useEffect(() => {
    // Load favorite packages from local storage
    const storedFavorites = localStorage.getItem('favoritePackages');
    if (storedFavorites) {
      setFavoritePackages(JSON.parse(storedFavorites));
    }
  }, []);

  const packages = useSelector(selectPackages);
  console.log(packages)
  if (!packages) {
    return <div>Product not found</div>;
  }



  const handleToggle = (id: string) => {
    console.log(id)
    setOpenCardId(openCardId === id ? null : id);
  };

  const toggleHeart = (id: string) => {
    setFavoritePackages((prev) => {
      const updatedFavorites = prev.includes(id)
        ? prev.filter((pkgId) => pkgId !== id)
        : [...prev, id];

      // Update local storage
      localStorage.setItem('favoritePackages', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  packages.map((packageItem) => {
    console.log(packageItem.price.toFixed(2))
  } )
  return (
    <div className="bg-[#f4f5f5] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 
            className="text-[2rem] sm:text-[2.625rem] md:text-[3.5rem] leading-[1.2] font-bold text-[#05172C]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            המארזים השווים שלנו
          </h3>
        </div>
        <div className="flex flex-col gap-8 items-center">
          
          {packages.map((packageItem, index) => (
            <div key={packageItem.id} className="w-full max-w-[69rem]">
              <ProductCard 
                id={packageItem.id}
                title={packageItem.title}
                price={packageItem.price}
                originalPrice={packageItem.originalPrice}
                description={packageItem.description}
                image={packageItem.image}
                items={packageItem.items}
                isOpen={openCardId === packageItem.id}
                onToggle={handleToggle}
                isReversed={index % 2 === 1}
                isFavorite={favoritePackages.includes(packageItem.id)}
                toggleHeart={toggleHeart}

              />
              {openCardId === packageItem.id && (
                <div className="mt-4">
                  <PackageDetailCard 
                    id={packageItem.id}
                    title={packageItem.title}
                    price={packageItem.price}
                    originalPrice={packageItem.originalPrice}
                    description={packageItem.description}
                    image={packageItem.image}
                    items={packageItem.items}
                    isOpen={openCardId === packageItem.id} 
                    onToggle={handleToggle} 
                    toggleHeart={toggleHeart}
                    isFavorite={favoritePackages.includes(packageItem.id)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
