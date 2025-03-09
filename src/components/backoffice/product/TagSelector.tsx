import React from 'react';

const TagSelector: React.FC = () => {
  const tags = ['מבצע', 'חדש', 'מתוקים', 'חטיפים'];

  return (
    <div className="flex flex-col mt-3 w-full font-semibold text-center text-black max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="leading-loose text-right max-md:max-w-full">
            תגיות מוצר:
          </div>
          <div className="flex mt-2.5 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <div className="flex gap-2.5 items-start mt-2.5 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-3 justify-center items-center px-3 py-2 w-full rounded-2xl border border-gray-500 border-solid max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa651fd48905531793c6d972a87534cbfd041927c34c0bb9c45e8ebc4c98d3b?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.67] fill-slate-900"
                />
                <div className="self-stretch my-auto">
                  בחר תגית קיימת
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end self-end mt-2.5 text-black whitespace-nowrap">
            <div className="flex gap-2.5 items-center">
              {tags.map((tag, index) => (
                <div key={index} className="flex flex-col self-stretch my-auto">
                  <div className="overflow-hidden gap-2.5 self-stretch px-3 py-2 w-full bg-sky-500 rounded-2xl border border-sky-500 border-solid">
                  {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagSelector;