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
              fsize="2rem"
              size="5rem"
              lineHeight="20px"
              medialineHeight="35px"
            >
              blue
            </LogoText>
            <LogoText2
              mgLeft="1.5rem"
              fsize="2rem"
              mgBottom="2rem"
              size="5rem"
              mediaLeft="3.5rem"
            >
              watch
            </LogoText2>
          </LogoContainer>
          <SubLogoText>watch the movie that you want</SubLogoText>
          <SubLogoTex2>anytime anywhere</SubLogoTex2>
          <LoginButton onClick={() => navigate("/signIn")}>login</LoginButton>
          <GoogleButton>login with google</GoogleButton>
          <TitleText>- or -</TitleText>
          <TitleText2 onClick={() => navigate("/signUp")}>
            create an account
          </TitleText2>
        </TitleContainer>
      </ImageContainer>
    </>
  );
};

export default Title;
