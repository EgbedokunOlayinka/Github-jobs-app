import React, { useEffect, useContext } from "react";
import Search from "../components/Search";
import Location from "../components/Location";
import Results from "../components/Results";
import { SimpleGrid } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";

const HomePage = () => {
  const { getJobs } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search />
      <SimpleGrid
        mt={4}
        columns={[1, null, 2]}
        templateColumns={["1fr", null, "3.3fr 6.7fr"]}
        spacing={4}
      >
        <Location />
        <Results />
      </SimpleGrid>
    </>
  );
};

export default HomePage;
