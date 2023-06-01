import React, { useEffect } from "react";
import LargeWithNewsletter from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const RootLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Box mt={10} />
      <LargeWithNewsletter />
    </>
  );
};

export default RootLayout;
