import React from 'react'

export const DeliveryNTotal= ({totalPrice}) => {
  return (
    <div className="flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
        משלוח: אקספרס
      </span>
      <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
        ₪35
      </span>
    </div>
    <div className="h-[1px] w-full bg-[#D2D2D2]" />
    <div className="flex justify-between items-center">
      <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
        סה"כ לתשלום:
      </span>
      <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
        ₪{totalPrice.toFixed(2)}
      </span>
    </div>
  </div>
  )
}


