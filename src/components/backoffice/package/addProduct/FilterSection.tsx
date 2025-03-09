import React from 'react';

interface FilterSectionProps {
  title: string;
  items: string[];
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="w-full text-sm leading-loose text-right text-black whitespace-nowrap max-md:max-w-full">
        {title}
      </div>
      <div className="flex flex-wrap gap-10 justify-between mt-3 w-full max-md:max-w-full">
        <div className="flex gap-4 h-full w-[35px]">
          <div className="flex gap-2.5 h-full w-[35px]">
            <div className="flex flex-col w-[35px]">
              <div className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-3 w-full bg-red-500 rounded-2xl border border-red-500 border-solid h-[35px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a40c6a96d29220d0e9e2f238f94790a9dfd83bc10dea85344a8efd509aed4cbc?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  className="object-contain self-stretch my-auto aspect-square fill-white w-[9px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 items-center self-start text-sm font-semibold text-center text-black min-w-[240px] max-md:max-w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col self-stretch my-auto whitespace-nowrap">
              <div className={`overflow-hidden gap-2.5 self-stretch px-3 py-2 w-full rounded-2xl border border-solid ${item === 'תבלינים' || item === 'חטיפים ושימורים' || item === 'מארזים' || item === 'מבצע' ? 'bg-sky-500 border-sky-500' : 'border-gray-500'}`}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};