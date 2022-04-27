import styled from "styled-components";

export const TextStyled = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const H1Styled = styled(TextStyled)`
  font-size: 48px;
  line-height: 72px;
  border-bottom: 1px solid gray;
`;

export const H2Styled = styled(TextStyled)`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
`;
