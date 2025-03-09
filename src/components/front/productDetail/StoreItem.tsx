import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, incrementQuantity, decrementQuantity } from '../../../store/cartSlice';
import { CartItemProps } from '@/types/cartTypes';
import { toast } from 'sonner';
import { QtyControls } from '../QtyControls';
import Heart from '../../Heart';

type StoreItemProps = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  socialIcons: { iconAlt: string; iconSrc: string }[];
  description: string;
  image: string;
};

const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  originalPrice,
  socialIcons,
  description,
  image
}) => {
  const [productQty, setProductQty] = useState(1);
  const dispatch = useDispatch();



  const handleIncreaseQuantity = () => {
    setProductQty(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQty(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="flex flex-col max-md:ml-0 h-full">
      <div className="flex flex-col max-md:mt-0 max-md:max-w-full">
        {/* Product Name and Price Section */}
        <div className="flex flex-col items-end text-right">
          <div className="text-lg font-semibold text-slate-900 mb-1">{name}</div>
          <div className="flex items-center gap-2 mb-4">
            {originalPrice && (
              <span className="text-base text-gray-500 line-through">₪{originalPrice}</span>
            )}
            <span className="text-xl font-bold text-red-500">₪{price}</span>
          </div>
        </div>

        

        

        {/* Social Actions */}
        {/* <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
              <img src={socialIcons[0].iconSrc} alt={socialIcons[0].iconAlt} className="w-3 h-3" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
              <Heart id={id} entity='product' size='small' />
            </button>
          </div>
        </div> */}

        {/* Product Description */}
        {/* <div className="text-sm text-right text-slate-700">{description}</div> */}
      </div>
    </div>
  );
};

export default StoreItem;
