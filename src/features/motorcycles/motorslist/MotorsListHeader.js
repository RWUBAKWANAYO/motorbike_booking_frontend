import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import Categories from '../../categories/Categories';

const MotorsListHeader = () => {
  const [categoriesView, setCategoriesView] = useState(false);

  const ShowCategories = (status) => setCategoriesView(status);

  return (
    <div className="motorslist-header">
      <h1>ALL MOTORCYLES</h1>
      <i
        className="brands-filter"
        onClick={() => { ShowCategories(true); }}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={faArrowUpWideShort} />
      </i>
      <Categories ShowCategories={ShowCategories} categoriesView={categoriesView} />
    </div>
  );
};

export default MotorsListHeader;
