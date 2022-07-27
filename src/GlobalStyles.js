import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "roboto";
}
`;

export const LogoText = styled.h1`
  font-weight: ${({ fweight }) => (fweight ? fweight : "")};
  font-size: ${({ fsize }) => (fsize ? fsize : "")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (min-width: 1100px) {
    font-size: ${({ size }) => size && size};
    line-height: ${({ medialineHeight }) =>
      medialineHeight ? medialineHeight : ""};
  }
`;

export const LogoText2 = styled(LogoText)`
  color: #0ca4d3;
  margin-left: ${({ mgLeft }) => mgLeft && mgLeft};
  margin-bottom: ${({ mgBottom }) => mgBottom && mgBottom};
  @media screen and (min-width: 1100px) {
    margin-left: ${({ mediaLeft }) => mediaLeft && mediaLeft};
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
    opacity: 0.02;
  }
`;

export const LoginButton = styled.button`
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
  @media screen and (min-width: 1200px) {
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
`;

export const InputText = styled.input`
  height: 3.5rem;
  width: 20rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #0e4369;
`;

export default GlobalStyle;
