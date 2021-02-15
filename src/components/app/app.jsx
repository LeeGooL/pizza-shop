import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "../";
import { Home, Cart } from "../../pages";

import { setPizzas } from "../../redux/actions/pizzas";

import "./app.scss";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
