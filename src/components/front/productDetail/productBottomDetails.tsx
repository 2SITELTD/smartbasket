import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

type ProductDetailsProps = {
  categories: string[];
  tags: string[];
  sku: string;
};

const ProductBottomDetails: React.FC<ProductDetailsProps> = ({ categories, tags, sku }) => {
  return (
    <div className="text-right pr-5">
      <div className="flex flex-row-reverse gap-3 mt-9 text-base text-slate-700">
        <div >:קטגוריות</div>
        <div className="font-semibold line-clamp-2">{categories.join(", ")}</div>
      </div>
      <div className="flex flex-row-reverse gap-7 mt-4 text-base text-slate-700">
        <div className="line-clamp-2">:תגיות</div>
        <div className="font-semibold basis-auto line-clamp-2">{tags.join(", ")}</div>
      </div>
      <div className="flex flex-row-reverse gap-5 mt-5 text-base text-slate-700 max-md:mr-1.5">
        <div className="line-clamp-2">:מק״ט</div>
        <div className="font-semibold line-clamp-2">{sku}</div>
      </div>
      <div className="flex flex-row-reverse gap-4 items-center mt-4 text-base text-slate-700 max-md:mr-1.5">
        <div className="self-stretch line-clamp-2">:שתפו</div>
        <div className="self-stretch my-auto">
          <FontAwesomeIcon icon={faWhatsapp} className="text-[#0A6F94] text-xl pr-5" />
          <FontAwesomeIcon icon={faTwitter} className="text-[#0A6F94] text-xl pr-5" />
          <FontAwesomeIcon icon={faFacebook} className="text-[#0A6F94] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductBottomDetails;