import React from 'react';

interface TrackingDetailsProps {
  orderNumber: string;
  customerName: string;
  street: string;
  phone: string;
}

export const TrackingDetails: React.FC<TrackingDetailsProps> = ({
  orderNumber,
  customerName,
  street,
  phone
}) => {
  return (
    <div className="grid grid-cols-2 gap-6 p-5 bg-white shadow-md rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          מספר הזמנה:
        </h3>
        <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {orderNumber}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          שם לקוח:
        </h3>
        <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {customerName}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          כתובת:
        </h3>
        <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {street}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          טלפון:
        </h3>
        <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          {phone}
        </p>
      </div>
    </div>
  );
};
