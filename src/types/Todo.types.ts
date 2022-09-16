export type TaskType ={
    id:number,
    body: string, 
    estado: boolean
}

export type Todo = {
    id:number,
    nombre:string,
    list: TaskType[]
}

export type TodoList = {
    todoItems: Todo[]
}

export type reducerAction = 
    | {type: "addTodo" | "updateTodo"; Todo:Todo}
    | {type: "deleteTodo"; id:number}
    | {type: "addTask"; id:number; Task:TaskType}
    | {type: "changeStateTask"; idTodo:number; idTask:number};