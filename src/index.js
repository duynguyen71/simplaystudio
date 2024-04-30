import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import { RouterProvider } from "react-router-dom";

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./router";

// Setting theme for ui
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
