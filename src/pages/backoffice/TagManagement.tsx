import React from 'react';
import {SearchBar} from '../../components/backoffice/tags/SearchBar';
import TagSection from '../../components/backoffice/tags/TagSection';
import TagList from '../../components/backoffice/tags/TagList';

interface TagManagementProps {
  score: number;
  maxScore: number;
}

export const TagManagement: React.FC<TagManagementProps> = ({ score, maxScore }) => {
  return (
    <div className="flex gap-8 justify-center items-start">
      <div className="flex flex-1 shrink gap-8 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink p-10 w-full bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between w-full font-semibold text-black max-md:max-w-full">
              <div className="flex gap-4 items-center h-full text-2xl leading-none text-center w-[132px]">
                <div className="flex gap-7 justify-center items-center self-stretch p-5 my-auto bg-zinc-100 rounded-[217px] w-[132px]">
                  <div className="gap-2.5 self-stretch px-0.5 my-auto">
                    {score} / {maxScore}
                  </div>
                </div>
              </div>
              <div className="my-auto text-2xl leading-none text-right">
                ניהול תגיות
              </div>
            </div>
            <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
            <SearchBar />
          </div>
          <TagSection title="הוספת תגית חדשה" />
          <TagSection title="עדכון תגית קיימת" />
          <TagList />
        </div>
      </div>
    </div>
  );
};

