import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterSection } from './FilterSection';

export const ProductFilter: React.FC = () => {
  const categories = [
    "מאפיה", "מוצרי משק", "שמנים ורטבים", "תבלינים", "קפה ותה",
    "דגנים ופסטה", "חטיפים ושימורים", "פירות וירקות", "מארזים"
  ];

  const tags = [
    "עונתי", "מדריך להזמנה", "מוצרי משק", "מוצרים חדשים", "מבצע",
    "שימורים", "מתכונים", "נמכר ביותר", "וירקות", "פירות"
  ];

  return (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full">
      <SearchBar />
      <FilterSection title="קטגוריה:" items={categories} />
      <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <FilterSection title="תגיות מוצר:" items={tags} />
    </div>
  );
};