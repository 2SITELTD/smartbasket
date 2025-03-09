
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourierDetails } from '../../../store/courierSlice';
import { Card } from '../../ui/card';
import { Pencil, Phone } from 'lucide-react';

const CourierDetails: React.FC = () => {
  const courierDetails = useSelector(selectCourierDetails);

  const renderDetailCard = (
    title: string, 
    orderNumber: string | undefined,
    fields: { label: string; value: string }[], 
    icon: React.ReactNode
  ) => (
    <Card className="w-full bg-white rounded-xl p-4">
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#778080] text-xs">
            {orderNumber && (
              <span className="flex items-center gap-1">
                <span>{orderNumber}</span>
                <span>:מס׳ הזמנה</span>
              </span>
            )}
          </span>
          <span className="text-sm font-semibold text-[#05172C]">{title}</span>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#D2D2D2] mb-3" />

        {/* Content */}
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            {icon}
          </div>

          {/* Details */}
          <div className="flex-grow space-y-2">
            {fields.map((field, index) => (
              <div key={index} className="flex justify-end gap-2 items-center">
                <div className="flex items-center gap-2 w-full">
                  <span className="text-[#05172C] text-sm flex-grow text-right">
                    {field.value}
                  </span>
                  <div className="w-[1px] h-3 bg-[#D2D2D2]" />
                  <span className="text-[#05172C] text-sm font-semibold w-20 text-right">
                    {field.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="flex flex-col gap-3 w-full px-2">
      {/* Shipping Details */}
      {renderDetailCard(
        "פרטי משלוח",
        courierDetails.shipment.orderNumber,
        [
          { label: "שם", value: courierDetails.shipment.name },
          { label: "כתובת ודירה", value: courierDetails.shipment.street }
        ],
        <Pencil className="w-4 h-4 text-[#05172C]" />
      )}

      {/* Courier Details */}
      {renderDetailCard(
        "פרטי השליח",
        undefined,
        [
          { label: "שם", value: courierDetails.courier.name },
          { label: "מס׳ טלפון", value: courierDetails.courier.phone }
        ],
        <Phone className="w-4 h-4 text-[#05172C]" />
      )}
    </div>
  );
};

export default CourierDetails;
