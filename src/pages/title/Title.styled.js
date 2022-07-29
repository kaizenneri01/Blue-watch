import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SubLogoText = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: #dfdfdf;
  text-transform: uppercase;
  @media screen and (min-width: 1500px) {
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
  @media screen and (min-width: 1500px) {
    font-size: 12px;
  }
`;

export const TitleText2 = styled(TitleText)`
  color: white;
  font-size: 12px;
  cursor: pointer;
  @media screen and (min-width: 1500px) {
    font-size: 15px;
  }
`;
