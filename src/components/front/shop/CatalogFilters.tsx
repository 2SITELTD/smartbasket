import React from "react";
 import { RootState } from '../../../store';
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../../store/categorySlice";
import { selectTags } from "../../../store/tagSlice";
import { PriceRangeSlider } from "./PriceRangeSlider";
import { useMobile } from "../../../hooks/use-mobile";
import { setSelectedCategories, setSelectedTags, setPriceRange, clearFilters } from '../../../store/filterSlice';

interface CatalogFiltersProps {
  onSubmit?: () => void;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({ onSubmit }) => {

  const categories = useSelector(selectCategories);
  const tags = useSelector(selectTags);
  const dispatch = useDispatch();
  const { priceRange, selectedCategories, selectedTags } = useSelector((state:RootState) => state.filters);

  const handleCategoryToggle = (categoryName: string) => {
    console.log(categoryName)
    dispatch(setSelectedCategories(categoryName));
  };

  const handleTagToggle = (tagId: string) => {
    dispatch(setSelectedTags(tagId));
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    dispatch(setPriceRange(newRange));
  };

  const handleSubmit = () => {
    console.log("Filters submitted:", {
      priceRange,
      selectedCategories,
      selectedTags,
    });
    onSubmit?.();
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const isMobile = useMobile();

  return isMobile ? (
    <div className=" w-full md:w-[345px] bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center bg-[#00BAFF] text-white p-6 rounded-t-lg">
        <h2
          className="text-[24px] leading-[27px] font-semibold"
          style={{ fontFamily: "Ploni DL 1.1 AAA" }}
        >
          סינון מוצרים
        </h2>
      </div>

      <div className="p-6 flex flex-col items-center gap-8 h-[1200px] overflow-y-auto">
        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10 flex flex-col items-center">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C] text-right"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :קטגוריות
            </h3>
            <div className="w-[100px] h-[3px] bg-[#FEC740] mt-2"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2">
          {categories.map((category) => (
  <button
    key={category.id}
    onClick={() => handleCategoryToggle(category.name)}
    className={`flex items-center justify-between p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
      selectedCategories.includes(category.name)
        ? "bg-[#00BAFF] text-white"
        : "hover:bg-gray-50"
    }`}
  >
    <span
      className="text-[16px] leading-[23px] text-right flex-grow"
      style={{ fontFamily: "Ploni DL 1.1 AAA", minWidth: '0' }} // Allow text to shrink
    >
      {category.name}
    </span>
    <div className="flex-shrink-0 ml-6">
      <img
        className="w-[23px] h-[28px] object-contain"
        src={category.icon}
        alt={category.name}
      />
    </div>
  </button>
))}
          </div>
        </div>

        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10 flex flex-col items-center">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C] text-right"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :טווח מחירים
            </h3>
            <div className="w-[100px] h-[3px] bg-[#FEC740] mt-2"></div>
          </div>
        </div>
        <PriceRangeSlider min={0} max={30} onChange={handlePriceRangeChange} />

        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10 flex flex-col items-center">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C]"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :תגיות מוצר
            </h3>
            <div className="w-[100px] h-[3px] bg-[#FEC740] mt-2"></div>
          </div>

          <div className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto pr-2 justify-end">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.name)}
                className={`px-4 py-2 text-[14px] leading-[20px] text-[#05172C] border border-[#778080] rounded-full shadow-md hover:shadow-lg transition-shadow ${
                  selectedTags.includes(tag.name) ? "bg-[#00BAFF] text-white" : ""
                }`}
                style={{ fontFamily: "Ploni DL 1.1 AAA" }}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sticky bottom-0 bg-white pt-4"></div>
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-[#00BAFF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: "Ploni DL 1.1 AAA" }}
        >
          סנן
        </button>
        <button
          onClick={handleClearFilters}
          className="w-full py-4 border border-[#778080] text-[#778080] rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: "Ploni DL 1.1 AAA" }}
        >
          נקה הכל
        </button>
      </div>
    </div>
  ) : (
    <div className=" w-full md:w-[345px] bg-white rounded-lg shadow-sm">
      <div className="bg-[#00BAFF] text-white p-6 rounded-t-lg">
        <h2
          className="text-[24px] leading-[27px] font-semibold"
          style={{ fontFamily: "Ploni DL 1.1 AAA" }}
        >
          סינון מוצרים
        </h2>
      </div>

      <div className="p-6 flex flex-col gap-8 h-[1200px] overflow-y-auto">
        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C] text-right"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :קטגוריות
            </h3>
            <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#FEC740]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryToggle(category.name)}
                className={`flex items-center justify-between p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                  selectedCategories.includes(category.name)
                    ? "bg-[#00BAFF] text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex-shrink-0 ml-6">
                  <img
                    className="w-[23px] h-[28px] object-contain"
                    src={category.icon}
                    alt={category.name}
                  />
                </div>
                <span
                  className="text-[16px] leading-[23px] text-right flex-grow"
                  style={{ fontFamily: "Ploni DL 1.1 AAA", minWidth: "0" }}
                >
                  {category.name}
                </span>
                <div className="flex-shrink-0">
                  <img
                    className="w-[23px] h-[28px] object-contain"
                    src={category.icon}
                    alt={category.name}
                  />
                </div>
                <span
                  className="text-[16px] leading-[23px] text-right flex-grow"
                  style={{ fontFamily: "Ploni DL 1.1 AAA", minWidth: "0" }}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C] text-right"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :טווח מחירים
            </h3>
            <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#FEC740]"></div>
          </div>
          <PriceRangeSlider
            min={0}
            max={30}
            onChange={handlePriceRangeChange}
          />
        </div>

        <div>
          <div className="pb-4 mb-4 sticky top-0 bg-white z-10">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C]"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :תגיות מוצר
            </h3>
            <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#FEC740]"></div>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto pr-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.name)}
                className={`px-4 py-2 text-[14px] leading-[20px] text-[#05172C] border border-[#778080] rounded-full shadow-md hover:shadow-lg transition-shadow ${
                  selectedTags.includes(tag.name) ? "bg-[#00BAFF] text-white" : ""
                }`}
                style={{ fontFamily: "Ploni DL 1.1 AAA" }}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sticky bottom-0 bg-white pt-4">
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#00BAFF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            style={{ fontFamily: "Ploni DL 1.1 AAA" }}
          >
            סנן
          </button>
          <button
            onClick={handleClearFilters}
            className="w-full py-4 border border-[#778080] text-[#778080] rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            style={{ fontFamily: "Ploni DL 1.1 AAA" }}
          >
            נקה הכל
          </button>
        </div>
      </div>
    </div>
  );
};
