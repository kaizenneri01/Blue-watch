import React from "react";
import { Container } from "./GlobalStyles";
import Title from "./pages/title/Title";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";
import { IconContext } from "react-icons";

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
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </Container>
        </IconContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
