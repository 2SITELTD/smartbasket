import React from 'react';

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto whitespace-nowrap basis-0 min-w-[240px]">
      <div className="flex flex-col w-full">
        <div className="text-right">{label}</div>
        <div className="flex gap-10 justify-between items-center px-5 py-5 mt-2.5 w-full rounded-xl border border-solid border-neutral-300 min-h-[48px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b697542857ff6e40ecf62fc6b9d39be02d83eb535d28bfe9009fca2112d69087?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <div className="self-stretch my-auto">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default SelectField;