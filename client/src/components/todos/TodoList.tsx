import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import st from "../../styles";
import SingleTodo from "./SingleTodo";

const TodoList: FC = () => {
  const { todos } = useAppContext();

  return (
    <Wrapper>
      {todos.map((todo) => {
        const { _id: id, name, description, status } = todo;

        return (
          <SingleTodo
            key={id}
            _id={id}
            name={name}
            description={description}
            status={status}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${st.indentations.ind_1400};
  padding: ${st.indentations.ind_800};
  border-radius: ${st.borderRadiuses.br_3};
  overflow: hidden;
  background-color: ${st.colors.nt_7};
`;

export default TodoList;
