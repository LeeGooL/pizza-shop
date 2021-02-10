import React from "react";
import {Route} from 'react-router-dom'; 

import { Header } from "../";
import { Home, Cart } from "../../pages";

import "./app.scss";

const App = () => {
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
