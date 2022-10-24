import React from "react";
import "./button.css";

type props = {
  textoButton: string;
  color?: "primary" | "secondary";
  onClick: () => void;
};

const Button: React.FC<props> = ({
  textoButton = "change txt",
  onClick,
  color,
}) => {
  return (
    <div
      className={color ? "button btn_" + color : "button"}
      style={{backgroundColor: color}}
      onClick={onClick}
    >
      <div className="layerOpacityButton" />
      <p className="text">{textoButton}</p>
    </div>
  );
};

export default Button;
