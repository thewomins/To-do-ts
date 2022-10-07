export type TaskType = {
  id: string;
  body: string;
  estado: boolean;
};

export type Todo = {
  id: string;
  nombre: string;
  list: TaskType[];
};

export type TodoList = {
  todoItems: Todo[];
};

export type reducerAction =
  | {type: "addTodo" | "updateTodo"; Todo: Todo}
  | {type: "deleteTodo"; id: string}
  | {type: "addTask"; id: string; Task: TaskType}
  | {type: "changeStateTask"; idTodo: string; idTask: string}
  | {type: "updateTask"; idTodo: string; idTask: string; body: string}
  | {type: "deleteTask"; idTodo: string; idTask: string}
  | {type: "changeTitle"; idTodo: string; title: string};

export type TTheme = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secundary: string;
  onSecundary: string;
  secundaryContainer: string;
  onSecundaryContainer: string;
  tertiary: string;
  onTertiaty: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  outline: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  shadow: string;
  shadowTransparency: string;
  opacityHover: string;
};

export type TThemesAvailable = "light" | "dark";

export type reducerActionTheme= |{type:"changeThemeTo",themeName:TThemesAvailable};
