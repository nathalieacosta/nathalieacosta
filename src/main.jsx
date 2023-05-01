import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: "darkBrown",
        fontWeight: "bold",
        fontSize: "xl",
        transition: "0.2s",
        _hover: {
          textDecoration: "none",
          fontSize: "2xl",
        },
      },
    },
    Badge: {
      baseStyle: {
        color: "darkBrown",
        fontWeight: "bold",
        fontSize: "xl",
        margin: "5px",
        backgroundColor: "darkYellow",
      },
    },
  },
  fonts: {
    heading: "Merriweather",
    body: "Merriweather",
  },
  colors: {
    lightestYellow: "#fff7d1",
    lightYellow: "#fff3b7",
    darkYellow: "#ffee9d",
    darkestYellow: "#ffe14e",
    yellowDark: "#6e4c0d",
    darkBrown: "#372b2b",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
