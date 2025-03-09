import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {
  selectHotProducts,
  fetchHotProducts,
} from "../../../store/productSlice";
import type { AppDispatch } from "../../../store";
import ProductCard from "../homepage/ProductCard";

const ProductShowcase: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const products = useSelector((state: RootState) => selectHotProducts(state, 4));
  React.useEffect(() => {
    dispatch(fetchHotProducts());
  }, [dispatch]);

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto px-4 bg-[#f4f5f5]"
      dir="rtl"
    >
      <header>
        <h2 className="text-[rgba(5,23,44,1)] text-[28px] font-semibold leading-none text-center z-10 mt-[-7px]">
          אל תפספסו!
        </h2>
        <p className="text-[rgba(38,70,83,1)] text-base font-normal leading-[22px] text-center mt-3.5 max-md:max-w-full">
          חטיפים מתוקים, פירות טריים, מאפים מפנקים ועוד עשרות מוצרים במחירים
          מפתיעים.
          <br />
          רק לשבוע הקרוב – אל תפספסו!
        </p>
      </header>

      <div className="w-full mt-[41px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="bg-[#f4f5f5] py-16">
            <h2
              className="text-2xl font-bold text-[#05172C] mb-8 text-center"
              style={{ fontFamily: "Ploni ML v2 AAA" }}
            >
              מבצעים חמים
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px] px-4">
                {/* Dynamic columns */}
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    isSale={product.isSale}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
