import React, { FC, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/app-reducer";
import { AppReducerActions, AppReducerState } from "../types/app-reducer";

const initialAppReducerState: AppReducerState = {
  todos: [],
};

const appInitialValue = {
  ...initialAppReducerState,
  addTodo: (name: string, description: string, status: boolean) => {},
  deleteTodo: (id: string) => {},
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

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
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
