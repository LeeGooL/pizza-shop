import React from "react";

import "./categories.scss";

const Categories = React.memo(({ items = [], onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  const item = items.map((name, index) => {
    return (
      <li
        key={`${name}_${index}`}
        className={activeItem === index ? "active" : ""}
        onClick={() => onSelectItem(index)}
      >
        {name}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {item}
      </ul>
    </div>
  );
});

export default Categories;
