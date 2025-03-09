import React from 'react';
import { PackageHeader } from '../../components/backoffice/package/packageEditor/PackageHeader.tsx';
import { PackageDetails } from '../../components/backoffice/package/packageEditor/PackageDetails.tsx';
import { PackageDescription } from '../../components/backoffice/package/packageEditor/PackageDescription.tsx';
import { ProductList } from '../../components/backoffice/package/packageEditor/ProductList.tsx';
import { AddProductButton } from '../../components/backoffice/package/packageEditor/AddProductButton.tsx';

interface PackageEditorProps {
  packageName: string;
  sku: string;
  inventory: number;
  smartBasketPrice: number;
  purchasePrice: number;
  marketPrice: number;
  tags: string[];
  displayLocations: string[];
  extendedDescription: string;
  shortDescription: string;
  products: Array<{
    id: number; // Change id type to number
    name: string;
    price: string;
    originalPrice: string;
    quantity: number;
    image: string;
  }>;
}

export const PackageEditor: React.FC<PackageEditorProps> = ({
  packageName,
  sku,
  inventory,
  smartBasketPrice,
  purchasePrice,
  marketPrice,
  tags,
  displayLocations,
  extendedDescription,
  shortDescription,
  products,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-xl shadow-sm">
      <PackageHeader packageName={packageName} />
      <PackageDetails
        sku={sku}
        inventory={inventory}
        packageName={packageName}
        smartBasketPrice={smartBasketPrice}
        purchasePrice={purchasePrice}
        marketPrice={marketPrice}
        tags={tags}
        displayLocations={displayLocations}
      />
      <PackageDescription
        extendedDescription={extendedDescription}
        shortDescription={shortDescription}
      />
      <AddProductButton />
      <ProductList products={products} />
    </div>
  );
};