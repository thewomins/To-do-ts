import React, {useEffect, useState} from "react";
import {TaskType} from "../../types/Todo.types";
import TaskCard from "../../components/TaskCard/taskCard";
import Input from "../Input/input";
import { useTodo } from "src/hooks/Todo";

type props = {
  task: TaskType;
  children: any;
  onClickTask?: any;
  withCheck?: boolean;
  idTodo: number;
};

const TaskCardMenu: React.FC<props> = ({
  task,
  children,
  onClickTask,
  withCheck,
  idTodo,
}) => {
  const [taskHover, setTaskHover] = useState(false);
  const [taskBody, setTaskBody] = useState("");
  const [taskEditing, setTaskEditing] = useState(false);
  const {dispatch} = useTodo();

  useEffect(() => console.log(taskHover), [taskHover]);

  const onChangeTasks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskBody(event.target.value);
  };

  const handleOnMouseOverTask = () => {
    setTaskHover(true);
    return;
  };

  const handleOnMouseOutTask = () => {
    setTaskHover(false);
  };

  const onClickEditTask= ((taskId:number) => {
    setTaskBody(task.body);
    setTaskEditing(true);
    console.log("edit",taskId);
  });

  const onClickDeleteTask= ((taskId:number) => {
    console.log("delete",taskId);
  });

  const onClickAddTask= ((taskId:number) => {
    dispatch({type:"updateTask", idTodo:idTodo, idTask: task.id, body:taskBody});
    console.log("add",taskId);
    stopEditing();
  });

  const stopEditing= (() => {
    setTaskEditing(false);
    setTaskBody("");
  });

  return (
    <div>
      {!taskEditing ?
        <TaskCard //items de tareas
          task={task}
          onClickTask={onClickTask}
          withCheck={withCheck}
          onMouseEnter={handleOnMouseOverTask}
          onMouseLeave={handleOnMouseOutTask}>
          {/*items in the right of task card */}
          {taskHover && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 0,
                marginLeft: "auto",
              }}>
              <div
                style={{backgroundColor: "yellow", width: 20, height: 20}}
                onClick={()=>onClickEditTask(task.id)}
              />
              <div
                style={{backgroundColor: "red", width: 20, height: 20}}
                onClick={()=>onClickDeleteTask(task.id)}
              />
            </div>
          )}
        </TaskCard>
      :
      <div style={{display:"flex",height:"60px"}}>
        <Input
          style={{margin: 5,width:"100%"}}
          id={"added"}
          textoInput="Tarea"
          type="text"
          color="primary"
          onChange={onChangeTasks} 
          value={taskBody}
        /> 
        <div className="inputHandlerContainer">
          <div 
            style={{backgroundColor:"green",width:20,height:20}}
            onClick={()=>onClickAddTask(task.id)}
          />
          <div 
            style={{backgroundColor:"red",width:20,height:20}}
            onClick={()=>stopEditing()}
          />
        </div>
      </div>
      }
    </div>
  );
};

export default TaskCardMenu;
