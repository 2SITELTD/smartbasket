import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-4 w-full max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink self-stretch my-auto w-full rounded-none basis-0 min-w-[240px] max-md:max-w-full">
        <input
          type="text"
          placeholder="חפש מוצר.."
          className="grow px-16 py-5 text-xl leading-none text-right text-black bg-white rounded-3xl border-t border-b border-l border-solid border-l-gray-500 border-y-gray-500 w-fit max-md:px-5 max-md:max-w-full"
          aria-label="חפש מוצר"
        />
        <button className="px-12 py-4 text-lg font-black text-center text-black whitespace-nowrap bg-sky-500 rounded-none max-md:px-5">
          search
        </button>
      </div>
    </div>
  );
};