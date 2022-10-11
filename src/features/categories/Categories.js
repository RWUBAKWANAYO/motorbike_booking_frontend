import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import brand from '../../assets/images/brand.png';

const Categories = ({ ShowCategories, categoriesView }) => {
  const handleFilter = () => ShowCategories(false);

  return categoriesView && (
    <div className="categories-cont">
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
          {Array.from(Array(10).keys()).map((category) => (
            <div className="category-card" key={category}>
              <img src={brand} alt="brand" />
              <span className="category-desc">
                <h3>BMW</h3>
                <p>Bayerische Motoren Werke AG, abbreviated as BMW.</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Categories.propTypes = {
  ShowCategories: PropTypes.func.isRequired,
  categoriesView: PropTypes.bool.isRequired,
};
export default Categories;
