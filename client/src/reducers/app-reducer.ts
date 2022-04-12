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
  if (action.type === AppReducerActions.SET_IS_UPDATE_FORM) {
    return { ...state, isUpdateForm: action.payload };
  }
  if (action.type === AppReducerActions.SET_UPDATE_ID) {
    return { ...state, updateId: action.payload };
  }
  return { ...state };
};

export default reducer;
