import React, { FC, useRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppProvider";
import st from "../../styles";
import Button from "../ui/Button";

const ChangeForm: FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLInputElement>(null);
  const statusInputRef = useRef<HTMLInputElement>(null);
  const { addTodo, isUpdateForm, getUpdateTodoInfo, updateTodo } =
    useAppContext();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = nameInputRef.current!.value;
    const description = descInputRef.current!.value;
    const status = statusInputRef.current!.checked;

    try {
      if (
        name === "" ||
        name.trim() === "" ||
        description === "" ||
        description.trim() === ""
      ) {
        throw new Error("Invalid input");
      }
      !isUpdateForm
        ? addTodo(name, description, status)
        : updateTodo(name, description, status);
    } catch (e) {
      console.log(e);
    }

    nameInputRef.current!.value = "";
    descInputRef.current!.value = "";
    statusInputRef.current!.checked = false;
  };

  const updateInfo = isUpdateForm ? <p>{getUpdateTodoInfo()?.name}</p> : null;

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        {updateInfo}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            ref={nameInputRef}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            required
            ref={descInputRef}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            ref={statusInputRef}
          />
        </div>
      </div>
      <Button view="primary" onClick={null}>
        {!isUpdateForm ? "Add" : "Update"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${st.indentations.ind_800};
  margin-bottom: ${st.indentations.ind_800};
  padding: ${st.indentations.ind_800};
  background-color: ${st.colors.nt_4};
  border-radius: ${st.borderRadiuses.br_2};
  overflow: hidden;

  label {
    margin-bottom: ${st.indentations.ind_200};
    font-weight: 500;
    color: ${st.colors.nt_10};
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${st.indentations.ind_600};
  }

  & > div > div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: ${st.indentations.ind_200};
    border-radius: ${st.borderRadiuses.br_1};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${st.colors.sp_tel_5};
    }
  }

  input[type="checkbox"] {
    width: 30px;
    height: 30px;
  }

  button {
    width: max-content;
    padding-left: ${st.indentations.ind_1000};
    padding-right: ${st.indentations.ind_1000};
  }

  @media (min-width: ${st.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;

    & > div {
      gap: ${st.indentations.ind_1000};
    }
  }
`;

export default ChangeForm;
