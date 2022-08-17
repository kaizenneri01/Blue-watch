import React from "react";
import { Outlet } from "react-router";
import Layout from "../../components/layout/Layout";
import { LargeContainer } from "../../GlobalStyles";

const HomeLayout = () => {
  return (
    <div>
      <LargeContainer>
        <Layout>
          <Outlet />
        </Layout>
      </LargeContainer>
    </div>
  );
};

export default HomeLayout;
