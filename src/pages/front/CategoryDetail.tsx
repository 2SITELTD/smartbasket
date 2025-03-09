import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice'; // Adjust the import
import { AppDispatch } from '../../store';
import { RootState } from '../../store'; // Adjust the import based on your store setup

const CategoryDetail: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.categories); // Access categories from the correct slice

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li> // Adjust based on your category structure
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetail; 