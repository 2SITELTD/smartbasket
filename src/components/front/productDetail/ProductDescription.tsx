import * as React from "react";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center gap-3 mt-9 text-base text-slate-700 mx-auto w-full max-w-6xl"> {/* Centered with mx-auto */}
      <div className="flex flex-col items-center w-full"> {/* Center items for mobile */}
        <div className="text-center text-slate-700 max-md:mt-10 px-5"> {/* Center text */}
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;