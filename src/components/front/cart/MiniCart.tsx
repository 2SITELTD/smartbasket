import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { X, Trash2 } from 'lucide-react';
import { selectCartItems, selectCart, removeItem, incrementQuantity, decrementQuantity } from '../../../store/cartSlice';
import { Link } from 'react-router-dom';
import { QtyControls } from '../QtyControls';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiniCart: React.FC<MiniCartProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector(selectCartItems);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[380px] md:w-[450px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 max-h-screen overflow-hidden">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">עגלת קניות</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="border-b p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{cart.totalItems} פריטים</span>
            <span className="text-green-600">חסכת ₪{cart.totalSaving.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 sm:p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p>העגלה שלך ריקה</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-2 sm:gap-3 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <button 
                      className="p-1 hover:text-red-500 transition-colors"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <Trash2 size={16} color='red'/>
                    </button>
                    <QtyControls 
                      id={item.id} 
                      quantity={item.quantity} 
                      size="small"
                      onIncrease={handleIncreaseQuantity}
                      onDecrease={handleDecreaseQuantity}
                    />
                  </div>
                  <div className="flex flex-1 items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 text-right">{item.name}</h3>
                      <div className="flex justify-end items-baseline gap-2 mb-1">
                        <span className="text-sm font-semibold text-red-600">₪{item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">₪{item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">₪{cart.totalPrice.toFixed(2)}</span>
            <span>:סה״כ</span>
          </div>
          <Link 
            to="/cart" 
            className="block text-center text-sky-500 hover:text-sky-600 py-2 font-semibold"
            onClick={onClose}
          >
            הצג עגלה
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
