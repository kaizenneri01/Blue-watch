import React from "react";
import { Container } from "./GlobalStyles";
import Title from "./pages/title/Title";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";
import { IconContext } from "react-icons";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <IconContext.Provider
          value={{
            size: "2rem",
            color: "#033342",
          }}
        >
          <Container>
            <Routes>
              <Route path="/" element={<Title />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Container>
        </IconContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
