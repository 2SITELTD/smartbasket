
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  imageUrl: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ id, name, currentPrice, originalPrice, imageUrl }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/backoffice/EditPackage/${id}`);
  };

  return (
    <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center px-5 py-6 bg-white rounded-xl basis-0 min-w-[240px] shadow-[0px_2px_12px_rgba(183,189,196,0.504)] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
              <div className="flex gap-7 justify-center items-center self-stretch p-5 my-auto text-2xl font-semibold leading-none text-center text-black whitespace-nowrap bg-zinc-100 rounded-[217px] w-[83px]">
                <div className="gap-2.5 self-stretch px-0.5 my-auto">
                  {id}
                </div>
              </div>
              <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
                <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[41px]" />
              </div>
              <div className="flex gap-4 items-center self-stretch my-auto text-xl font-semibold text-center text-black">
                <button 
                  className="gap-4 self-stretch px-6 py-5 my-auto bg-sky-500 border border-sky-500 border-solid rounded-[85px] max-md:px-5 h-[48px] flex items-center justify-center"
                  onClick={handleEditClick}
                >
                  ערוך מארז
                </button>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-2xl font-semibold leading-none">
              <div className="text-black">{name}</div>
              <div className="flex gap-6 items-start mt-5 whitespace-nowrap">
                <div className="text-black">₪{currentPrice.toFixed(2)}</div>
                <div className="text-black line-through">₪{originalPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-3.5 py-2 bg-white rounded-xl min-h-[101px] shadow-[0px_2px_12px_rgba(183,189,196,0.504)] w-[95px]">
          <img
            loading="lazy"
            src={imageUrl}
            className="object-contain aspect-[0.78] w-[69px]"
            alt={`Package ${name}`}
          />
        </div>
      </div>
    </div>
  );
};
