import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Product } from '../../../types/productTypes';

interface PackageDetailCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  items: Product[];
  isOpen: boolean;
  onToggle: (id: string) => void;
  toggleHeart: (id: string) => void;
  isFavorite: boolean;
}

const PackageDetailCard: React.FC<PackageDetailCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  description,
  image,
  items,
  isOpen,
  onToggle,
  toggleHeart,
  isFavorite,
}) => {
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteItems');
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }
  }, []);
  
  const handleToggleItemHeart = (itemId: string) => {
    const updatedFavorites = favoriteItems.includes(itemId)
      ? favoriteItems.filter((id) => id !== itemId)
      : [...favoriteItems, itemId];

    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
  };
  items.map((item) => {
    console.log(item)
  });
  return (
    <div className="w-full max-w-[1104px] mx-auto bg-white rounded-lg shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col  gap-4 sm:gap-6 md:gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <button
                className={`w-[45px] h-[45px] sm:w-[53px] sm:h-[53px] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                  isFavorite ? "bg-[#00BAFF]" : "bg-white"
                }`}
                onClick={() => toggleHeart(id)}
              >
                <FontAwesomeIcon
                  icon={isFavorite ? solidHeart : regularHeart}
                  className={`text-[0.75rem] sm:text-[0.835rem] ${
                    isFavorite ? "text-white" : "text-[#00BAFF]"
                  }`}
                />
              </button>
              <button 
                className="h-[45px] sm:h-[52px] px-4 sm:px-[30px] bg-[#00BAFF] text-white rounded-full text-base sm:text-[20px] font-semibold shadow-md"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                שלח לעגלה
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-[#FC4B4E] text-2xl sm:text-[36px] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                ₪{price.toFixed(2)}
              </span>
              {originalPrice && <span className="text-[#778080] text-lg sm:text-[22px] line-through" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                ₪{originalPrice.toFixed(2)}
              </span>}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[#05172C] text-xl sm:text-[24px] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              {title}
            </span>
            <div className="w-[111px] h-[3px] bg-[#00BAFF] mt-2"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-[20px] leading-[1.4] sm:leading-[22px]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          {description}
        </p>

        {/* Items Section */}
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-lg shadow-md p-4 sm:p-5 gap-4 sm:gap-0">
              <div className="flex items-center gap-4 order-2 sm:order-1">
                <button
                  className={`w-[45px] h-[45px] sm:w-[53px] sm:h-[53px] rounded-full bg-white shadow-md flex items-center justify-center`}
                  onClick={() => handleToggleItemHeart(item.id)}
                  aria-label="Add to favorites"
                >
                  <FontAwesomeIcon 
                    icon={favoriteItems.includes(item.id) ? solidHeart : regularHeart} 
                    className="text-[#05172C] w-[11px] h-[11px] sm:w-[13px] sm:h-[13px]" 
                  />
                </button>
                <button
                  className="h-[45px] sm:h-[52px] px-4 sm:px-[30px] border border-[#778080] text-[#778080] rounded-full text-base sm:text-[20px] font-semibold"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  שלח בנפרד
                </button>
              </div>
              <div className="flex items-center gap-2 sm:gap-6 order-3 sm:order-2">
                <span className="text-[#FC4B4E] text-lg sm:text-[22px] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                  ₪{item.price.toFixed(2)}
                </span>
                {item.originalPrice && <span className="text-[#778080] text-lg sm:text-[22px] line-through" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                  ₪{item.originalPrice.toFixed(2)}
                </span>}
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between order-1 sm:order-3">
                <span className="text-[#000] text-lg sm:text-[22px]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                  {item.name}
                </span>
                <img src={item.image} alt={item.name} className="w-[50px] h-[60px] sm:w-[66px] sm:h-[80px] object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetailCard;