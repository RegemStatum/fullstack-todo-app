import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";

const MainHeading: FC = () => {
  return <Wrapper>My Todos</Wrapper>;
};

const Wrapper = styled.h1`
  padding: ${st.indentations.ind_800} 0;
  text-align: center;
`;

export default MainHeading;
