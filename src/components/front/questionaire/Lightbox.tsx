import React from 'react';

interface LightboxProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Lightbox: React.FC<LightboxProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-[30px] flex flex-col justify-start">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-[#FC4B4E] text-xl"
        >
          &times; {/* Close icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Lightbox; 