import { motion } from "framer-motion";
import styled from "styled-components";
import { LogoContainer } from "../../GlobalStyles";

export const NavContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Sidemenu = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0ca4d3;
  height: 100vh;
`;

export const NavLogo = styled(LogoContainer)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Profile = styled(motion.div)`
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ActiveMenu = styled(motion.div)`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    background-color: #0e3242;
    height: 100vh;
    width: ${({ width }) => width && width};
    position: initial;
    padding-top: 5rem;
  }
`;

export const MenuBtn = styled(motion.div)`
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const SearchBar = styled(motion.input)``;

export const MenuList = styled(motion.li)`
  color: #eeeeee;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  list-style-type: none;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #033342;
    @media screen and (min-width: 1024px) {
      background-color: #0ca4d3;
    }
  }
`;

export const MenuOrder = styled.li;
