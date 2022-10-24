import React from "react";
import TaskCard from "../TaskCard/taskCard";
import {TaskType, Todo} from "../../types/Todo.types";
import "./tareaCard.css";

type props = {
  tarea: Todo;
  onClickCard?: () => void;
  onClickTask?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tarea: Todo,
    task: TaskType,
  ) => void;
};

const TareaCard: React.FC<props> = ({tarea, onClickCard, onClickTask}) => {
  //tarjeta de tarea
  return (
    <div className="card_tarea" onClick={onClickCard}>
      <div className="elements_container">
        <div className="title_container">
          <h3 className="title">{tarea.nombre}</h3>
        </div>
        <div className="tasks_container">
          {tarea.list.map(task => (
            <TaskCard //items de tareas
              key={task.id}
              task={task}
              onClickTask={
                onClickTask ? e => onClickTask(e, tarea, task) : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TareaCard;
