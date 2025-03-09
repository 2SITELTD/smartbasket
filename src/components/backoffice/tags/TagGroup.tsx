import React from 'react';
import Tag from './Tag';

interface TagGroupProps {
  title: string;
  tags: string[];
}

const TagGroup: React.FC<TagGroupProps> = ({ title, tags }) => {
  return (
    <div className="flex flex-col items-end mt-3 w-full font-semibold text-center max-md:max-w-full">
      <div className="self-stretch leading-loose text-right max-md:max-w-full">
        {title}
      </div>
      <div className="flex flex-wrap gap-2.5 items-center self-end mt-3 max-md:max-w-full">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default TagGroup;