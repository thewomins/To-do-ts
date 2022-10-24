import React from "react";
import "./switch.css";

type props = {
  state: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<props> = ({state, onChangeCheck}) => {
  return (
    <label className="switch">
      <input
        type={"checkbox"}
        onChange={e => onChangeCheck(e)}
        checked={state}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
