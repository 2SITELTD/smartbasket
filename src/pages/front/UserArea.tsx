
import React from 'react'
import { UserHeader } from '../../components/front/userArea/UserHeader';
import { AddressComponent } from '../../components/front/userArea/AddressComponent'
import { TrackingCard } from '../../components/front/tracking/TrackingCard';
import { SavingsDisplay } from '../../components/front/userArea/SavingDisplay'
import { FavoriteProducts } from '../../components/front/userArea/FavoriteProducts';
import { UserLists } from '../../components/front/userArea/UserLists';
import { PreviousOrdersPage } from '../../components/front/userArea/PreviousOrdersPage';

export const UserArea = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ploni+DL+1.1+AAA:wght@400;600&family=Ploni+ML+v2+AAA:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col justify-center p-6 mx-auto w-full rounded-2xl max-w-[1104px] min-w-[240px] max-md:p-4 max-sm:p-3">
        <div className="flex flex-col gap-3 max-sm:gap-2">
          {/* User Header Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] max-sm:p-4 max-sm:items-center">
            <UserHeader />
          </div>

          {/* Savings Display Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] max-sm:p-4 max-sm:items-center">
            <SavingsDisplay />
          </div>

          {/* Address Component Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] text-right max-sm:p-4 max-sm:items-center">
            <TrackingCard title="הכתובת שלי" titleWidth={180}>
              <div className="pt-4 max-sm:pt-2 max-sm:w-full">
                <AddressComponent />
              </div>
            </TrackingCard>
          </div>

          {/* Favorite Products Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] max-sm:p-4 max-sm:items-center">
            <FavoriteProducts />
          </div>

          {/* My Lists Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] max-sm:p-4 max-sm:items-center">
            <UserLists />
          </div>

          {/* Previous Orders Card */}
          <div className="flex flex-col justify-center p-8 w-full bg-white rounded-2xl shadow-lg max-w-[1104px] min-w-[240px] max-sm:p-4 max-sm:items-center">
            <PreviousOrdersPage />
          </div>
        </div>
      </div>
    </>
  );
}
