/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FetchCategories } from './categoriesSlice';

const Categories = ({ ShowCategories, categoriesView }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => { dispatch(FetchCategories()); }, []);

  const handleFilter = () => ShowCategories(false);

  return categoriesView && (
    <div className="categories-cont">
      { categories.categories.length > 0 && (
      <div className="categories-wrapper">
        <h1>Filter by Categories</h1>
        <i
          className="close-categories"
          onClick={() => { ShowCategories(false); }}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faXmark} />
        </i>
        <div
          className="categories-cards"
          onClick={() => { handleFilter(false); }}
          aria-hidden="true"
        >
          {categories.categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt="brand" />
              <span className="category-desc">
                <h3>{ category.categname}</h3>
                <p>{ category.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      )}
      {categories.errors.length > 0 && <p>Error</p>}
    </div>
  );
};
Categories.propTypes = {
  ShowCategories: PropTypes.func.isRequired,
  categoriesView: PropTypes.bool.isRequired,
};
export default Categories;
