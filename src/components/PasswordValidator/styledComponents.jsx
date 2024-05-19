import styled from "styled-components";

export const MainConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`;

export const Card = styled.div`
  text-align: center;
  border-radius: 10px;
  color: #ffffff;
  padding: 30px;
  background-color: #383a4e;
  font-family:Roboto;
  @media screen and (max-width: 476px){
    width:80%;
  }
`;

export const MainHeading = styled.h1`
  font-size: 32px;
  margin:0px;
  line-height:2;
`;

export const MainPara = styled.p`
  font-size: 13px;
  margin:0px;
  line-height:2;
`;
export const PasswordField = styled.input`
  width: 80%;
  height: 30px;
  margin:20px 0px 8px 0px;
`;

export const ErrorMsg = styled.p`
  color: #ef4444;
  margin:0px;
  font-size:11px;
`;
