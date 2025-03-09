import React from 'react';
import { Package } from '../../../types/product';

interface PackageDetailListProps {
  packages: Package[];
}

const PackageDetailList: React.FC<PackageDetailListProps> = ({ packages }) => {
  return (
    <div className="package-detail-list">
      {packages.map((pkg) => (
        <div key={pkg.id} className="package-item">
          <h2>{pkg.title}</h2>
          <p>{pkg.description}</p>
          <p>Price: ${pkg.price}</p>
          <p>Original Price: ${pkg.originalPrice}</p>
          <img src={pkg.image} alt={pkg.title} />
          <div>
            {pkg.items.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageDetailList;
