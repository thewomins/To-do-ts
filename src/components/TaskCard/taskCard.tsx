import React, {Children} from "react";
import "./taskCard.css";
import {TaskType} from "../../types/Todo.types";
import {MdOutlineCircle,MdCheckCircleOutline} from "react-icons/md";

type props = {
  task: TaskType;
  onClickTask?: any;
  className?: string;
  withCheck?: boolean;
  children?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
};

const TaskCard: React.FC<props> = ({
  children,
  task,
  onClickTask,
  withCheck = true,
  onMouseEnter,
  onMouseLeave,
  className="task",
}) => {
  return (
    <div 
      className={className} 
      onClick={onClickTask}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      >
      <p>{task.body}</p>
      {withCheck && (
        task.estado ? (
          <MdCheckCircleOutline className="state active"/>
        ) : (
          <MdOutlineCircle className="state" />
        )
      )}
      {children}
    </div>
  );
};

export default TaskCard;
