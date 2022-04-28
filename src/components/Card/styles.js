import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 664px;
  height: 636px;
  border-radius: 8px;
  background-color: #ffede0;
  @media screen and (max-width: 768px) {
    width: 320px;
    margin: 16px 0px 0px 0px;
  }
`;
export const CardTitleStyled = styled.div`
  width: 349px;
  height: 123px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 265px;
`;

export const CardDescriptionStyled = styled.div`
  width: 427px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 265px;
    margin: 32px 0px 0px 0px;
`;
