import React from "react";
import classNames from "classnames";

import "./button.scss";

const Button = ({ outline, children, onClick, className }) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
