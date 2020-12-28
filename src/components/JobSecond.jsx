import React, { useContext } from "react";
import { Box, Heading, Text, Flex, Center, Image } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";
import fromNow from "fromnow";
import { TimeIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const JobSecond = () => {
  const { job } = useContext(GlobalContext);

  return (
    job && (
      <Box className="job-second" fontFamily="body">
        <Flex direction={["column", "row"]}>
          <Heading size="md" color="primary" fontFamily="body">
            {job.title}
          </Heading>
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
            ml={[null, 4]}
            mt={[2, 0]}
          >
            {job.type}
          </Center>
        </Flex>

        <Box display="flex" mt={2}>
          <TimeIcon color="secondary" />
          <Text
            fontSize="xs"
            color="secondary"
            fontWeight="500"
            ml={2}
            noOfLines={1}
          >
            {fromNow(job.created_at, { max: 1, suffix: true })}
          </Text>
        </Box>

        <Flex mt={4} alignItems="center">
          <Center
            w="90px"
            h="90px"
            bg={job.company_logo ? "#fff" : "#eee"}
            fontSize="sm"
            color="secondary"
            border="1px"
            borderColor="#999"
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
          <Box ml={6}>
            <Text fontSize="lg" color="primary" fontWeight="700" mb={2}>
              {job.company}
            </Text>
            <Box display="flex">
              <ExternalLinkIcon color="secondary" />
              <Text fontSize="xs" color="secondary" fontWeight="500" ml={2}>
                {job.location}
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box mt={8}>
          <Text
            className="desc-text"
            color="primary"
            fontSize="sm"
            fontWeight="400"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></Text>
        </Box>
      </Box>
    )
  );
};

export default JobSecond;
