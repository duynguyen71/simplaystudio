import { Box } from "@chakra-ui/react";
import React from "react";
import "./bouncing-dots-loader.css";

const BouncingDotsLoader = () => {
  return (
    <Box className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </Box>
  );
};

export default BouncingDotsLoader;
