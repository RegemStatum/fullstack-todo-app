import {
  AppActions,
  AppReducerActions,
  AppReducerState,
} from "../types/app-reducer";

const reducer = (
  state: AppReducerState,
  action: AppActions
): AppReducerState => {
  if (action.type === AppReducerActions.SET_TODOS) {
    return { ...state, todos: action.payload };
  }
  return { ...state };
};

export default reducer;
