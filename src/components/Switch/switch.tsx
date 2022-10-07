import React from "react";
import "./switch.css";

type props = {
  state:boolean
  onChangeCheck:any
}

const Switch: React.FC<props> = ({state, onChangeCheck}) => {
  return (
    <label className="switch">
      <input 
        type={"checkbox"} 
        onChange={(e:any)=>onChangeCheck(e)}
        defaultChecked={state}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;