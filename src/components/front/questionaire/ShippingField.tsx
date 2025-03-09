import React from 'react';

interface ShippingFieldProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const ShippingField: React.FC<ShippingFieldProps> = ({
  label,
  value,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label 
        className="text-[#05172C] text-sm leading-[22px]"
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[#05172C] text-sm"
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
        dir="rtl"
      />
    </div>
  );
};
