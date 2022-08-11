import { motion } from "framer-motion";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
`;

export const Sidemenu = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0b6d83;
  height: 100vh;
`;
