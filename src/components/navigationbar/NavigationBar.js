import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { LogoText, LogoText2 } from "../../GlobalStyles";
import {
  ActiveMenu,
  MenuBtn,
  MenuList,
  NavContainer,
  NavLogo,
  Profile,
  Sidemenu,
} from "./NavigationBar.styled";
import { motion } from "framer-motion";
import { NavigationList } from "./NavigationList";
import { useNavigate } from "react-router";

const NavigationBar = () => {
  const navigate = useNavigate();

  const [sideOn, setSideOn] = useState(false);

  const variant = {
    open: { opacity: 0, scale: 2 },
    closed: { opacity: 1 },
  };

  const renderedList = NavigationList.map((item, index) => (
    <MenuList
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      key={index}
      onClick={() => navigate(item.path)}
    >
      {item.title}
    </MenuList>
  ));

  return (
    <>
      <NavContainer>
        <ActiveMenu width="12rem">
          <motion.ul>{renderedList}</motion.ul>
        </ActiveMenu>

        <MenuBtn animate={sideOn ? "open" : "closed"} variants={variant}>
          <BiMenuAltLeft
            size="3rem"
            style={{ color: "#0CA4D3" }}
            onClick={() => setSideOn(!sideOn)}
          />
        </MenuBtn>
        <NavLogo style={{ padding: "1rem" }}>
          <LogoText fsize="1.2rem">blue</LogoText>
          <LogoText2 mgleft="1rem" fsize="1.2rem">
            watch
          </LogoText2>
        </NavLogo>
        <Profile>
          <CgProfile size="2.5rem" style={{ color: "#0CA4D3" }} />
        </Profile>
        {sideOn && (
          <Sidemenu animate={{ width: "12rem" }}>
            <motion.div
              style={{ padding: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <IoMdClose
                size="2rem"
                style={{ color: "#033342" }}
                onClick={() => setSideOn(!sideOn)}
              />
            </motion.div>
            <motion.ul>{renderedList}</motion.ul>
          </Sidemenu>
        )}
      </NavContainer>
    </>
  );
};

export default NavigationBar;
