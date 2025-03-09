import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Tag {
  id: number;
  name: string;
  isActive: boolean;
}

const tags: Tag[] = [
  { id: 1, name: "עונתי", isActive: false },
  { id: 2, name: "מדריך להזמנה", isActive: false },
  { id: 3, name: "מוצרי משק", isActive: false },
  { id: 4, name: "מוצרים חדשים", isActive: false },
  { id: 5, name: "מבצע", isActive: true },
  { id: 6, name: "שימורים", isActive: false },
  { id: 7, name: "מתכונים", isActive: false },
  { id: 8, name: "נמכר ביותר", isActive: false },
  { id: 9, name: "וירקות", isActive: false },
  { id: 10, name: "פירות", isActive: false },
];

export const PackageFilter: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNewPackageClick = () => {
    navigate('/backoffice/PackageEditor');
  };

  return (
    <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-semibold max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto text-xl text-center text-black">
          <div className="flex gap-4 items-center self-stretch my-auto">
            <button 
              className="gap-4 self-stretch px-6 py-5 my-auto bg-sky-500 border border-sky-500 border-solid rounded-[85px] max-md:px-5"
              onClick={handleAddNewPackageClick}
            >
              הוסף מארז חדש
            </button>
          </div>
        </div>
        <div className="self-stretch my-auto text-2xl leading-none text-right text-black">
          סינון מארזים
        </div>
      </div>
      <div className="flex mt-4 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full text-sm leading-loose text-right text-black max-md:max-w-full">
            תגיות מארז:
          </div>
          <div className="flex flex-wrap gap-10 justify-between mt-3 w-full max-md:max-w-full">
            <div className="flex gap-4 h-full w-[35px]">
              <div className="flex gap-2.5 h-full w-[35px]">
                <div className="flex flex-col w-[35px]">
                  <div className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-3 w-full bg-red-500 rounded-2xl border border-red-500 border-solid h-[35px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa74ea62ced885c8c7743e34b4007fa809b4a977226a417593a85fcd8a02fb67?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                      className="object-contain self-stretch my-auto aspect-[0.9] fill-white w-[9px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end self-start text-sm font-semibold text-center text-black min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 items-center max-md:max-w-full">
                {tags.map((tag) => (
                  <div key={tag.id} className="flex flex-col self-stretch my-auto whitespace-nowrap">
                    <div className={`overflow-hidden gap-2.5 self-stretch px-3 py-2 w-full rounded-2xl border ${tag.isActive ? 'bg-sky-500 border-sky-500' : 'border-gray-500'} border-solid`}>
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};