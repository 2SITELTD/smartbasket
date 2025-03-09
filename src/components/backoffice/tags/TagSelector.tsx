import React, { useState } from 'react';

interface TagOption {
  id: number;
  name: string;
}

interface TagSelectorProps {
  label: string;
  options: TagOption[];
}

const TagSelector: React.FC<TagSelectorProps> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState<TagOption | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: TagOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <div className="text-sm leading-loose text-right text-black max-md:max-w-full">
        {label}
      </div>
      <div className="flex gap-4 justify-center mt-2.5 w-full max-md:max-w-full">
        <div className="flex gap-5 justify-center items-center px-4 my-auto bg-white shadow-sm h-[46px] min-h-[46px] rounded-[78px] w-[46px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d1c69362236a03c92300715e4922cad9d0cdc0b109d0bb5678ed361f326de6?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            className="object-contain self-stretch my-auto w-3.5 aspect-square fill-slate-900"
            alt=""
          />
        </div>
        <div
          className="flex flex-1 shrink gap-10 justify-between items-center p-5 h-full text-sm leading-loose text-black whitespace-nowrap rounded-xl border border-solid basis-0 border-neutral-300 min-w-[240px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5997f2ee09c3362bfc4bb2d9543c47cd4132587e792107984c8369587fd74e3?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">
            {selectedOption ? selectedOption.name : 'בחר אפשרות'}
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagSelector;