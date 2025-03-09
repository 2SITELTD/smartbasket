import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import PriceBadgeSmall from '../../PriceBadgeSmall';

const packages = [
  { title: 'מארז משלים', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-1.png', price: 49.90, originalPrice: 89.90 },
  { title: 'מארז אורגני', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-2.png', price: 49.90, originalPrice: 89.90 },
  { title: 'מארז בסיס', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-3.png', price: 49.90, originalPrice: 89.90 },
  { title: 'מארז משלים', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-1.png', price: 49.90, originalPrice: 89.90 },
  { title: 'מארז אורגני', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-2.png', price: 49.90, originalPrice: 89.90 },
  { title: 'מארז בסיס', image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-carouselle-3.png', price: 49.90, originalPrice: 89.90 },
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <Splide
        options={{
          type: 'slide',
          perPage: 3,
          perMove: 1,
          focus: 'center',
          gap: '5px',
          pagination: true,
          arrows: false,
          paginationDirection: 'rtl',
          omitEnd: true,
          width: '760px',
          classes: {
            slide: 'splide__slide',
            active: 'splide__slide--active',
            pagination: 'splide__pagination !-bottom-12', // Move pagination outside
            page: 'splide__pagination__page', // Inactive color
            'page.is-active': 'splide__pagination__page is-active' // Active color
          },
          updateOnMove: true,
          height: 'auto',
          fixedHeight: '200px',
          breakpoints: {
            1024: { 
              perPage: 3,
              width: '1050px'
            },
            768: { 
              perPage: 2,
              width: '700px'
            },
            640: { 
              perPage: 1,
              width: '350px'
            }
          },
          direction: 'rtl'
        }}
      >
        {packages.map((pkg, index) => (
          <SplideSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-[200px] h-[150px] object-cover rounded-lg mx-[2.5px]"
                />
                <div className="absolute bottom-[-35px] right-[-25px]">
                  <PriceBadgeSmall
                    title={pkg.title}
                    price={pkg.price}
                    originalPrice={pkg.originalPrice}
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;

