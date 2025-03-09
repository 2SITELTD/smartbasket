import * as React from "react";

type ProductImageProps = {
  imageSrc: string;
  onSale: boolean;
};

const ProductImage: React.FC<ProductImageProps> = ({ imageSrc, onSale }) => {
  return (
    <div className="flex flex-col w-11/12 max-w-6xl mx-auto bg-white rounded-xl"> {/* Adjusted width and added margins */}
      <div className="flex relative flex-col grow items-end  text-base text-right whitespace-nowrap rounded-xl pb-[200px] md:pb-[400px] text-slate-700">
        <img 
          loading="lazy" 
          src={imageSrc} 
          alt="Product image" 
          className="object-contain absolute inset-0 w-full h-full" // Changed to object-contain
        />
        {onSale && (
          <div className="absolute top-12 md:top-5 right-0  px-4 py-1 md:py-3 bg-amber-300 rounded-[80px_0px_0px_80px] shadow-[5px_2px_13px_rgba(138,148,159,0.407)] w-[5rem] md:w-[8rem]">
            מבצע!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;