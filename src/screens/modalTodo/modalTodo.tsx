import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal/modal";
import {TaskType, Todo} from "../../types/Todo.types";
import "./modalTodo.css";
import TaskCard from "../../components/TaskCard/taskCard";
import Button from "src/components/Button/button";
import Input from "src/components/Input/input";
import { useTodo } from "src/hooks/Todo";
import TaskCardMenu from "src/components/TaskCardWithMenu/taskCardMenu";

type props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  idTodo: number;
};

const ModalTodo: React.FC<props> = ({setShow, show, idTodo}) => {
  //const [name,setName]=useState("");
  const [task,setTask]=useState<TaskType>({id:0,body:"",estado:false});
  const [addTaskClicked,setAddTaskClicked]=useState(false);
  const {Todos, dispatch} = useTodo();

  const onClickOutside = () => {
    setShow(false);
  };

  const handleAddTask = () => {
    setAddTaskClicked(true);
  };

  const onChangeTasks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task,body:event.target.value});
  };

  useEffect(() =>{
    console.log(task);
  },[task]);

  const onClickAddTask= (() => {
    dispatch({type:"addTask",id:idTodo,Task:task});
    stopAddingTasks();
  });

  const stopAddingTasks= (() => {
    setTask({...task,body:""});
    setAddTaskClicked(false);
  });

  
  
  return (
    <Modal title={Todos.todoItems[idTodo].nombre} onClickOutside={onClickOutside} show={show}>
      <div className="containerDescription">
        <div className="containerTasks">
          {Todos?.todoItems[idTodo].list.map((task, index) => (
            //edit task need to be here 
            <TaskCardMenu //items de tareas
              key={index}
              task={task}
              withCheck={false}
              idTodo={idTodo}
              >
              {/*items in the right of task card */}
              
            </TaskCardMenu>
          ))}
          {addTaskClicked && 
            <div style={{display:"flex",height:"60px"}}>
              <Input
                style={{margin: 5,width:"100%"}}
                id={"added"}
                textoInput="Tarea"
                type="text"
                color="primary"
                onChange={onChangeTasks}
              /> 
              <div className="inputHandlerContainer">
                <div 
                  style={{backgroundColor:"green",width:20,height:20}}
                  onClick={() => onClickAddTask()}
                />
                <div 
                  style={{backgroundColor:"red",width:20,height:20}}
                  onClick={() => stopAddingTasks()}
                />
              </div>
            </div>
          }
          <div className="containerButtonModal">
            <Button
              textoButton="Añadir tarea"
              onClick={() => handleAddTask()}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTodo;
