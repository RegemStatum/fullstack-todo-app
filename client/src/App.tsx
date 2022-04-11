import React from "react";
import styled from "styled-components";
import ChangeForm from "./components/todos/ChangeForm";
import MainHeading from "./components/todos/MainHeading";
import TodoList from "./components/todos/TodoList";
import AppProvider from "./context/AppProvider";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <AppProvider>
        <MainHeading />
        <ChangeForm />
        <TodoList />
      </AppProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
