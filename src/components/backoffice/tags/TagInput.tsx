import React from 'react';

interface TagInputProps {
  label: string;
  placeholder: string;
}

const TagInput: React.FC<TagInputProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label className="text-sm leading-loose text-right text-black max-md:max-w-full">
          {label}
        </label>
        <div className="flex gap-4 items-start mt-2.5 w-full max-md:max-w-full">
          <div className="flex gap-5 justify-center items-center px-4 bg-sky-500 shadow-sm h-[46px] min-h-[46px] rounded-[78px] w-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68d4a3e5f1789bac2568f7115b009d6a23af70e5af58d5f9f95b632a9ac92e2?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
              className="object-contain self-stretch my-auto w-4 aspect-square fill-white"
              alt=""
            />
          </div>
          <input
            type="text"
            className="flex-1 shrink gap-5 p-5 text-sm leading-loose text-black rounded-xl border border-solid border-neutral-300 min-w-[240px]"
            placeholder={placeholder}
            aria-label={label}
          />
        </div>
      </div>
    </div>
  );
};

export default TagInput;