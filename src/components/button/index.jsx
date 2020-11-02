import React from "react";
import "./button.css";

export const Button = ({ icon, onPress, cla }) => {
  return (
    <button className={cla} onClick={onPress}>
      <img src={icon} alt="ok" />
    </button>
  );
};
