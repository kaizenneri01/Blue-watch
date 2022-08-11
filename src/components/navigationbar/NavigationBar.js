import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { LogoContainer, LogoText, LogoText2 } from "../../GlobalStyles";
import { NavContainer, Sidemenu } from "./NavigationBar.styled";
import { motion } from "framer-motion";
import { NavigationList } from "./NavigationList";

const NavigationBar = () => {
  const [sideOn, setSideOn] = useState(false);

  const variant = {
    open: { opacity: 0, scale: 2 },
    closed: { opacity: 1 },
  };

  return (
    <>
      <NavContainer>
        <motion.div animate={sideOn ? "open" : "closed"} variants={variant}>
          <BiMenuAltLeft
            size="3rem"
            style={{ color: "#0CA4D3" }}
            onClick={() => setSideOn(!sideOn)}
          />
        </motion.div>
        <LogoContainer>
          <LogoText fsize="1.2rem">blue</LogoText>
          <LogoText2 mgleft="1rem" fsize="1.2rem">
            watch
          </LogoText2>
        </LogoContainer>
        <CgProfile size="2.5rem" style={{ color: "#0CA4D3" }} />
        {sideOn ? (
          <Sidemenu animate={{ width: "10rem" }}>
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
            <motion.ul>
              {NavigationList.map((item, index) => (
                <motion.li key={index}>{item.title}</motion.li>
              ))}
            </motion.ul>
          </Sidemenu>
        ) : (
          ""
        )}
      </NavContainer>
    </>
  );
};

export default NavigationBar;
