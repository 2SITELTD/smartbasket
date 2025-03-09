import React from 'react';
import TagSelector from './TagSelector';

interface TagSectionProps {
  title: string;
}

const TagSection: React.FC<TagSectionProps> = ({ title }) => {
  const categories = [
    { id: 1, name: 'מאפיה' },
    { id: 2, name: 'קטגוריה 2' },
    { id: 3, name: 'קטגוריה 3' },
  ];

  const generalTags = [
    { id: 1, name: 'מתכונים' },
    { id: 2, name: 'תג 2' },
    { id: 3, name: 'תג 3' },
  ];

  return (
    <div className="flex flex-col self-stretch mt-5 p-5 bg-white rounded-xl shadow-sm">
      <div className="flex flex-col self-end max-w-full text-2xl font-semibold leading-none text-right text-black w-[150px]">
        <div className="self-end">{title}</div>
        <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
      </div>
      <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-8 items-start mt-3 w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-8 items-start w-full basis-0 min-w-[240px] max-md:max-w-full">
          <TagSelector label="תגית קטגוריה:" options={categories} />
          <TagSelector label="תגית כללית:" options={generalTags} />
        </div>
      </div>
    </div>
  );
};

export default TagSection;