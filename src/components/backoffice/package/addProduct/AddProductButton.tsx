import React from 'react';

export const AddProductButton: React.FC = () => {
  return (
    <div className="flex gap-5 items-center self-stretch my-auto text-xl text-center text-black">
      <div className="flex gap-4 items-center self-stretch my-auto">
        <button className="gap-4 self-stretch px-6 py-5 my-auto bg-sky-500 border border-sky-500 border-solid rounded-[85px] max-md:px-5">
          הוסף מוצר חדש
        </button>
      </div>
    </div>
  );
};