import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Navbar, Loader } from "../Components";

const Layout = () => {
  const nav = useNavigation();

  const isPageLoading = nav.state === "loading";
  return (
    <>
      <div>
        <Navbar />
        {isPageLoading ? (
          <Loader />
        ) : (
          <div>
            <Outlet />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
