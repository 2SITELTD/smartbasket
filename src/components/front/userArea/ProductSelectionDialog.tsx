import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/productSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Product } from '../../../types/productTypes';

interface ProductSelectionDialogProps {
  open: boolean;
  onClose: () => void;
  onProductsSelected: (products: { productId: string; quantity: number }[]) => void;
}

export const ProductSelectionDialog: React.FC<ProductSelectionDialogProps> = ({
  open,
  onClose,
  onProductsSelected,
}) => {
  const products = useSelector(selectProducts);
  console.log(products)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<{ productId: string; quantity: number }[]>([]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => {
      const isProductSelected = prev.some(item => item.productId === productId);
      
      if (isProductSelected) {
        return prev.filter(item => item.productId !== productId);
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  };

  const handleSubmit = () => {
    const products = selectedProducts.map(item => ({ productId: item.productId, quantity: item.quantity }));
    console.log(products)
    onProductsSelected(products);
    setSelectedProducts([]);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-right">בחר מוצרים לרשימה</DialogTitle>
        </DialogHeader>
        
        <div className="mb-4">
          <Input
            type="search"
            placeholder="חפש מוצרים..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-right"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedProducts.some(item => item.productId === product.id)
                  ? 'border-[#00BAFF] bg-blue-50'
                  : 'border-gray-200'
              }`}
              onClick={() => handleProductToggle(product.id)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1 text-right">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-[#f00]">₪{product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>ביטול</Button>
          <Button onClick={handleSubmit}>הוסף מוצרים</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
