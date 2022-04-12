import React, { FC, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/app-reducer";
import {
  AppReducerActions,
  AppReducerState,
  ITodo,
} from "../types/app-reducer";

const initialAppReducerState: AppReducerState = {
  todos: [],
  isUpdateForm: false,
  updateId: "-1",
};

const appInitialValue = {
  ...initialAppReducerState,
  addTodo: (name: string, description: string, status: boolean) => {},
  deleteTodo: (id: string) => {},
  updateTodo: (name: string, description: string, status: boolean) => {},
  openUpdateForm: () => {},
  setUpdateId: (id: string) => {},
  getUpdateTodoInfo: (): ITodo | null => null,
};

const AppContext = React.createContext(appInitialValue);

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppReducerState);

  const URL_BASE = "http://localhost:8079";

  const fetchTodos = async () => {
    const response = await fetch(URL_BASE + "/todos");
    const data = await response.json();
    dispatch({ type: AppReducerActions.SET_TODOS, payload: data.todos });
  };

  const addTodo = async (
    name: string,
    description: string,
    status: boolean
  ) => {
    const response = await fetch(URL_BASE + "/add-todo", {
      method: "POST",
      body: JSON.stringify({ name, description, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: AppReducerActions.SET_TODOS,
      payload: data.todos,
    });
  };

  const deleteTodo = async (id: string) => {
    const response = await fetch(URL_BASE + "/delete-todo/" + id, {
      method: "DELETE",
    });
    const data = await response.json();

    dispatch({
      type: AppReducerActions.SET_TODOS,
      payload: data.todos,
    });
  };

  const updateTodo = async (
    name: string,
    description: string,
    status: boolean
  ) => {
    // close update form
    dispatch({
      type: AppReducerActions.SET_IS_UPDATE_FORM,
      payload: false,
    });

    const response = await fetch(URL_BASE + "/edit-todo/" + state.updateId, {
      method: "PUT",
      body: JSON.stringify({ name, description, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: AppReducerActions.SET_TODOS,
      payload: data.todos,
    });
  };

  const openUpdateForm = () => {
    dispatch({ type: AppReducerActions.SET_IS_UPDATE_FORM, payload: true });
  };

  const setUpdateId = (id: string) => {
    dispatch({ type: AppReducerActions.SET_UPDATE_ID, payload: id });
  };

  const getUpdateTodoInfo = () => {
    const todo = state.todos.find((todo) => todo._id === state.updateId);
    return todo || null;
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos: state.todos,
        isUpdateForm: state.isUpdateForm,
        updateId: state.updateId,
        addTodo,
        deleteTodo,
        updateTodo,
        openUpdateForm,
        setUpdateId,
        getUpdateTodoInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
