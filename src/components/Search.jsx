import React, { useState, useContext } from "react";
import { Box, Center, Input, Button } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";

const Search = () => {
  const { getJobs, setSearchInput } = useContext(GlobalContext);

  const [searchDetails, setSearchDetails] = useState("");

  const submitDetails = (e) => {
    e.preventDefault();
    setSearchInput(searchDetails.toLowerCase());
    getJobs(searchDetails.toLowerCase());
  };

  return (
    <Center className="search-container" w="full" h="100px" borderRadius="8px">
      <Box
        as="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="full"
        px={[4, null]}
        className="search-container-box"
        onSubmit={(e) => submitDetails(e)}
      >
        <Input
          maxW="400px"
          borderRadius="4px"
          bg="white"
          className="search-box"
          type="text"
          placeholder="Titles, companies, expertise, or benefits"
          value={searchDetails}
          onChange={(e) => setSearchDetails(e.target.value)}
        />
        <Button
          ml={4}
          bg="tertiary"
          color="white"
          fontSize="sm"
          fontWeight="500"
          className="search-btn"
          type="submit"
          _hover={{ background: "#4299E1" }}
        >
          Search
        </Button>
      </Box>
    </Center>
  );
};

export default Search;
