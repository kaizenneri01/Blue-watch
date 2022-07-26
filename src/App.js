import React from "react";
import { Container } from "./GlobalStyles";
import Title from "./pages/title/Title";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
