import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteProduct, selectFavoriteProductIds } from '../store/favoriteSlice';
import { Heart as HeartIcon } from 'lucide-react';

interface HeartProps {
  id: string;
  entity: 'product' | 'package';
  size?: string;
  color?: string;
}

const Heart: React.FC<HeartProps> = ({ id, size }) => {
  const dispatch = useDispatch();
  const favoriteProductIds = useSelector(selectFavoriteProductIds);
  const isFavorite = favoriteProductIds.has(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteProduct(id));
  };

  return (
    <div 
      className="relative flex items-center justify-center w-40  rounded-full cursor-pointer"
      onClick={handleToggleFavorite}
    >
      {size === 'big' ? 
      <HeartIcon size={40} className={`${isFavorite ? 'text-blue-500 fill-blue-500' : 'text-blue-500'}`} /> :
       <HeartIcon size={24} className={`${isFavorite ? 'text-blue-500 fill-blue-500' : 'text-blue-500'}`} />}
    </div>
  );
};

export default Heart;