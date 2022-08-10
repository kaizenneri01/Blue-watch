import React from "react";
import {
  GoogleButton,
  ImageContainer,
  LoginButton,
  LogoContainer,
  LogoText,
  LogoText2,
} from "../../GlobalStyles";
import {
  SubLogoTex2,
  SubLogoText,
  TitleContainer,
  TitleText,
  TitleText2,
} from "./Title.styled";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();

  return (
    <>
      <ImageContainer>
        <TitleContainer>
          <LogoContainer>
            <LogoText
              fsize="3rem"
              size="5rem"
              lineheight="25px"
              medialineheight="35px"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              blue
            </LogoText>
            <LogoText2
              mgleft="2.1rem"
              fsize="3rem"
              mgbottom="2rem"
              size="5rem"
              medialeft="3.5rem"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              watch
            </LogoText2>
          </LogoContainer>
          <SubLogoText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            watch the movie that you want
          </SubLogoText>
          <SubLogoTex2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            anytime anywhere
          </SubLogoTex2>
          <LoginButton
            onClick={() => navigate("/signIn")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ delay: 0.2, scale: { delay: 0 } }}
          >
            login
          </LoginButton>
          <GoogleButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ delay: 0.3, scale: { delay: 0 } }}
          >
            login with google
          </GoogleButton>
          <TitleText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            - or -
          </TitleText>
          <TitleText2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ delay: 0.5, scale: { delay: 0 } }}
            onClick={() => navigate("/signUp")}
          >
            create an account
          </TitleText2>
        </TitleContainer>
      </ImageContainer>
    </>
  );
};

export default Title;
