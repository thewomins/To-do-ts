import React, {useEffect, useId, useState} from "react";
import Modal from "../../components/Modal/modal";
import {Todo, TaskType} from "../../types/Todo.types";
import "./modalAddTodo.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import { v4 as uuid } from "uuid";

type props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onClickSubmit: (todo: Todo) => void;
};

const ModalAddTodo: React.FC<props> = ({
  onClickSubmit,
  title,
  setShow,
  show,
}) => {
  const [name, setName] = useState("");
  const [task, setTask] = useState<TaskType[]>([
    {id: "0", body: "", estado: false},
  ]);

  useEffect(() => {
    console.log("task", task);
  }, [task]);

  useEffect(() => {
    setName("");
    setTask([{id: "0", body: "", estado: false}]);
    console.log("reset modal");
  }, [show]);

  const onClickOutside = () => {
    setShow(false);
  };

  const handleAddTask = () => {
    setTask([...task, {id: uuid(), body: "", estado: false}]);
  };

  const handleDeleteTask = () => {
    setTask([...task.slice(0, task.length - 1)]);
  };

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeTasks = (
    event: React.ChangeEvent<HTMLInputElement>,
    idTask: string,
  ) => {
    console.log(idTask);
    const id = task.findIndex(task => task.id === idTask);
    setTask([
      ...task.slice(0, id), // separa la primera parte
      {
        //se edita la parte encontrada
        ...task[id], //copia del estado anterior de task
        body: event.target.value, //se actualiza el body
      }, //fin edicion
      ...task.slice(id + 1), // resto de la lista added]);
    ]);
  };

  return (
    <Modal onClickOutside={onClickOutside} show={show}>
      <div className="titleModalAddTodo">
        <h2>{title}</h2>
      </div>
      <div className="containerDescription">
        <div>
          <Input
            id="nombre"
            textoInput="Nombre"
            type="text"
            color="primary"
            onChange={onChangeName}
          />
          <div className="containerButtonModal">
            <Button
              textoButton="Borrar tarea"
              color="secondary"
              onClick={() => handleDeleteTask()}
            />
            <Button
              textoButton="Añadir tarea"
              color="primary"
              onClick={() => handleAddTask()}
            />
          </div>
        </div>
        <div className="containerAddTaskModal">
          {task.map((element, index) => (
            <Input
              key={index}
              style={{margin: 5}}
              id={element.id}
              textoInput="Tarea"
              type="text"
              color="primary"
              onChange={onChangeTasks}
            />
          ))}
        </div>
        <div className="containerButtonActionModal">
          <Button 
            textoButton="Cancelar" 
            color="secondary"
            onClick={() => onClickOutside()} 
          />
          <Button
            textoButton="Añadir To-do"
            color="primary"
            onClick={() => onClickSubmit({id: "0", list: task, nombre: name})}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddTodo;
