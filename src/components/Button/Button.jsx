import React from "react";

import "./Button.scss";

const Button = ({buttonText, buttonType, onClick}) => {

  let buttonClassName = "button";

  if (buttonType === "primary") {
    buttonClassName += " primary";
  } else if (buttonType === "secondary") {
    buttonClassName += " secondary";
  } else if (buttonType === "tertiary") {
    buttonClassName += " tertiary";
  }

  return <button className={buttonClassName} onClick={onClick}>{buttonText}</button>;
};

export default Button;
