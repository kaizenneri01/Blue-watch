import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoText = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: #ffffff;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;

export const LogoText2 = styled(LogoText)`
  color: #0ca4d3;
  margin-left: 1.8rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 1200px) {
    margin-left: 3.5rem;
  }
`;

export const SubLogoText = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: #dfdfdf;
  text-transform: uppercase;
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const SubLogoTex2 = styled(SubLogoText)`
  color: #0ca4d3;
  margin-bottom: 2.5rem;
`;

export const TitleText = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 10px;
  color: #8d8484;
  text-transform: uppercase;
  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const TitleText2 = styled(TitleText)`
  color: white;
  font-size: 12px;
  @media screen and (min-width: 1000px) {
    font-size: 15px;
  }
`;
