interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

enum AppReducerActions {
  SET_TODOS = "SET_TODOS",
  ADD_TODO = "ADD_TODO",
}

interface SetTodosAction {
  type: AppReducerActions.SET_TODOS;
  payload: ITodo[];
}

interface AddTodoAction {
  type: AppReducerActions.ADD_TODO;
  payload: Pick<ITodo, "name" | "description">;
}

type AppActions = SetTodosAction | AddTodoAction;

interface AppReducerState {
  todos: ITodo[];
}

export { AppReducerActions };
export type { ITodo, AppActions, AppReducerState };
