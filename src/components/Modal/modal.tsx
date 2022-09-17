import React, {useEffect, useState} from "react";
import "./modal.css";

type props = {
  children: any;
  title: string;
  onClickOutside?: any;
};

const Modal: React.FC<props> = ({onClickOutside, title, children}) => {
  return (
    <div className="outsideModal" onClick={() => onClickOutside()}>
      <div onClick={e => e.stopPropagation()} className="containerModal">
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
