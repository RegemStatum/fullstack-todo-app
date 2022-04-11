import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";

type View = "primary" | "update" | "delete" | "complete";

interface ButtonProps {
  view: View;
  onClick: any;
  children: string;
}

const Button: FC<ButtonProps> = ({ view, children, onClick }) => {
  return (
    <Wrapper view={view} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ view: View }>`
  padding: ${st.indentations.ind_400} ${st.indentations.ind_800};
  border-radius: 20px;
  border: none;
  border-top-style: solid;
  border-bottom-style: solid;
  border-inline-style: solid;
  border-inline-width: 3px;
  cursor: pointer;
  font-weight: 600;

  ${(props) =>
    props.view === "primary"
      ? css`
          background-color: ${st.colors.nt_2};
          color: ${st.colors.nt_9};
        `
      : props.view === "update"
      ? css`
          background-color: ${st.colors.sp_tel_9};
          color: ${st.colors.sp_tel_2};
        `
      : props.view === "complete"
      ? css`
          background-color: ${st.colors.sp_ble_9};
          color: ${st.colors.sp_ble_2};
        `
      : css`
          background-color: ${st.colors.sp_red_9};
          color: ${st.colors.sp_red_2};

          border-inline: 3px solid ${st.colors.sp_red_2};
        `}
`;

export default Button;
