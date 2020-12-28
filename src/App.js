import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import JobPage from "./views/JobPage";

const App = () => {
  return (
    <Container fontFamily="body" maxW={["full", "md", "2xl", "4xl"]} mb="4rem">
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/jobs/:id" component={JobPage} exact />
    </Container>
  );
};

export default App;
