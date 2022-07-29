import React from "react";
import {
  Form,
  IconBox,
  ImageContainer,
  InputContainer,
  InputText,
  LoginButton,
  LogoContainer,
  LogoText,
  LogoText2,
} from "../../GlobalStyles";
import { Forgotpass, RememberLabel, SignInContainer } from "./SignIn.styled";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const SignIn = () => {
  return (
    <>
      <ImageContainer>
        <LogoContainer Acenter="center" LogoPadding="1.5rem 1.5rem 0 0">
          <LogoText
            fsize="2rem"
            size="3rem"
            lineHeight="20px"
            medialineHeight="35px"
          >
            blue
          </LogoText>
          <LogoText2 fsize="2rem" size="3rem" mgLeft="3.5rem">
            watch
          </LogoText2>
        </LogoContainer>
        <SignInContainer>
          <Form>
            <InputContainer>
              <IconBox>
                <BiUserCircle />
              </IconBox>
              <InputText type="text" placeholder="Email address.." />
            </InputContainer>
            <InputContainer>
              <IconBox>
                <AiOutlineLock />
              </IconBox>
              <InputText type="password" placeholder="Password.." />
            </InputContainer>
            <InputContainer justifyC="space-around">
              <InputContainer>
                <input type="checkbox" />
                <RememberLabel>remember Password</RememberLabel>
              </InputContainer>
              <Forgotpass>Forgot password</Forgotpass>
            </InputContainer>
            <InputContainer justifyC="center" margin="2rem 0 0 0 ">
              <LoginButton type="submit">login</LoginButton>
            </InputContainer>
          </Form>
        </SignInContainer>
      </ImageContainer>
    </>
  );
};

export default SignIn;
