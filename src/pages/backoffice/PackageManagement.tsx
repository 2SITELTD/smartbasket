import React from 'react';
import { PackageFilter } from '../../components/backoffice/package/packageManagement/PackageFilter';
import { PackageCard } from '../../components/backoffice/package/packageManagement/PackageCard';

interface Package {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  imageUrl: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: "מארז ירקות",
    currentPrice: 119.90,
    originalPrice: 189.90,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/de306fb3bdb4eb9b158ee1a2f8faee8832eb2ed5311c7807eab7c8cc3b820a8c?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
  },
  {
    id: 2,
    name: "מארז משלים",
    currentPrice: 89.90,
    originalPrice: 109.90,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58ce1a21a97f094bcc60e2b9e4c502995ba2e96d604421dd914c0b4e2b660dc?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
  },
  {
    id: 3,
    name: "מארז בסיסי",
    currentPrice: 49.90,
    originalPrice: 52.90,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58ce1a21a97f094bcc60e2b9e4c502995ba2e96d604421dd914c0b4e2b660dc?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
  }
];

export const PackageManagement: React.FC = () => {
  return (
    <div className="flex gap-8 justify-center items-start">
      <div className="flex flex-col flex-1 shrink p-10 w-full bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-end w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[123px]">
            <div className="self-end">ניהול מארזים</div>
            <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
          </div>
        </div>
        <div className="flex mt-4 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
        <PackageFilter />
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </div>
  );
};