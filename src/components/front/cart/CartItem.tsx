
import React from "react";
import { QtyControls } from "../QtyControls";
import { useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../../../store/cartSlice";
import Heart from "../../Heart";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <article className="bg-white w-full mt-[30px] shadow-lg lg:shadow-none max-md:mt-4 px-4 py-4 rounded-xl">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between gap-4">
        {/* Left side - Controls */}
        <div className="flex items-center gap-4">
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
            <Heart id={id} entity='product' size={'small'} />
          </button>
          <button 
            onClick={() => dispatch(removeItem(id))}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <QtyControls 
            id={id} 
            quantity={quantity} 
            size="small"
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />

        </div>
        
        {/* Right side - Product info and image */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <h4 className="text-lg font-semibold text-right">{name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-500 font-semibold">₪{price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through">₪{originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          <div className="w-16 h-16">
            <img src={image} alt={name} className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* First Row: Image (30%) and Content (70%) */}
        <div className="flex justify-between gap-4">
          {/* Content - 70% */}
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-right mb-2">{name}</h4>
            <div className="flex justify-end items-start lg:items-center gap-2">
              <span className="text-red-500 font-semibold">₪{price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through">₪{originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          {/* Image - 30% */}
          <div className="w-[30%] aspect-square">
            <img src={image} alt={name} className="w-full h-full object-cover rounded" />
          </div>
        </div>

        {/* Second Row: Controls */}
        <div className="flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
              <Heart id={id} entity='product' size={'small'} />
            </button>
            <button 
              onClick={() => dispatch(removeItem(id))}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <QtyControls 
            id={id} 
            quantity={quantity} 
            size="small"
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        </div>
      </div>
    </article>
  );
};
