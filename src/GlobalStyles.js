import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "roboto";
}
`;

export const LogoText = styled(motion.h1)`
  font-weight: ${({ fweight }) => (fweight ? fweight : "")};
  font-size: ${({ fsize }) => (fsize ? fsize : "")};
  line-height: ${({ lineheight }) => (lineheight ? lineheight : "")};
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (min-width: 1500px) {
    font-size: ${({ size }) => size && size};
    line-height: ${({ medialineheight }) =>
      medialineheight ? medialineheight : ""};
  }
`;

export const LogoText2 = styled(LogoText)`
  color: #0ca4d3;
  margin-left: ${({ mgleft }) => mgleft && mgleft};
  margin-bottom: ${({ mgbottom }) => mgbottom && mgbottom};
  @media screen and (min-width: 1500px) {
    margin-left: ${({ medialeft }) => medialeft && medialeft};
  }
`;

export const Container = styled.div`
  background-image: linear-gradient(200deg, #0e3242, #222121);
  height: 100vh;
`;

export const ImageContainer = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80);
    opacity: 0.03;
  }
`;

export const LoginButton = styled(motion.button)`
  height: 3.5rem;
  width: 15rem;
  background: #0b6d83;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  color: #dfdfdf;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (min-width: 1500px) {
    height: 4rem;
    width: 20rem;
    font-size: 15px;
  }
`;

export const GoogleButton = styled(LoginButton)`
  background-color: #033342;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ Jcenter }) => Jcenter && Jcenter};
  align-items: ${({ Acenter }) => Acenter && Acenter};
  padding: ${({ LogoPadding }) => LogoPadding && LogoPadding};
  @media screen and (min-width: 1500px) {
    padding: ${({ Mediapadding }) => Mediapadding && Mediapadding};
  }
`;

export const InputText = styled(motion.input)`
  height: 3.5rem;
  width: 18rem;
  margin-bottom: 1rem;
  border-radius: 0 7px 7px 0;
  border: none;
  background-color: #0e4369;
  &[type="text"],
  &[type="email"],
  &[type="password"] {
    color: #dfdfdf;
    padding-left: 10px;
  }
  &[type="text"]:focus,
  &[type="email"]:focus,
  &[type="password"]:focus {
    background-color: #0b6d83;
    outline: none;
  }

  @media screen and (min-width: 1500px) {
    height: 4rem;
    width: 22rem;
    font-size: 1rem;
  }
`;

export const InputPassword = styled(InputText)`
  width: 15rem;
  border-radius: 0;

  @media screen and (min-width: 1500px) {
    width: 19rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justifyC }) => justifyC && justifyC};
  align-items: ${({ align }) => align && align};
  margin: ${({ margin }) => margin && margin};
`;

export const IconBox = styled(motion.div)`
  background: #0ca4d3;
  height: 3.5rem;
  width: 3rem;
  border-radius: 7px 0px 0px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1500px) {
    height: 4rem;
    width: 4rem;
  }
`;

export const ShowButton = styled(motion.div)`
  height: 3.5rem;
  width: 3rem;
  background-color: #0e4369;
  border-radius: 0 7px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 1500px) {
    height: 4rem;
  }
`;

export const LargeContainer = styled(motion.div)`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export default GlobalStyle;
