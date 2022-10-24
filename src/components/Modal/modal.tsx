import React from "react";
import {MdClose, MdDeleteForever} from "react-icons/md";
import "./modal.css";

type props = {
  children: React.ReactNode;
  onClickOutside?: () => void;
  style?: React.CSSProperties;
  show: boolean;
  small?: boolean;
  onClickDeleteTodo?: () => void;
};

const Modal: React.FC<props> = ({
  onClickOutside,
  children,
  small,
  style,
  show,
  onClickDeleteTodo,
}) => {
  return (
    <div
      className="outsideModal"
      onClick={onClickOutside ? () => onClickOutside() : undefined}
      style={{...style, display: show ? "flex" : "none"}}
      hidden={!show}
    >
      {onClickDeleteTodo && (
        <div className="deleteTodo" onClick={onClickDeleteTodo}>
          <MdDeleteForever className="icon" />
        </div>
      )}
      <div
        onClick={e => e.stopPropagation()}
        className="containerModal"
        style={small ? {height: "auto", width: "30%"} : {}}
      >
        <div className="containerComponentsModal">{children}</div>
      </div>
      <div className="exitModal" onClick={onClickOutside}>
        <MdClose className="icon" />
      </div>
    </div>
  );
};

export default Modal;
