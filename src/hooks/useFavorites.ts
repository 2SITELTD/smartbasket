import { useState, useCallback } from 'react';
import favoriteData from './favoriteData.json'; // Static data as a placeholder

interface FavoriteItem {
  id: string;
  title: string;
  price: number;
  isFavorite: boolean;
}

const useFavorite = (userId?: string) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Simulate loading user-specific favorites
  const loadUserFavorites = useCallback(() => {
    if (userId) {
      // Fetch or filter data for the given userId (placeholder logic here)
      const userFavorites = favoriteData; // Replace with user-specific filtering logic
      setFavorites(userFavorites);
    }
  }, [userId]);

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const itemExists = prevFavorites.some((item) => item.id === id);
  
      if (itemExists) {
        // Remove the item from favorites
        return prevFavorites.filter((item) => item.id !== id);
      } else {
        // Add the item to favorites
        const newItem = { id, title: "New Item", price: 0, isFavorite: true }; // Replace with actual item details
        return [...prevFavorites, newItem];
      }
    });
  };
  

  return {
    favorites,
    toggleFavorite,
    loadUserFavorites, // Expose loadUserFavorites
  };
};

export default useFavorite;
