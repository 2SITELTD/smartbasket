
import React from "react";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { selectTags } from "../../../store/tagSlice";
import { selectCategories } from "../../../store/categorySlice";
import { useSelector } from "react-redux";

export const FilterSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/backoffice/ProductManagement");
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category]
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );
  };
  const handleClearFilter = (entity: 'categories' | 'tags') => {
    if(entity === 'categories') setSelectedCategories([]);
    if(entity === 'tags') setSelectedTags([]);
  }

  const categories = useSelector(selectCategories);
  const tags = useSelector(selectTags);

  return (
    <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-4 items-center self-stretch my-auto text-xl font-semibold text-center text-black">
            <button
              onClick={handleAddProductClick}
              className="gap-4 self-stretch px-6 py-5 my-auto bg-sky-500 border border-sky-500 border-solid rounded-[85px] max-md:px-5"
            >
              הוסף מוצר חדש
            </button>
          </div>
          <div className="flex gap-2.5 self-stretch py-1.5 w-px h-full">
            <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[40px]" />
          </div>
          <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08019231ecc5cb749891792ceee426de64172d9fcd8c1d4efa07240f5a5fabab?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
              className="object-contain self-stretch my-auto aspect-square w-[13px]"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch my-auto text-2xl font-semibold leading-none text-right text-black">
          סינון מוצרים
        </div>
      </div>
      <div className="flex mt-4 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
      <SearchBar />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="w-full text-sm leading-loose text-right text-black">
            קטגוריה:
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-end w-full">
            <div className="flex items-center justify-center w-[35px] h-[35px]">
              <button 
                onClick={() => handleClearFilter('categories')}
                className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-3 w-full text-white bg-red-500 rounded-2xl border border-red-500 border-solid h-[35px]"
              >
                x
              </button>
            </div>
            <div className="flex flex-col items-end self-start text-sm font-semibold text-center text-black min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 justify-end items-center flex-1 w-full">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-3 py-2 min-w-[120px] text-center rounded-2xl border border-solid whitespace-nowrap ${
                      selectedCategories.includes(category.name)
                        ? "bg-sky-500 border-sky-500 text-white"
                        : "border-gray-500 bg-white text-black"
                    }`}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="w-full text-sm leading-loose text-right text-black">
            תגיות:
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-end w-full">
            <div className="flex items-center justify-center w-[35px] h-[35px]">
              <button 
                onClick={() => handleClearFilter('tags')}
                className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-3 w-full text-white bg-red-500 rounded-2xl border border-red-500 border-solid h-[35px]"
              >
                x
              </button>
            </div>
            <div className="flex flex-col items-end self-start text-sm font-semibold text-center text-black min-w-[240px] max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 justify-end items-center flex-1 w-full">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex flex-col self-stretch my-auto whitespace-nowrap"
                  >
                    <button
                      className={`px-3 py-2 min-w-[120px] text-center rounded-2xl border border-solid whitespace-nowrap ${
                        selectedTags.includes(tag.name)
                          ? "bg-sky-500 border-sky-500"
                          : "border-gray-500"
                      }`}
                      onClick={() => handleTagClick(tag.name)}
                    >
                      {tag.name}
                    </button>
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
