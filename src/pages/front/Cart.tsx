
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cartSlice';
import Banners from '../../components/front/homepage/Banners';
import ProductShowcase from '../../components/front/packageFront/ProductShowcase';
import { CartSummary } from '../../components/front/cart/CartSummary';
import ActionButton from '../../components/front/cart/ActionButton';
import { CartList } from '../../components/front/cart/CartList';

const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  return (
    <div className='bg-[#f4f5f5] pt-5'>
      <div className="mx-auto max-w-[1100px] w-full max-md:mt-0 bg-[#f4f5f5]">
        {/* Mobile Title */}
        <div className="md:hidden px-4 mb-4">
          <h2 className="text-2xl font-bold text-[#05172C] text-center">עגלת קניות</h2>
          <div className="w-[160px] h-[3px] bg-[#00BAFF] mx-auto mt-2" />
        </div>
        
        <div className="flex items-stretch gap-[30px] flex-wrap md:flex-nowrap">
          {/* Cart List - Show first on mobile */}
          <div className="w-full order-1 md:order-2 md:w-[62%] px-4 md:px-0">
            <CartList cartItems={cartItems} />
          </div>
          
          {/* Cart Summary - Show second on mobile */}
          <div className="w-full order-2 md:order-1 md:w-[38%] px-4 md:px-0">
            <CartSummary 
              totalAmount={totalAmount.totalPrice} 
              totalItems={totalAmount.totalItems}
              totalSavings={totalAmount.totalSaving}  
            />
          </div>
        </div>

        {/* Action Button - Show at bottom on mobile */}
        <div className="fixed bottom-0 left-0 right-0 md:relative z-50 px-4 py-3 bg-white md:bg-transparent md:p-0">
          <ActionButton />
        </div>

        {/* Additional Sections */}
        <div className="w-full -mx-4 sm:mx-0 mt-8">
          <Banners />
        </div>
        <div className="w-full -mx-4 sm:mx-0">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
};

export default Cart;
