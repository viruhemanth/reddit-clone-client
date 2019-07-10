import React from 'react';
import styled from 'styled-components';
import {
  LoginContainer,
  LabelAndInputWrapper,
  Label,
  TextInput,
  Button,
} from './Login';

const SignupContainer = styled(LoginContainer)`
  height: 350px;
`;

function Signup() {
  return (
    <SignupContainer>
      <LabelAndInputWrapper>
        <Label>username</Label>
        <TextInput placeholder="username" />
      </LabelAndInputWrapper>
      <LabelAndInputWrapper>
        <Label>Password</Label>
        <TextInput placeholder="password" />
      </LabelAndInputWrapper>
      <LabelAndInputWrapper>
        <Label>Confirm Password</Label>
        <TextInput placeholder="confirm password" />
      </LabelAndInputWrapper>
      <Button>Sign up</Button>
    </SignupContainer>
  );
}

export default Signup;
