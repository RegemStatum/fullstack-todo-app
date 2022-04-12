import React, { FC } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import st from "../../styles";
import { ITodo } from "../../types/app-reducer";
import Button from "../ui/Button";

type SingleTodoProps = Pick<ITodo, "name" | "description" | "status" | "_id">;

const SingleTodo: FC<SingleTodoProps> = ({
  name,
  description,
  status,
  _id: id,
}) => {
  const { deleteTodo, openUpdateForm, setUpdateId } = useAppContext();

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleUpdate = () => {
    setUpdateId(id);
    openUpdateForm();
  };

  return (
    <Wrapper>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        {status && (
          <Button view="complete" onClick={null}>
            Complete
          </Button>
        )}
      </div>
      <div>
        <Button view="update" onClick={handleUpdate}>
          Update
        </Button>
        <Button view="delete" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${st.colors.nt_10};
  border-radius: ${st.borderRadiuses.br_1};
  overflow: hidden;
  padding-bottom: ${st.indentations.ind_800};
  border-bottom: 1px solid ${st.colors.nt_1};

  h4 {
    font-size: ${st.fontSizes.fs_700};
    color: ${st.colors.nt_2};
  }

  p {
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }

  & > div:first-child button {
    cursor: default;
  }

  & > div:last-child {
    max-width: max-content;
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_200};
  }
`;

export default SingleTodo;
