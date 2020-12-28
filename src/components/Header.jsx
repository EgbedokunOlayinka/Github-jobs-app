import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Heading
      fontFamily="body"
      color="customBlack"
      as="h1"
      fontSize="2xl"
      my={4}
    >
      <Link to="/">
        Github{" "}
        <Text as="span" fontWeight="300">
          Jobs
        </Text>
      </Link>
    </Heading>
  );
};

export default Header;
