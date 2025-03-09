import React from 'react';

interface RTLWrapperProps {
  children: React.ReactNode;
}

const RTLWrapper: React.FC<RTLWrapperProps> = ({ children }) => {
  return (
    <div dir="rtl" className="w-full">
      {children}
    </div>
  );
};

export default RTLWrapper;
