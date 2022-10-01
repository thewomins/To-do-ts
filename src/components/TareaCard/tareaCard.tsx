import React from "react";
import TaskCard from "../TaskCard/taskCard";
import {Todo} from "../../types/Todo.types";
import "./tareaCard.css";

type props = {
  tarea: Todo;
  onClickCard?: any;
  onClickTask?: any;
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
          {tarea.list.map((task, index) => (
            <TaskCard //items de tareas
              key={index}
              task={task}
              onClickTask={(e: any) => onClickTask(e, tarea, task)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TareaCard;
