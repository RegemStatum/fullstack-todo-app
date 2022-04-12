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
  SET_IS_UPDATE_FORM = "SET_IS_UPDATE_FORM",
  SET_UPDATE_ID = "SET_UPDATE_ID",
}

interface SetTodosAction {
  type: AppReducerActions.SET_TODOS;
  payload: ITodo[];
}

interface SetIsUpdateFormAction {
  type: AppReducerActions.SET_IS_UPDATE_FORM;
  payload: boolean;
}

interface SetUpdateId {
  type: AppReducerActions.SET_UPDATE_ID;
  payload: string;
}

type AppActions = SetTodosAction | SetIsUpdateFormAction | SetUpdateId;

interface AppReducerState {
  todos: ITodo[];
  isUpdateForm: boolean;
  updateId: string;
}

export { AppReducerActions };
export type { ITodo, AppActions, AppReducerState };
