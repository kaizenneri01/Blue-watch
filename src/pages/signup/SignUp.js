import React, { useState } from "react";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { BiShowAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {
  Form,
  IconBox,
  ImageContainer,
  InputContainer,
  InputPassword,
  InputText,
  LoginButton,
  LogoContainer,
  LogoText,
  LogoText2,
  ShowButton,
} from "../../GlobalStyles";
import { SignInContainer } from ".././signIn/SignIn.styled";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfimPass, setShowConfirmPass] = useState(false);

  const showPassword = (e) => {
    setShowPass(!showPass);
  };

  const showConfirmPassword = (e) => {
    setShowConfirmPass(!showConfimPass);
  };

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
              <InputText type="text" placeholder="Full name.." />
            </InputContainer>
            <InputContainer>
              <IconBox>
                <AiOutlineMail />
              </IconBox>
              <InputText type="email" placeholder="Email address.." />
            </InputContainer>
            <InputContainer>
              <IconBox>
                <AiOutlineUnlock />
              </IconBox>
              <InputPassword
                type={showPass ? "text" : "password"}
                placeholder="Password.."
              />
              <ShowButton onClick={showPassword}>
                <BiShowAlt />
              </ShowButton>
            </InputContainer>
            <InputContainer>
              <IconBox>
                <AiOutlineLock />
              </IconBox>
              <InputPassword
                type={showConfimPass ? "text" : "password"}
                placeholder="Confirm Password.."
              />
              <ShowButton onClick={showConfirmPassword}>
                <BiShowAlt />
              </ShowButton>
            </InputContainer>
            <InputContainer justifyC="center" margin="2rem 0 0 0 ">
              <LoginButton type="submit" onSubmit={(e) => e.preventDefault()}>
                create account
              </LoginButton>
            </InputContainer>
          </Form>
        </SignInContainer>
      </ImageContainer>
    </>
  );
};

export default SignUp;
