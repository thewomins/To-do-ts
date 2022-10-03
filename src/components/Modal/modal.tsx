import React, {useEffect, useState} from "react";
import { MdClose,MdDeleteForever } from "react-icons/md";
import "./modal.css";

type props={
  children :any
  onClickOutside?:any
  style?:any
  show:boolean
  small?:boolean
  onClickDeleteTodo?:any
}

const Modal: React.FC<props> = ({onClickOutside, children,small,style,show,onClickDeleteTodo}) => {
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
        <div className="containerComponentsModal">{children}</div>
      </div>
      <div className="exitModal" onClick={() => onClickOutside()}>
        <MdClose className="icon"/>
      </div>
      {onClickDeleteTodo && 
        <div className="deleteTodo" onClick={() => onClickDeleteTodo()}>
          <MdDeleteForever className="icon"/>
        </div>
}
    </div>
  );
};

export default Modal;
