import React from "react";
import {
  Form,
  ImageContainer,
  InputText,
  LoginButton,
  LogoContainer,
  LogoText,
  LogoText2,
} from "../../GlobalStyles";
import { SignInContainer } from "./SignIn.styled";

const SignIn = () => {
  return (
    <>
      <ImageContainer>
        <LogoContainer Acenter="center" LogoPadding="1.5rem 1.5rem 0 0">
          <LogoText
            fsize="1.5rem"
            size=""
            lineHeight="20px"
            medialineHeight="35px"
          >
            blue
          </LogoText>
          <LogoText2 fsize="1.5rem" mgLeft="3.5rem">
            watch
          </LogoText2>
        </LogoContainer>
        <SignInContainer>
          <Form>
            <InputText type="input" placeholder="Email address" />
            <InputText type="input" placeholder="Password" />
            <LoginButton>login</LoginButton>
          </Form>
        </SignInContainer>
      </ImageContainer>
    </>
  );
};

export default SignIn;
