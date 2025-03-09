import React, { useState } from 'react';
import { CatalogFilters } from '../../components/front/shop/CatalogFilters';
import  {ProductGrid}  from '../../components/front/shop/ProductGrid';
import { WeeklyOffer } from '../../components/front/shop/WeeklyOffer';
import { QuickOrder } from '../../components/front/shop/QuickOrder';
import RTLWrapper from '../../components/RTLWrapper';
import { PromotionalBanner } from '../../components/front/shop/PromotionalBanner';
import { ResultsAndSorting } from '../../components/front/shop/ResultsAndSorting';
import { useMobile } from '../../hooks/use-mobile';
import { Button } from '../../components/ui/button';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { selectProducts } from '../../store/productSlice';

const Catalog: React.FC = () => {
  const isMobile = useMobile();
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterSubmit = () => {
    setShowFilters(false);
  };

  return (
    <RTLWrapper>
      <div className="flex flex-col min-h-screen bg-[#f4f5f5]">
        <div className="container mx-auto px-4 py-8 flex-grow">
          {isMobile ? (
            <Sheet>
            <SheetTrigger asChild>
              <Button
                className="w-full mb-4 bg-[#00BAFF] text-white flex items-center justify-center gap-2"
              >
                {showFilters ? 'הסתר מסננים' : 'הצג מסננים'}
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="w-full h-[80vh] overflow-y-auto" 
              title={'פילטר'}
            >
                <div className="pt-8">
                  <CatalogFilters onSubmit={handleFilterSubmit} />
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Products */}
            <main className="w-full md:flex-1">
              <div className="flex flex-col gap-8">
                <ProductGrid />
              </div>
            </main>

            {/* Right Side - Filters and Promotions */}
            <aside className={`w-full md:w-[345px] flex flex-col gap-8 ${isMobile ? 'hidden' : 'block'}`}>
              <div className="text-[#05172c] text-2xl font-semibold font-['Ploni DL 1.1 AAA'] leading-[27px]">
                מוצרים שלנו
              </div>
              <div className="w-[100px] h-[3px] bg-[#00baff]" />
              <CatalogFilters onSubmit={handleFilterSubmit} />
              <QuickOrder />
              <WeeklyOffer />
            </aside>
          </div>
        </div>
        
        {/* Promotional Banner with margin */}
        <PromotionalBanner className="mb-2" />
      </div>
    </RTLWrapper>
  );
};

export default Catalog;