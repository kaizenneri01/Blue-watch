import React, { useState } from "react";
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
import { Forgotpass, RememberLabel, SignInContainer } from "./SignIn.styled";
import { BiShowAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
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
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            blue
          </LogoText>
          <LogoText2
            fsize="2rem"
            size="3rem"
            mgLeft="3.5rem"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            watch
          </LogoText2>
        </LogoContainer>
        <SignInContainer>
          <Form>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <BiUserCircle />
              </IconBox>
              <InputText
                type="text"
                placeholder="Email address.."
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
            </InputContainer>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AiOutlineLock />
              </IconBox>
              <InputPassword
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                type={showPass ? "text" : "password"}
                placeholder="Password.."
              />
              <ShowButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={showPassword}
              >
                <BiShowAlt />
              </ShowButton>
            </InputContainer>
            <InputContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              justifyC="space-around"
            >
              <InputContainer>
                <input type="checkbox" />
                <RememberLabel>remember Password</RememberLabel>
              </InputContainer>
              <Forgotpass>Forgot password</Forgotpass>
            </InputContainer>
            <InputContainer justifyC="center" margin="2rem 0 0 0 ">
              <LoginButton
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.07 }}
                transition={{ delay: 0.3, scale: { delay: 0 } }}
              >
                login
              </LoginButton>
            </InputContainer>
          </Form>
        </SignInContainer>
      </ImageContainer>
    </>
  );
};

export default SignIn;
