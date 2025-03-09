
import React from "react";
import { useDispatch } from "react-redux";
import { Product } from '../../../types/productTypes';
import { addItem } from '../../../store/cartSlice';
import Heart from '../../Heart';
import { RootState } from "../../../store";
import { CartItemProps } from "../../../types/cartTypes";

interface ProductCardProps {
  isOpen: boolean;
  id: string;
  price: number;
  originalPrice: number;
  image: string;
  onToggle: (id: string) => void;
  isReversed: boolean;
  isFavorite: boolean;
  toggleHeart: (id: string) => void;
  title: string;
  description: string;
  items: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  description,
  image,
  isOpen,
  onToggle,
  isReversed,
  isFavorite,
  toggleHeart,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const cartItem: CartItemProps = {
      id,
      name:title,
      price,
      originalPrice,
      quantity: 1,
      isGroup: true,
      image
    }
    dispatch(addItem(cartItem));
  }
  const onIndividualAddToCart = () => {
    dispatch(addItem({id, name:title, price, originalPrice, quantity: 1, isGroup: false, image}))
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-10 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row gap-8 w-full max-w-[69rem] mx-auto items-center">
        <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-full gap-8`}>
          {/* Image Section */}
          <div className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md w-[21.25rem]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Content Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md w-[39.625rem]">
            <div className="flex flex-col h-full">
              {/* Main Content Area */}
              <div className="flex-1 p-4 md:p-8 pb-0">
                {/* Header */}
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '0 0 10%' }}>
                    {/* Heart Component */}
                    <button
                      className={`w-12 h-12 md:w-[3.313rem] md:h-[3.313rem] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${isFavorite ? "bg-[#00BAFF]" : "bg-white"}`}
                    >
                      <Heart id={id} entity='package' size={'small'} />
                    </button>
                  </div>
                  <div style={{ flex: '0 0 45%' }}>
                    {/* Price/Original Price Component */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xl md:text-[2.25rem] font-bold text-[#FC4B4E]"
                      style={{ fontFamily: "Ploni ML v2 AAA" }}
                    >
                      ₪{price.toFixed(2)}
                    </span>
                    <span
                      className="text-lg md:text-[1.375rem] text-[#778080] line-through"
                      style={{ fontFamily: "Ploni ML v2 AAA" }}
                    >
                      ₪{originalPrice.toFixed(2)}
                    </span>
                  </div>
                  </div>
                  <div style={{ flex: '0 0 45%' }}>
                    {/* Title Component */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <span
                      className="text-lg md:text-[1.5rem] font-bold text-[#05172C]"
                      style={{ fontFamily: "Ploni DL 1.1 AAA" }}
                    >
                      {title}
                    </span>
                    <div className="w-full h-[0.188rem] bg-[#00BAFF]"></div>
                  </div>
                </div>
                </div>

                {/* Description */}
                <p
                  className="text-base md:text-[1.25rem] text-[#05172C] mt-6 text-center md:text-right"
                  style={{ fontFamily: "Ploni ML v2 AAA" }}
                >
                  {description}
                </p>
              </div>

              {/* Actions */}
              <div className="p-4 md:p-8 flex flex-wrap md:flex-nowrap items-center justify-center gap-4">
                {/* Heart Button */}
                <button
                  className="flex-1 md:flex-none h-12 md:h-[3.313rem] px-4 md:px-10 bg-[#00BAFF] text-white rounded-full text-base md:text-[1.5rem] font-semibold shadow-md"
                  style={{ fontFamily: "Ploni DL 1.1 AAA" }}
                  onClick={() => onAddToCart()}
                >
                  שלח לעגלה
                </button>
                <button
                  className="flex-1 md:flex-none h-12 md:h-[3.313rem] px-4 md:px-10 border border-[#778080] text-[#778080] rounded-full text-base md:text-[1.5rem] font-semibold"
                  style={{ fontFamily: "Ploni DL 1.1 AAA" }}
                  onClick={() => onToggle(id)}
                >
                  לפירוט המארז
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        {/* Image */}
        <div className="relative mb-4">
          <img src={image} alt={title} className="w-full h-48 object-contain rounded-lg" />
        </div>

        {/* Three Column Layout: Heart, Price, Title */}
        <div className="flex w-full mb-2">
          {/* Heart Column - 10% */}
          <div style={{ flex: '0 0 10%' }}>
            <button
              className={`w-12 h-12 md:w-[3.313rem] md:h-[3.313rem] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 `}
            >
              <Heart id={id} entity='package' size={'small'} />
            </button>
          </div>

          {/* Price Column - 30% */}
          <div style={{ flex: '0 0 30%' }}>
            <div className="flex flex-col items-center gap-4">
              <span
                className="text-2xl md:text-[2.25rem] font-bold text-[#FC4B4E]"
                style={{ fontFamily: "Ploni ML v2 AAA" }}
              >
                ₪{price.toFixed(2)}
              </span>
              <span
                className="text-md md:text-[1.375rem] text-[#778080] line-through mt-[-15px]"
                style={{ fontFamily: "Ploni ML v2 AAA" }}
              >
                ₪{originalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Title Column - 60% */}
          <div style={{ flex: '0 0 60%' }}>
            <div className="flex flex-col items-center md:items-end text-center md:text-right justify-around">
              <span
                className="text-xl md:text-[1.5rem] font-bold text-[#05172C]"
                style={{ fontFamily: "Ploni DL 1.1 AAA" }}
              >
                {title}
              </span>
              <div className="w-[80%] h-[0.188rem] bg-[#00BAFF] mt-2"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#05172C] text-right mb-6">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            className="w-full py-3 bg-[#00BAFF] text-white rounded-full text-base font-semibold shadow-md"
            onClick={() => onAddToCart()}
          >
            שלח לעגלה
          </button>
          <button
            className="w-full py-3 border border-[#778080] text-[#778080] rounded-full text-base font-semibold"
            onClick={() => onToggle(id)}
          >
            לפירוט המארז
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
