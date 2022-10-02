export type TaskType ={
    id: string,
    body: string, 
    estado: boolean
}

export type Todo = {
    id:string,
    nombre:string,
    list: TaskType[]
}

export type TodoList = {
    todoItems: Todo[]
}

export type reducerAction = 
    | {type: "addTodo" | "updateTodo"; Todo:Todo}
    | {type: "deleteTodo"; id:string}
    | {type: "addTask"; id:string; Task:TaskType}
    | {type: "changeStateTask"; idTodo:string; idTask:string}
    | {type: "updateTask"; idTodo:string; idTask:string; body:string}
    | {type: "deleteTask"; idTodo:string; idTask:string}
    | {type: "changeTitle"; idTodo:string; title:string};
    