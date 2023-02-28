import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCategories } from '../../categories/categoriesSlice';

const CategorySelect = ({ handleCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(FetchCategories());
  }, []);
  return (
    <select onChange={(e) => handleCategory(e.target.value)}>
      <option selected disabled>Select Category</option>
      {categories.categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.categname}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
