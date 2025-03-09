import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  helperText?: string;
  multiline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, helperText, multiline }) => {
  const inputClasses = "gap-5 p-5 mt-2.5 w-full rounded-xl border border-solid border-neutral-300";

  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
      <div className="flex flex-col w-full">
        <label className="text-right text-black">{label}</label>
        {helperText && <div className="mt-2.5 text-right text-black">{helperText}</div>}
        {multiline ? (
          <textarea className={`${inputClasses} min-h-[132px]`} value={value} readOnly />
        ) : (
          <div className={inputClasses}>{value}</div>
        )}
      </div>
    </div>
  );
};

export default InputField;