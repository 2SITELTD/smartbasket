import React from 'react';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  name,
  type = 'text'
}) => {
  const inputClasses = "border border-[#D2D2D2] min-h-12 w-full gap-5 text-[#05172C] mt-2.5 p-5 rounded-xl border-solid";
  
  return (
    <div className="min-w-60 min-h-[66px] flex-1 shrink basis-[0%] max-md:max-w-full">
      <div className="text-[#05172C] text-right max-md:max-w-full">
        {label}
      </div>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          className={`${inputClasses} h-32 resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className={inputClasses}
          style={{ textAlign: 'right' }}
        />
      )}
    </div>
  );
};