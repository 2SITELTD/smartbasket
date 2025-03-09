import React from "react";
import { useMobile } from "../../../hooks/use-mobile";

interface ResultsAndSortingProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
}

export const ResultsAndSorting: React.FC<ResultsAndSortingProps> = ({
  totalItems = 125,
  currentPage = 1,
  itemsPerPage = 12,
}) => {
  const isMobile = useMobile();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-between'} items-center w-full mb-4`}>
      <div className="text-right text-[#264653] text-base font-normal font-['Ploni DL 1.1 AAA']">
        מציג - {startItem} עד {endItem} מתוך {totalItems}
      </div>
      {/* <div className={`relative flex items-center ${isMobile ? 'w-full' : 'pl-36'}`}>
        <div className="w-full md:w-[218.48px] h-[52px] rounded-3xl border border-[#d2d2d2] flex items-center justify-center">
          <span className="text-[#264653] text-base font-bold font-['PT Sans']">
            לעגלה
          </span>
        </div>
      </div> */}
    </div>
  );
};