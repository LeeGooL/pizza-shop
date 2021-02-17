import React from "react";
import PropTypes from "prop-types";

import "./categories.scss";

const Categories = React.memo(
  ({ items = [], onClickCategory, activeCategory }) => {
    const item = items.map((name, index) => {
      return (
        <li
          key={`${name}_${index}`}
          className={activeCategory === index ? "active" : ""}
          onClick={() => onClickCategory(index)}
        >
          {name}
        </li>
      );
    });

    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {item}
        </ul>
      </div>
    );
  }
);

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
