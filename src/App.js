import React from "react";
import { Container, LargeContainer } from "./GlobalStyles";
import Title from "./pages/title/Title";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";
import { IconContext } from "react-icons";

import HomeLayout from "./pages/Home/HomeLayout";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/Home/Home";
import Favorite from "./pages/favorite/Favorite";
import Layout from "./components/layout/Layout";

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
              <Route exact path="/title" element={<Title />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route exact path="*" element={<NotFound />} />
              <Route exact path="/" element={<HomeLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="favorite" element={<Favorite />} />
              </Route>
            </Routes>
          </Container>
        </IconContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
