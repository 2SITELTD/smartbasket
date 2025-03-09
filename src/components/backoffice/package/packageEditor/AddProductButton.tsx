import React, { useState } from 'react';
import { AddProduct } from '../../../../pages/backoffice/AddProduct';

export const AddProductButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="flex flex-wrap items-center mt-4 w-full max-md:max-w-full">
      <button
        className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-sky-500 shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]"
        onClick={handleButtonClick}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/48c07f3b28261eb2b29c63684f3de1a2a595083c03996c2739d785670620c72c?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
          className="object-contain self-stretch my-auto aspect-square w-[13px]"
          alt=""
        />
      </button>
      <div className="self-stretch my-auto text-2xl font-semibold leading-none text-right text-black">
        הוסף מוצרים למארז
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div className="bg-white p-4 rounded-lg h-5/6 overflow-y-auto relative">
            <button onClick={closePopup} className="absolute top-2 right-2">X</button>
            <AddProduct />
          </div>
        </div>
      )}
    </div>
  );
};