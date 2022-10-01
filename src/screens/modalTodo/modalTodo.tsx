import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal/modal";
import {TaskType} from "../../types/Todo.types";
import "./modalTodo.css";
import Button from "src/components/Button/button";
import Input from "src/components/Input/input";
import { useTodo } from "src/hooks/Todo";
import TaskCardMenu from "src/components/TaskCardWithMenu/taskCardMenu";
import {MdAdd,MdCancel} from "react-icons/md";

type props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  idTodo: string;
};

const ModalTodo: React.FC<props> = ({setShow, show, idTodo}) => {
  //const [name,setName]=useState("");
  const [task,setTask]=useState<TaskType>({id:"0",body:"",estado:false});
  const [addTaskClicked,setAddTaskClicked]=useState(false);
  const {Todos, dispatch} = useTodo();
  const todoPos = Todos.todoItems.findIndex(todo => todo.id === idTodo);
  console.info("totalpos",todoPos,"todos", Todos,"id",idTodo);

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
    <Modal title={Todos.todoItems[todoPos].nombre} onClickOutside={onClickOutside} show={show}>
      <div className="containerDescription">
        <div className="containerTasks">
          {Todos?.todoItems[todoPos].list.map((task, index) => (
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
                >
                <div className="inputHandlerContainer">
                  <div 
                    className="iconContainerL" 
                    style={{paddingLeft: "5px"}}
                    onClick={()=>onClickAddTask()}
                  >
                  <MdAdd className="icon"/>
                  </div>
                  <div className="divisor"/>
                  <div 
                    className="iconContainerR"
                    style={{paddingRight: "5px"}}
                    onClick={()=>stopAddingTasks()}
                    >
                    <MdCancel className="icon"/>
                  </div>
                </div>
              </Input>
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
