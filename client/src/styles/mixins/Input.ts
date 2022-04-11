import styled from "styled-components";
import st from "..";

const InputWr = styled.input`
  padding: ${st.indentations.ind_400} ${st.indentations.ind_800};
  border-radius: ${st.borderRadiuses.br_1};

  &:focus {
    outline: none;
  }
`;

export default InputWr;
