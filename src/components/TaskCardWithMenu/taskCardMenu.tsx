import React, {useState} from "react";
import {TaskType} from "../../types/Todo.types";
import TaskCard from "../../components/TaskCard/taskCard";
import Input from "../Input/input";
import "./taskCardMenu.css";
import {useTodo} from "src/hooks/Todo";
import {MdEdit, MdDeleteForever, MdAdd, MdCancel} from "react-icons/md";

type props = {
  task: TaskType;
  onClickTask?: () => void;
  withCheck?: boolean;
  idTodo: string;
};

const TaskCardMenu: React.FC<props> = ({
  task,
  onClickTask,
  withCheck,
  idTodo,
}) => {
  const [taskHover, setTaskHover] = useState(false);
  const [taskBody, setTaskBody] = useState("");
  const [taskEditing, setTaskEditing] = useState(false);
  const {dispatch} = useTodo();

  /*useEffect(() => console.log(taskHover), [taskHover]);*/

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

  const onClickEditTask = (taskId: string) => {
    setTaskBody(task.body);
    setTaskEditing(true);
    console.log("edit", taskId);
  };

  const onClickDeleteTask = (taskId: string) => {
    dispatch({type: "deleteTask", idTodo: idTodo, idTask: task.id});
    console.log("deleted", taskId);
  };

  const onClickAddTask = (taskId: string) => {
    dispatch({
      type: "updateTask",
      idTodo: idTodo,
      idTask: task.id,
      body: taskBody,
    });
    console.log("add", taskId);
    stopEditing();
  };

  const stopEditing = () => {
    setTaskEditing(false);
    setTaskBody("");
  };

  return (
    <div>
      {!taskEditing ? (
        <TaskCard //items de tareas
          className="taskDetails"
          task={task}
          onClickTask={onClickTask}
          withCheck={withCheck}
          onMouseEnter={handleOnMouseOverTask}
          onMouseLeave={handleOnMouseOutTask}
        >
          {/*items in the right of task card */}
          {taskHover && (
            <div className="iconsContainer">
              <div
                className="iconContainerL"
                style={{paddingLeft: "5px"}}
                onClick={() => onClickEditTask(task.id)}
              >
                <MdEdit className="icon" />
              </div>
              <div className="divisor" />
              <div
                className="iconContainerR"
                style={{paddingRight: "5px"}}
                onClick={() => onClickDeleteTask(task.id)}
              >
                <MdDeleteForever className="icon" />
              </div>
            </div>
          )}
        </TaskCard>
      ) : (
        <div
          style={{display: "flex", margin: "4px 5px 4px 5px", height: "50px"}}
        >
          <Input
            style={{width: "100%"}}
            id={"added"}
            textoInput="Tarea"
            type="text"
            color="primary"
            onChange={onChangeTasks}
            value={taskBody}
          >
            <div
              className="inputHandlerContainer"
              style={{
                backgroundColor: "var(--surfaceVariant)",
                borderRadius: "0 2px 0 0",
              }}
            >
              <div
                className="iconContainerL"
                style={{paddingLeft: "5px"}}
                onClick={() => onClickAddTask(task.id)}
              >
                <MdAdd className="icon" />
              </div>
              <div className="divisor" />
              <div
                className="iconContainerR"
                style={{paddingRight: "5px"}}
                onClick={() => stopEditing()}
              >
                <MdCancel className="icon" />
              </div>
            </div>
          </Input>
        </div>
      )}
    </div>
  );
};

export default TaskCardMenu;
