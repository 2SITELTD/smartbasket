import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectRandomProductsByCategory } from '../../../store/productSlice';
import type { AppDispatch } from '../../../store';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useMobile } from '../../../hooks/use-mobile';
import   ProductGrid   from './ProductGrid';
import { RootState } from '../../../store';


const ItemsWithCategories: React.FC = () => {
  const isMobile = useMobile();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => selectRandomProductsByCategory(state));
  const navigate = useNavigate(); // Initialize useNavigate

  // React.useEffect(() => {
  //   dispatch(fetchProductsByCategory());
  // }, [dispatch]);

  const handleItemClick = (id: string) => {
    navigate(`/product/${id}`); // Navigate to the ProductDetail page
  };

  return (
    !isMobile ? (<div className="w-full max-w-[1104px]  mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((category, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative pb-4">
              <h2 
                className="text-right text-[24px] leading-[27px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                {category.category}
              </h2>
              <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#00BAFF]"></div>
            </div>

            {category.product.map((item) => (
              <div 
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md relative flex-row-reverse cursor-pointer"
                onClick={() => handleItemClick(item.id)} // Add onClick handler
              >
                <div className="relative w-[94px] h-[109px]">
                  <div className="w-full h-full bg-[#ebebeb] shadow-md rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.isSale && (
                    <div className="absolute top-2 right-2 bg-[#FEC740] px-3 py-1 rounded">
                      <span 
                        className="text-[12px] leading-[24px] text-[#264653]"
                        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                      >
                        מבצע!
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <h3 
                    className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
                    style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {item.isSale ? (
                      <>
                        <span 
                          className="text-[22px] leading-[50px] font-bold text-[#FC4B4E]"
                          style={{ fontFamily: 'PT Sans' }}
                        >
                          ₪{item.price.toFixed(2)}
                        </span>
                        <span 
                          className="text-[22px] leading-[50px] font-bold text-[#778080] line-through"
                          style={{ fontFamily: 'PT Sans' }}
                        >
                          ₪{item.originalPrice?.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span 
                        className="text-[22px] leading-[50px] font-bold text-[#05172C]"
                        style={{ fontFamily: 'PT Sans' }}
                      >
                        ₪{item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>) : (<div className="w-full max-w-[1104px]  mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((category, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative pb-4">
              <h2 
                className="text-right text-[24px] leading-[27px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                {category.category}
              </h2>
              <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#00BAFF]"></div>
            </div>

            {/* {category.product.map((item) => (
              <div 
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md relative flex-row-reverse cursor-pointer"
                onClick={() => handleItemClick(item.id)} // Add onClick handler
              >
                <div className="relative w-[94px] h-[109px]">
                  <div className="w-full h-full bg-[#ebebeb] shadow-md rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.isSale && (
                    <div className="absolute top-2 right-2 bg-[#FEC740] px-3 py-1 rounded">
                      <span 
                        className="text-[12px] leading-[24px] text-[#264653]"
                        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                      >
                        מבצע!
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <h3 
                    className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
                    style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {item.isSale ? (
                      <>
                        <span 
                          className="text-[22px] leading-[50px] font-bold text-[#FC4B4E]"
                          style={{ fontFamily: 'PT Sans' }}
                        >
                          ₪{item.price.toFixed(2)}
                        </span>
                        <span 
                          className="text-[22px] leading-[50px] font-bold text-[#778080] line-through"
                          style={{ fontFamily: 'PT Sans' }}
                        >
                          ₪{item.originalPrice?.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span 
                        className="text-[22px] leading-[50px] font-bold text-[#05172C]"
                        style={{ fontFamily: 'PT Sans' }}
                      >
                        ₪{item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))} */}
            <ProductGrid products={category.product} rows={2}/>
          </div>
        ))}
      </div>
    </div>)
  );
};

export default ItemsWithCategories;