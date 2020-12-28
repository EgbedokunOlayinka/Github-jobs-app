import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
