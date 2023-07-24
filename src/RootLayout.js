import React, { useEffect } from "react";
import LargeWithNewsletter from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <Box position={"relative"}>
      <NavBar />
      <Box maxW={"100vw"} overflow={"hidden"}>
        <Outlet />
      </Box>
      <Box mt={10} />
      <LargeWithNewsletter />
      <IconButton
        aria-label="Scroll to Top"
        position={"fixed"}
        bottom={10}
        right={10}
        onClick={scrollToTop}
        borderRadius={100}
        size={"md"}
        icon={<AiOutlineArrowUp />}
      />
    </Box>
  );
};

export default RootLayout;
