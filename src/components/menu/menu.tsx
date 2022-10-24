import React from "react";
import {MdModeNight} from "react-icons/md";
import Switch from "../Switch/switch";
import "./menu.css";

type props = {
  state: boolean;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Menu: React.FC<props> = ({state, onChangeCheck}) => {
  return (
    <nav className="container">
      <h3>To-do</h3>
      <div className="nightModeContainer">
        <MdModeNight className="iconNight" />
        <Switch state={state} onChangeCheck={onChangeCheck} />
      </div>
    </nav>
  );
};

export default Menu;
