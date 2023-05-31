import React from "react";
import LargeWithNewsletter from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const RootLayout = () => {
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
