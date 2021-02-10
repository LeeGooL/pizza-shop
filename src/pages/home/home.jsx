import React from "react";

import { Categories, Sort, PizzaBlock } from "../../components";

import "./home.scss";

const Home = ({ items }) => {
  const blocks = items.map((obj) => (
    <PizzaBlock key={obj.id} {...obj} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />

        <Sort items={["популярности", "цене", "алфавиту"]} />
      </div>

      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">{blocks}</div>
    </div>
  );
};

export default Home;
