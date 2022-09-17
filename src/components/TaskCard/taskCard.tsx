import React, {Children} from "react";
import "./taskCard.css";
import {TaskType} from "../../types/Todo.types";

type props = {
  task: TaskType;
  onClickTask: any;
  withCheck?: boolean;
  children?: any;
};

const TaskCard: React.FC<props> = ({
  children,
  task,
  onClickTask,
  withCheck = true,
}) => {
  return (
    <div className="task" onClick={onClickTask}>
      <p>{task.body}</p>
      {withCheck ? (
        task.estado ? (
          <p className="state">yes</p>
        ) : (
          <p className="state">nel</p>
        )
      ) : (
        children
      )}
    </div>
  );
};

export default TaskCard;
