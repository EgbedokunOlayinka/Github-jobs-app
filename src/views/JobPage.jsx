import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { SimpleGrid } from "@chakra-ui/react";

import Loader from "../components/Loader";
import Error from "../components/Error";
import JobFirst from "../components/JobFirst";
import JobSecond from "../components/JobSecond";

const JobPage = ({ match }) => {
  const { getJob, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    getJob(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <SimpleGrid
      columns={[1, null, 2]}
      templateColumns={["1fr", null, null, "2.5fr 7.5fr"]}
      spacing={8}
    >
      <JobFirst />
      <JobSecond />
    </SimpleGrid>
  );
};

export default JobPage;
