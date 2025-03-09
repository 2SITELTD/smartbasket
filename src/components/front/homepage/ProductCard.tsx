import React from 'react';
import Heart from '../../Heart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
  name: string;
  id: string;
  price: number;
  originalPrice: number | null;
  image: string;
  isSale: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, originalPrice, image, isSale }) => {
  return (
    <div className=" rounded-lg p-4 h-full relative group">
      {/* Favorite Button - Single Instance */}
      <button 
        className="absolute top-6 left-6 z-10 w-[22px] h-[22px] flex items-center justify-center"
        aria-label="Add to favorites"
      >
        <Heart id={id} entity="product" />
      </button>

      {/* Image Container */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-[150px] object-cover rounded-md"
        />
        {/* Sale Badge - Only show when isSale is true */}
        {isSale && (
          <div className="absolute top-4 right-1 bg-[#FEC740] px-4 py-2 rounded-l-full">
            <span 
              className="text-[#264653] font-semibold text-base"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              !מבצע
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 w-full text-right transition-all duration-300 group">
        <div className="group-hover:opacity-0 group-hover:h-0 transition-all duration-300">
          <h3 
            className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            {name}
          </h3>
          <div className="flex items-baseline gap-3 justify-end">
            <span className="text-#778080] text-[14px] md:text-[22px] font-bold font-['PT_Sans'] ml-auto">
              ₪{price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[#FC4B4E] text-[14px] md:text-[22px] line-through font-['PT_Sans'] font-bold">
                ₪{originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        {/* Add to Cart Button - Shows on Hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full flex items-center justify-center gap-3"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
            aria-label={`Add ${name} to cart`}
          >
            <span className="text-lg">הוספה לעגלה</span>
            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
