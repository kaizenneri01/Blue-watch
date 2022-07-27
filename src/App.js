import React from "react";
import { Container } from "./GlobalStyles";
import Title from "./pages/title/Title";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
