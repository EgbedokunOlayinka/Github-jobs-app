import React, { useContext } from "react";
import {
  Box,
  Stack,
  Center,
  Text,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import fromNow from "fromnow";
import { TimeIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { GlobalContext } from "../context/GlobalState";

import Loader from "./Loader";
import Error from "./Error";
import Paginate from "./Paginate";

const Results = () => {
  const { error, loading, jobs, currentAppPage, jobsPerPage } = useContext(
    GlobalContext
  );

  const indexOfLastJob = currentAppPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return loading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Box>
      {jobs.length === 0 ? (
        <Center>
          <Text mt={2} fontSize="xl" color="primary" fontWeight="500">
            No jobs found
          </Text>
        </Center>
      ) : (
        <>
          <Stack direction="column" spacing="1rem" mb={4}>
            {currentJobs.map((job) => (
              <Link to={`/jobs/${job.id}`} key={job.id} className="job-box">
                <Box
                  className="result"
                  bg="white"
                  w="100%"
                  display="flex"
                  borderRadius="4px"
                  p={2}
                >
                  <Center
                    w="90px"
                    h="90px"
                    bg={job.company_logo ? "#fff" : "#eee"}
                    fontSize="sm"
                    color="secondary"
                  >
                    {job.company_logo ? (
                      <Image
                        src={job.company_logo}
                        objectFit="cover"
                        alt="Company Logo"
                      />
                    ) : (
                      <Text fontSize="xs">not found</Text>
                    )}
                  </Center>
                  <Box ml={4} w="100%">
                    <Text
                      fontSize="xs"
                      color="primary"
                      fontWeight="700"
                      noOfLines={1}
                    >
                      {job.company}
                    </Text>
                    <Text
                      mt={2}
                      fontSize="md"
                      color="primary"
                      fontWeight="400"
                      noOfLines={2}
                    >
                      {job.title}
                    </Text>

                    <Box
                      display={["block", null, "flex"]}
                      mt={2}
                      justifyContent="space-between"
                    >
                      <Center
                        border="1px"
                        borderColor="primary"
                        borderRadius="4px"
                        fontSize="xs"
                        color="primary"
                        fontWeight="700"
                        px={2}
                        py={1}
                        w={["80px", null]}
                      >
                        {job.type}
                      </Center>
                      <Flex
                        align="center"
                        mt={[4, 4, 0]}
                        w={["100%", "70%", "auto"]}
                      >
                        <Box display="flex" mr={[2, null, 6]}>
                          <ExternalLinkIcon color="secondary" />
                          <Text
                            as="span"
                            fontSize="xs"
                            color="secondary"
                            fontWeight="500"
                            ml={2}
                            noOfLines={1}
                            maxW="60px"
                          >
                            {job.location}
                          </Text>
                        </Box>
                        <Spacer />
                        <Box display="flex">
                          <TimeIcon color="secondary" />
                          <Text
                            as="span"
                            fontSize="xs"
                            color="secondary"
                            fontWeight="500"
                            ml={2}
                            noOfLines={1}
                            maxW="100px"
                          >
                            {fromNow(job.created_at, { max: 1, suffix: true })}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Stack>

          <Paginate jobsPerPage={jobsPerPage} totalJobs={jobs.length} />
        </>
      )}
    </Box>
  );
};

export default Results;
