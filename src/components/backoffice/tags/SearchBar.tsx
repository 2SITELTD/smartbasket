import React from 'react';

type SearchBarProps = object;

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="mx-0 my-4 border-b border-solid border-b-neutral-300">
      <label htmlFor="tagSearch" className="sr-only">חפש תגית</label>
      <input
        id="tagSearch"
        type="text"
        placeholder="חפש תגית.."
        className="p-5 w-full text-xl text-right rounded-3xl border border-gray-500 border-solid"
      />
    </div>
  );
};