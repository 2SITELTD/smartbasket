import React from 'react';
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface ProductCardProps {
  id: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  imageSrcSet: string;
}

const HotProductCard: React.FC<ProductCardProps> = ({
  id, // Add id to props
  name,
  currentPrice,
  originalPrice,
  imageSrcSet,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Navigate to the ProductDetail page
  };

  return (
    <article 
      className="flex w-full flex-col items-center relative cursor-pointer" 
      onClick={handleCardClick} // Add onClick handler
    >
      <div className="bg-white flex flex-col shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch relative aspect-[0.887] w-full rounded-xl">
        <div className="z-50 absolute top-[5px] left-[5px] rounded-full p-2 cursor-pointer">
          <Heart className="w-5 h-5 text-black" />
        </div>
  
        <img
          loading="lazy"
          srcSet={imageSrcSet}
          className="absolute h-full w-full object-cover inset-0 rounded-xl"
          alt={name}
        />
      </div>
      
      <h3 className="text-[rgba(5,23,44,1)] text-2xl font-semibold leading-none text-center mt-[13px]">
        {name}
      </h3>
  
      <div className="flex items-stretch gap-[13px] text-[22px] font-bold whitespace-nowrap leading-[50px] mt-[5px]">
        <span className="text-[rgba(252,75,78,1)] text-right">₪{currentPrice}</span>
       {originalPrice && <span className="text-[rgba(119,128,138,1)] line-through">₪{originalPrice}</span>}
      </div>
    </article>
  );
};

export default HotProductCard;