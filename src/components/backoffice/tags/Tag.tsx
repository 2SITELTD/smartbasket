
import React from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className = '' }) => {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <div className={`overflow-hidden gap-2.5 self-stretch px-3 py-2 flex items-center justify-center rounded-2xl border border-gray-500 border-solid ${className}`}>
        {text}
      </div>
    </div>
  );
};

export default Tag;
