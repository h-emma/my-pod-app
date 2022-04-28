import styled from "styled-components";

export const ImageStyled = styled.img`
  width: 253px;
  height: 253px;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
  margin-top: 38px;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
