import React from 'react';
import { useSelector } from 'react-redux';
import  { RootState } from '../../../store';
import { Button } from '../../ui/button';


interface OrderItemProps {
  productId: string;
  quantity: number;
}

export const OrderItem: React.FC<OrderItemProps> = ({ productId, quantity }) => {
  const products = useSelector((state: RootState) => state.products.products);
  console.log(products)  
  const orderProducts = products.find(product => product.id === productId);

  if (!orderProducts) {
    return null;
  }

    
  return (
    <div className="flex justify-between items-center mt-5 w-full">

      {/* Left side - quantity */}
      <div className="text-lg font-medium text-black">

      <Button
        className="absolute bg-white shadow-lg hover:bg-white rounded-full" 
      >
        {quantity}
      </Button>
      </div>
      {/* Right side - product details */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <div className="text-xl font-semibold text-right">{orderProducts.name}</div>
          <div className="flex gap-4 items-center mt-2 text-sm">
            <div className="text-black">₪{orderProducts.price.toFixed(2)}</div>
            {orderProducts.originalPrice && <div className="text-red-500 line-through">₪{orderProducts.originalPrice?.toFixed(2)}</div>}
          </div>
        </div>
        <img
          src={orderProducts.image}
          alt={orderProducts.name}
          className="object-contain h-20 rounded-lg w-[66px]"
        />
      </div>
    </div>
  );
};