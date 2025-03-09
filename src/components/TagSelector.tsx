
import { useState } from "react";

const TagSelector = ({ className = "", tags = [] }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tagName) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((tag) => tag !== tagName)
        : [...prev, tagName]
    );
  };

  return (
    <div className={`flex gap-2.5 items-center ${className}`}>
      {tags.map((tag, index) => (
        <div key={index} className="flex flex-col self-stretch my-auto whitespace-nowrap">
          <button
            className={`px-3 py-2 h-[40px] text-center rounded-2xl border border-solid whitespace-nowrap ${
              selectedTags.includes(tag.name)
                ? "bg-sky-500 border-sky-500 text-white"
                : "border-gray-500"
            }`}
            onClick={() => handleTagClick(tag.name)}
            style={{ minWidth: `${Math.max(120, tag.name.length * 12)}px` }}
          >
            {tag.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TagSelector;
