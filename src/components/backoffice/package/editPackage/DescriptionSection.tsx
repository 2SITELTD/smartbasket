
import React from 'react';

interface DescriptionSectionProps {
  longDescription: string;
  shortDescription: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  longDescription,
  shortDescription
}) => {
  return (
    <div className="flex flex-col mt-5 w-full max-md:max-w-full">
      <div className="text-xl font-semibold text-right text-slate-900 mb-3">
        תיאור מארז:
      </div>
      <div className="flex flex-wrap gap-5 w-full">
        {/* Short description */}
        <div className="flex flex-col flex-1 min-w-[300px]">
          <div className="text-sm leading-5 text-right text-slate-900 mb-2">
            תיאור קצר
          </div>
          <div className="flex overflow-hidden self-stretch justify-center items-center px-3 py-2 h-[120px] border border-gray-500 border-solid rounded-xl">
            <textarea 
              className="flex-1 w-full h-full px-3 py-2 text-center resize-none" 
              value={shortDescription} 
              placeholder="תיאור קצר"
            />
          </div>
        </div>
        
        {/* Long description */}
        <div className="flex flex-col flex-1 min-w-[300px]">
          <div className="text-sm leading-5 text-right text-slate-900 mb-2">
            תיאור ארוך
          </div>
          <div className="flex overflow-hidden flex-col justify-center border border-gray-500 border-solid rounded-xl h-[120px]">
            <textarea 
              className="flex-1 w-full h-full px-3 py-2 text-center resize-none" 
              value={longDescription} 
              placeholder="תיאור ארוך"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
