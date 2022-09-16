import React, { useEffect, useState } from 'react';
import { useTodo } from './../hooks/Todo';

const todo = {id:1,nombre:'anadido',list: [{id:0,body:"1",estado:false}]}

const Admin=()=> {
  const {Todos,dispatch} = useTodo();
  
  useEffect(()=>(
    console.log(Todos)
  ),[Todos])

  const onclickAdd = ()=>{
    dispatch({type:'addTodo',Todo:todo}) 
  }

  const onclickDel = ()=>{
    dispatch({type:'deleteTodo',id:1})
  }

  const onclickAddTask = ()=>{
    const task={
      id:0,
      body:"prueba task",
      estado:false
    }
    console.log("executed")
    dispatch({type:'addTask',id:0,Task:task})
  }

  return (
    <div className="Menu">
      <header className="App-header">
        <button
          onClick={()=>(onclickAdd())}>
          add
        </button>
        <button
          onClick={()=>onclickDel()}>
          delete
        </button>
        <button
          onClick={()=>(onclickAddTask())}>
          addtask
        </button>
      </header>
    </div>
  );
}

export default Admin;
