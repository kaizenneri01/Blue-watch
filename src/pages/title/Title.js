import React from "react";
import { GoogleButton, ImageContainer, LoginButton } from "../../GlobalStyles";
import {
  LogoContainer,
  LogoText,
  LogoText2,
  SubLogoTex2,
  SubLogoText,
  TitleContainer,
  TitleText,
  TitleText2,
} from "./Title..styled";

const Title = () => {
  return (
    <>
      <ImageContainer>
        <TitleContainer>
          <LogoContainer>
            <LogoText>blue</LogoText>
            <LogoText2>watch</LogoText2>
          </LogoContainer>
          <SubLogoText>watch the movie that you want</SubLogoText>
          <SubLogoTex2>anytime anywhere</SubLogoTex2>
          <LoginButton>login</LoginButton>
          <GoogleButton>login with google</GoogleButton>
          <TitleText>- or -</TitleText>
          <TitleText2>create an account</TitleText2>
        </TitleContainer>
      </ImageContainer>
    </>
  );
};

export default Title;
