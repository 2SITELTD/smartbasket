
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressIndicator } from '../questionaire/ProgressIndicator';
import { Card } from '../../ui/card';
import { RootState } from '../../../store';
import { selectCartTotal } from '../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../../store/orderSlice';
import { clearCart } from '../../../store/cartSlice';
import { Order, OrderStatus } from '../../../types/orderTypes';
import { setSavingsAmount } from '../../../store/userSlice';
import { selectUserDetails } from '../../../store/userSlice';
import { useMobile } from '../../../hooks/use-mobile';

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUserDetails);
  const cart = useSelector((state: RootState) => state.cart);
  const totalAmount = useSelector(selectCartTotal);
  const isMobile = useMobile();

  const onFinish = () => {
    // Create new order
    const newOrder: Order = {
      id: `ORD-${Date.now()}`, // Generate unique ID
      date: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      products: cart.items.map(item => ({
        productId: item.id,
        quantity: item.quantity
      })),
      total: totalAmount.totalPrice,
      status: 'הזמנה נוצרה' as OrderStatus
    };

    // Dispatch actions
    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    dispatch(setSavingsAmount(cart.totalSaving));

    // Navigate to tracking
    navigate('/checkout/tracking');
  }
  
  const onTrackOrder = () => {
    navigate('/checkout/tracking');
  }

  return (
    <div className="flex flex-col w-full max-w-[1124px] mx-auto gap-[30px] px-4 lg:px-0">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <ProgressIndicator currentStep={3} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[30px]">
        {/* Success Message */}
        <Card className="p-6 lg:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-end gap-[11px]">
              <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                תודה על ההזמנה שלך!
              </h2>
              <div className="h-[3px] w-[214px] bg-[#00BAFF]" />
            </div>
            
            {/* Savings Banner */}
            <div className="mt-4 p-5 bg-[#FC4B4E] rounded-lg">
              <div className="flex justify-center items-center">
                <h2 className="text-[40px] lg:text-[68px] leading-[1] font-semibold text-white text-center" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                  היום חסכת ₪{cart.totalSaving.toFixed(2)}!
                </h2>
              </div>
            </div>
          </div>
        </Card>

        {/* Information and Receipt Section */}
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Receipt Information Card */}
          <Card className="w-full lg:w-[45rem] mx-auto">
            <div className="flex flex-col p-4 lg:p-10">
              <div className="flex flex-col items-center lg:items-end gap-[11px] mb-6">
                <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                  מידע וקבלה
                </h2>
                <div className="h-[3px] w-[114px] bg-[#00BAFF]" />
              </div>

              <div className="bg-white rounded-xl">
                <div className="flex flex-col gap-6 p-4">
                  {/* Personal Details */}
                  <div className={`space-y-2 ${!isMobile ? 'border-r-2 border-[#b0b1b1] pr-14' : ''}`}>
                    <h3 className="font-semibold text-right">:פרטים אישיים</h3>
                    <div className="text-[#666666] text-right space-y-1">
                      <p>{user.userInfo.firstName} {user.userInfo.lastName}</p>
                      <p dir="ltr" className="text-right">{user.userInfo.phone}</p>
                      <p dir="ltr" className="text-right">{user.userInfo.email}</p>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-right">:כתובת למשלוח</h3>
                    <div className="text-[#666666] text-right space-y-1">
                      <p>{`${user.shippingDetails.street} ${user.shippingDetails.houseNumber}, נס ציונה`}</p>
                      <p>{`דירה מס׳ ${user.shippingDetails.apartment}`}</p>
                      <p>{`מיקוד ${user.shippingDetails.postalCode}`}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col lg:flex-row gap-3 mt-6">
                <button
                  onClick={onFinish}
                  className="flex-1 h-[52px] border-2 border-[#05172C] text-[#05172C] rounded-full font-semibold text-[20px] leading-[29px] hover:bg-gray-50"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  שלח לי קבלה
                </button>
                <button
                  onClick={onTrackOrder}
                  className="flex-1 h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px] hover:bg-[#00a8e6]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  עקוב אחרי הזמנה
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
