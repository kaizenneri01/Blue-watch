import React from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigationbar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
