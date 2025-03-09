import React from 'react';
import { ProgressIndicator } from '../../components/front/questionaire/ProgressIndicator';
import { TrackingCard } from '../../components/front/tracking/TrackingCard';

import { OrderStatus } from '../../components/front/tracking/OrderStatus'; 
import { DeliveryStatus } from '../../components/front/tracking/DeliveryStatus'
import CourierDetails from '../../components/front/tracking/CourierDetails';
import { PaymentSection } from '../../components/front/tracking/PaymentSection';

const Tracking: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[1124px] mx-auto gap-[30px] px-4">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <ProgressIndicator currentStep={3} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[30px] text-right">
        {/* Status Card */}
        <TrackingCard title="מעקב אחרי משלוח" titleWidth={250}>
          <DeliveryStatus />
          <OrderStatus />
        </TrackingCard>

        {/* Order Details */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> */}
          {/* Shipping Details */}
          <TrackingCard title="פרטי משלוח" titleWidth={200}>
            <CourierDetails />
          </TrackingCard>

          {/* Payment Details */}
          <PaymentSection />

        {/* Action Buttons */}
        <div className="flex justify-between gap-4">
          <button
            className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            חזרה לדף בית
          </button>
          <button
            className="w-full h-[52px] border border-[#05172C] text-[#05172C] rounded-full font-semibold text-[20px] leading-[29px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            שמירת פרטים לפעם הבאה
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
