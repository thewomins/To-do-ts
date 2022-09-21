import React, {useEffect, useState} from "react";
import "./modal.css";

type props={
  children :any
  title? : string
  onClickOutside?:any
  style?:any
  show:boolean
  small?:boolean
}

const Modal: React.FC<props> = ({onClickOutside, title, children,small,style,show}) => {
  return (
    <div 
        className="outsideModal" 
        onClick={() => onClickOutside()}
        style={{...style,display:show? "flex":"none"}}
        hidden={!show}
      >
      <div 
        onClick={e => e.stopPropagation()} 
        className="containerModal"
        style={small? {height: "auto",width: "30%"}:{}}
        >
        <div className="titleModal">
          <h2>{title}</h2>
        </div>
        <div className="containerComponentsModal">{children}</div>
      </div>
      <div className="exitModal" onClick={() => onClickOutside()}>
        x
      </div>
    </div>
  );
};

export default Modal;
