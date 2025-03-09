import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useSelector } from 'react-redux';
import { selectCategoryNamesById } from "./categorySlice";
import { selectProducts } from './productSlice';
import { selectFilters } from './filterSlice';
import { selectTagNamesById } from "./tagSlice";


export const selectFilteredProducts = createSelector(
  [
    (state: RootState) => selectProducts(state),  // ✅ Extract products from state
    (state: RootState) => selectFilters(state),  // ✅ Extract filters from state
    (state: RootState) => selectCategoryNamesById(state.filters.selectedCategories), // ✅ Extract category names mapping from state
    (state: RootState) => selectTagNamesById(state, state.filters.selectedTags),  // ✅ Extract tag names mapping from state
  ],
  (products, filters, categoryNamesById, tagNamesById) => {
     // Function to get category names from selected category IDs
     const getSelectedCategoryNames = () => {
      return filters.selectedCategories.map((id) => {
        const categoryName = categoryNamesById[id]; // Get name by ID
        return categoryName || ""; // Return name or empty string if not found
      });
    };

    // Function to get tag names from selected tag IDs
    const getSelectedTagNames = () => {
      return filters.selectedTags.map((id) => {
        const tagName = tagNamesById[id]; // Get name by ID
        return tagName || ""; // Return name or empty string if not found
      });
    };

    const selectedCategoryNames = filters.selectedCategories;
    console.log(filters)
    const selectedTagNames = filters.selectedTags;

    // Create sets for quick lookup
    const selectedCategoriesSet = new Set(selectedCategoryNames);
    const selectedTagsSet = new Set(selectedTagNames);
    console.log(selectedCategoriesSet)
    return products.filter((product) => {
      const matchesPrice =
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      const matchesCategory =
        filters.selectedCategories.length === 0 ||
        product.categories.some((category) => selectedCategoriesSet.has(category));

      const matchesTags =
        filters.selectedTags.length === 0 ||
        product.tags.some((tag) => selectedTagsSet.has(tag));

      return matchesPrice && matchesCategory && matchesTags;
    });
  }
);
