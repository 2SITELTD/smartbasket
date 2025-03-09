import React from 'react';
import TagGroup from './TagGroup';

const categoryTags = [
  'מאפיה', 'מוצרי משק', 'שמנים ורטבים', 'תבלינים', 'קפה ותה',
  'דגנים ופסטה', 'חטיפים ושימורים', 'פירות וירקות', 'מארזים'
];

const productTags = [
  'עונתי', 'מדריך להזמנה', 'מוצרי משק', 'מוצרים חדשים', 'מבצע',
  'שימורים', 'מתכונים', 'נמכר ביותר', 'וירקות', 'פירות'
];

const TagList: React.FC = () => {
  return (
    <div className="flex flex-col p-5 mt-8 w-full text-sm text-black bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex flex-col self-end max-w-full text-2xl font-semibold leading-none text-right w-[163px]">
        <div className="self-end">כל התגיות הקיימות</div>
        <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
      </div>
      <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col mt-3 w-full max-md:max-w-full">
        <TagGroup title="קטגוריה:" tags={categoryTags} />
        <TagGroup title="תגיות מוצר:" tags={productTags} />
      </div>
    </div>
  );
};

export default TagList;