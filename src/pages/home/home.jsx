import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Categories, Sort, PizzaBlock } from "../../components";

import { setCategory } from "../../redux/actions/filters";

import "./home.scss";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const blocks = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />

        <Sort
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">{blocks}</div>
    </div>
  );
};

export default Home;
