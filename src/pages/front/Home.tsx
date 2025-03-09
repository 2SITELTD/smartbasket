import React from 'react';
import Hero from '../../components/front/homepage/Hero';
import WeekSpecial from '../../components/front/homepage/WeekSpecial';
import SuppliersBanner from '../../components/front/homepage/SuppliersBanner';
import Banners from '../../components/front/homepage/Banners';
import ItemsWithCategories from '../../components/front/homepage/ItemsWithCategories';
import Banner from '../../components/front/homepage/Banner';
import SubscribeBanner from '../../components/front/homepage/SubscribeBanner';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f4f5f5]">
      {/* Hero Section - Full Width */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* WeekSpecial Section */}
          <div className="w-full -mx-4 sm:mx-0 ">
            <WeekSpecial />
          </div>

          {/* SuppliersBanner Section */}
          <div className="w-full -mx-4 sm:mx-0">
            <div 
              className="w-full scale-95 origin-center sm:scale-100"
              style={{
                transformOrigin: 'center center'
              }}
            >
              <SuppliersBanner />
            </div>
          </div>

          {/* Banners Section */}
          <div className="w-full -mx-4 sm:mx-0">
            <Banners />
          </div>

          {/* ItemsWithCategories Section */}
          <div className="w-full -mx-4 sm:mx-0">
            <ItemsWithCategories />
          </div>

          {/* Banner Section */}
          <div className="w-full -mx-4 sm:mx-0">
            <Banner />
          </div>

          {/* SubscribeBanner Section */}
          <div className="w-full -mx-4 sm:mx-0">
            <SubscribeBanner />
          </div>
        </div>
      </div>
    </main>
  );
};
