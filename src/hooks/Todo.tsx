import React, {useContext, useId, useReducer} from "react";
import {reducerAction, TodoList} from "../types/Todo.types";
import { v4 as uuid } from "uuid";

const initialState: TodoList = {
  todoItems: [
    {
      id: "0",
      nombre: "Compras supermercado",
      list: [
        {
          id: "0",
          body: "leche",
          estado: false,
        },
        {
          id: "1",
          body: "azucar",
          estado: false,
        },
        {
          id: "2",
          body: "te",
          estado: false,
        },
      ],
    },
    {
      id: "1",
      nombre: "prueba2",
      list: [{id: "0", body: "todo 2", estado: false}],
    },
  ],
};

function idGen() {
  //make logicarda
  return uuid();
}

const reducer = (state: TodoList, action: reducerAction) => {
  switch (action.type) {
    case "addTodo":
      action.Todo.id = idGen();
      return {
        ...state,
        todoItems: [...state.todoItems, {...action.Todo}],
        //añadir
      };
    case "updateTodo":
      return {
        ...state,
      };
    case "deleteTodo": {
      const filteredTodo = state.todoItems.filter(
        todo => todo.id !== action.id,
      );
      return {
        ...state,
        todoItems: filteredTodo,
      };
    }
    case "addTask": {
      const a = state.todoItems.findIndex(todo => todo.id === action.id);
      action.Task.id = idGen();
      return {
        //estado anterior, estado nuevo
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, a), // separa la primera parte
          {
            //se edita la parte encontrada
            ...state.todoItems[a], //copia del estado anterior del todo
            list: [
              //al estado nuevo se añade task
              ...state.todoItems[a].list, //copia del estado anterior de task
              {...action.Task}, //se añade task nueva
            ],
          }, //fin edicion
          ...state.todoItems.slice(a + 1),
        ], // resto de la lista added
      };
    }
    case "changeStateTask": {
      //immer can simplify this
      const b = state.todoItems.findIndex(todo => todo.id === action.idTodo);
      const c = state.todoItems[b].list.findIndex(
        task => task.id === action.idTask,
      );
      return {
        //estado anterior, estado nuevo
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, b), // separa la primera parte
          {
            //se edita la parte encontrada
            ...state.todoItems[b], //copia del estado anterior del todo
            //al estado nuevo se añade task
            list: [
              ...state.todoItems[b].list.slice(0, c), //separa primera parte de list
              {
                ...state.todoItems[b].list[c], //estado anterior de la task
                estado: !state.todoItems[b].list[c].estado, //actualizado el estado
              },
              ...state.todoItems[b].list.slice(c + 1), //resto de task
            ],
          }, //fin edicion tasks
          ...state.todoItems.slice(b + 1),
        ], // resto de los Todos added
      };
    }
    case "updateTask": {
      //immer can simplify this
      const b = state.todoItems.findIndex(todo => todo.id === action.idTodo);
      const c = state.todoItems[b].list.findIndex(
        task => task.id === action.idTask,
      );
      return {
        //estado anterior, estado nuevo
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, b), // separa la primera parte
          {
            //se edita la parte encontrada
            ...state.todoItems[b], //copia del estado anterior del todo
            //al estado nuevo se añade task
            list: [
              ...state.todoItems[b].list.slice(0, c), //separa primera parte de list
              {
                ...state.todoItems[b].list[c], //estado anterior de la task
                body: action.body, //actualizado el estado
              },
              ...state.todoItems[b].list.slice(c + 1), //resto de task
            ],
          }, //fin edicion tasks
          ...state.todoItems.slice(b + 1),
        ], // resto de los Todos added
      };
    }
    case "deleteTask": {
      //immer can simplify this
      const b = state.todoItems.findIndex(todo => todo.id === action.idTodo);
      const c = state.todoItems[b].list.findIndex(
        task => task.id === action.idTask,
      );
      return {
        //estado anterior, estado nuevo
        ...state,
        todoItems: [
          ...state.todoItems.slice(0, b), // separa la primera parte
          {
            //se edita la parte encontrada
            ...state.todoItems[b], //copia del estado anterior del todo
            //al estado nuevo se añade task
            list: [
              ...state.todoItems[b].list.slice(0, c), //separa primera parte de list
              //need to see if this works
              ...state.todoItems[b].list.slice(c + 1), //resto de task
            ],
          }, //fin edicion tasks
          ...state.todoItems.slice(b + 1),
        ], // resto de los Todos added
      };
    }
    default:
      throw new Error();
  }
};

const defaultDispatch: React.Dispatch<reducerAction> = () => initialState;
const TodoContext = React.createContext({
  Todos: initialState,
  dispatch: defaultDispatch,
});

const TodoContextProvider = ({children}: any) => {
  const [Todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{Todos, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  const {Todos = initialState, dispatch} = useContext(TodoContext);
  return {Todos, dispatch};
};

export {TodoContextProvider, useTodo};
