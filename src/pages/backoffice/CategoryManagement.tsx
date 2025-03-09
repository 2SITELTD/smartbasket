import React from 'react';
import { CategorySection } from '../../components/backoffice/category/CategorySection.tsx';
import { SubCategoryItem } from '../../components/backoffice/category/SubCategoryItem';
import { AddSubCategory } from '../../components/backoffice/category/AddSubCategory';

type CategoryManagementProps = object;

export const CategoryManagement: React.FC<CategoryManagementProps> = () => {
  const dairyProducts = {
    name: 'מוצרי חלב',
    subCategories: ['גבינות', 'חלב']
  };

  const fruits = {
    name: 'פירות',
    subCategories: []
  };

  return (
    <div className="flex gap-8 justify-center items-start">
      <div className="flex flex-1 shrink gap-8 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink p-10 w-full bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full font-semibold max-md:max-w-full">
            <div className="flex gap-5 items-center self-stretch my-auto text-xl text-center text-black min-w-[240px]">
              <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
                <button className="gap-4 self-stretch px-6 py-5 my-auto bg-sky-500 border border-sky-500 border-solid min-w-[240px] rounded-[85px] max-md:px-5">
                  הוסף קטגוריית אם חדשה
                </button>
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto text-2xl leading-none text-right text-black w-[134px]">
              <div className="self-end">ניהול קטגוריות</div>
              <div className="flex mt-3 w-full bg-sky-500 min-h-[4px]" />
            </div>
          </div>
          <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <CategorySection category={dairyProducts}>
            {dairyProducts.subCategories.map((subCategory, index) => (
              <SubCategoryItem key={index} name={subCategory} />
            ))}
            <AddSubCategory />
          </CategorySection>
          <CategorySection category={fruits} />
        </div>
      </div>
    </div>
  );
};