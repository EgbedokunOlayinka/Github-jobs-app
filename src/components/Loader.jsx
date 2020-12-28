import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.8s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};

export default Loader;
