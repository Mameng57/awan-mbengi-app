import React from "react";
import Styles from "./Styles/Button.module.css";

const Button = ({style, active, inverted, ...props}) => {

  const activeStyles = {
    ...style,
    backgroundColor: "#deb887",
    color: "white",
  };

  const onClickHandler = () => {
    if (props.onChangeCategory) {
      return props.onChangeCategory(props.children, props.id);
    }
    return;
  }

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={inverted ? Styles.inverted : Styles.button}
      style={active ? activeStyles : style}>
      {props.children}
    </button>
  );
}

export default Button;
