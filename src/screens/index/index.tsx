import React, {useEffect, useState} from "react";
import "./index.css";
import TareaCard from "./../../components/TareaCard/tareaCard";
import Menu from "./../../components/menu/menu";
import Button from "./../../components/Button/button";
import {useTodo} from "../../hooks/Todo";
import ModalAddTodo from "../ModalAddTodo/modalAddTodo";

import {TaskType, Todo} from "./../../types/Todo.types";
import ModalTodo from "../modalTodo/modalTodo";

export const App: React.FC = () => {
  const {Todos, dispatch} = useTodo();
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [todoSelected, setTodoSelected] = useState<Todo | undefined>();

  useEffect(() => console.log("todo", Todos), [Todos]);

  const onClickAdd = () => {
    setShowModalAdd(true);
    //const todo = {id:1,nombre:'anadido',list: [{id:0,body:"1",estado:false}]}
    //dispatch({type:"addTodo",Todo:todo})
  };

  const onClickCard = (todo: Todo) => {
    setShowModalDetail(true);
    setTodoSelected(todo);
  };

  const onClickTask = (event: any, todo: Todo, task: TaskType) => {
    const task1 = {
      id: 0,
      body: "prueba task",
      estado: false,
    };
    dispatch({type: "changeStateTask", idTodo: todo.id, idTask: task.id});
    //task.estado=!task.estado
    event.stopPropagation();
  };

  const onClickSubmit = (todo: Todo) => {
    console.info("click submit", todo);
    dispatch({type: "addTodo", Todo: todo});
  };

  return (
    <div>
      <ModalAddTodo
        show={showModalAdd}
        setShow={setShowModalAdd}
        title={"pepelanpof"}
        onClickSubmit={onClickSubmit}
      />
      <ModalTodo
        show={showModalDetail}
        setShow={setShowModalDetail}
        Todo={todoSelected}
      />
      <Menu />
      <div className="contenedor_buttons">
        <Button textoButton="Añadir nuevo To-do" onClick={() => onClickAdd()} />
      </div>
      <div className="contenedor_tareas">
        {Todos.todoItems.map((Todo, index) => (
          <TareaCard
            key={index}
            onClickCard={(e: any) => onClickCard(Todo)}
            onClickTask={onClickTask}
            tarea={Todo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
