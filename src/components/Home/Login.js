import React from 'react';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  max-width: 350px;
  height: 250px;
  margin-left: 35%;
  margin-top: 30px;
  background-color: white;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;

export const LabelAndInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 5px;
`;

export const TextInput = styled.input`
  font-size: 13px;
  font-weight: 500;
  height: 30px;
  width: 80%;
  border: 1px solid rgb(235, 237, 240);
  border-radius: 3px;
  text-align: left;
  outline: none;
  color: rgba(0, 0, 0, 0.3);
  background-color: whitesmoke;
  box-sizing: border-box;
  padding-left: 5px;
  &:focus {
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    border: 1px solid rgba(74, 159, 245, 1);
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  height: 30px;
  background-color: rgba(74, 159, 245, 1);
  color: white;
  outline: none;
  border: 1px solid rgba(6, 159, 249, 1);
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 12px;
`;

function Login() {
  return (
    <LoginContainer>
      <LabelAndInputWrapper>
        <Label>username</Label>
        <TextInput placeholder="username" />
      </LabelAndInputWrapper>
      <LabelAndInputWrapper>
        <Label>Password</Label>
        <TextInput placeholder="password" />
      </LabelAndInputWrapper>
      <Button>Log In</Button>
    </LoginContainer>
  );
}

export default Login;
