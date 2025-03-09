
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ProgressIndicator } from '../questionaire/ProgressIndicator';
import { Card } from '../../ui/card';
import { CartContent } from '../cart/CartContent';
import { DeliveryNTotal } from './DeliveryNTotal';

export const PaymentForm: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const onBack = () => {
    console.log("onBack");
    navigate('/checkout'); // Navigate to the CheckoutForm route
  };

  const onNext = () => {
    console.log("onNext");
    navigate('/checkout/confirmation'); // Navigate to the OrderConfirmation route
  };

  return (
    <div className="flex flex-col w-full max-w-[1124px] mx-auto gap-[30px] text-right">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <ProgressIndicator currentStep={2} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-[30px]">
        {/* Order Summary - Will be on top in mobile view */}
        <Card className="flex-1 p-10 max-md:p-5 order-2 lg:order-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[11px] text-center lg:text-end">
              <h2 
                className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                סיכום הזמנה
              </h2>
              <div className="h-[3px] w-[119px] bg-[#00BAFF] mx-auto lg:ml-auto lg:mr-0" />
            </div>
            <div className="h-[1px] w-full bg-[#D2D2D2]" />
            <div className="flex flex-col gap-4">
              <CartContent />
              {/* Order Details */}
              <div className="p-5 bg-white shadow-md rounded-lg max-md:p-3">
                <DeliveryNTotal totalPrice={cart.totalPrice} />
              </div>
            </div>
          </div>
        </Card>

        {/* Left Column - Payment Methods */}
        <div className="flex flex-col gap-[30px] w-full lg:w-[547px] order-1 lg:order-1">
          <Card className="p-10 max-md:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[11px]">
                <h2 
                  className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  שיטת תשלום
                </h2>
                <div className="h-[3px] w-[125px] bg-[#00BAFF] ml-auto" />
              </div>
              <div className="h-[1px] w-full bg-[#D2D2D2]" />

              {/* Payment Methods */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-[10px]">
                  <button className="flex items-center justify-center h-[86px] border border-[#778080] rounded-lg p-[11px]">
                    <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/gpay.png" alt="Google Pay" className="h-[14px]" />
                  </button>
                  <button className="flex items-center justify-center h-[86px] border border-[#778080] rounded-lg p-[11px]">
                    <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/paypal1.png" alt="PayPal" className="h-[14px]" />
                  </button>
                  <button className="flex items-center justify-center h-[86px] border border-[#778080] rounded-lg p-[11px]">
                    <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/applepay.png" alt="Apple Pay" className="h-[14px]" />
                  </button>
                </div>

                {/* Credit Card Form */}
                <div className="p-5 bg-white shadow-md rounded-lg">
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label 
                        className="text-[14px] text-[#05172C]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        שם בעל הכרטיס:
                      </label>
                      <input
                        type="text"
                        className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label 
                        className="text-[14px] text-[#05172C]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        מספר כרטיס אשראי:
                      </label>
                      <input
                        type="text"
                        className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label 
                          className="text-[14px] text-[#05172C]"
                          style={{ fontFamily: 'Ploni ML v2 AAA' }}
                        >
                          תוקף:
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                          style={{ fontFamily: 'Ploni ML v2 AAA' }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label 
                          className="text-[14px] text-[#05172C]"
                          style={{ fontFamily: 'Ploni ML v2 AAA' }}
                        >
                          CVC / CVV:
                        </label>
                        <input
                          type="text"
                          maxLength={4}
                          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                          style={{ fontFamily: 'Ploni ML v2 AAA' }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={onBack}
                className="flex-1 h-[52px] border border-[#00BAFF] text-[#00BAFF] rounded-full font-semibold text-[20px] leading-[29px]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                חזרה
              </button>
              <button
                onClick={onNext}
                className="flex-1 h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                המשך
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
