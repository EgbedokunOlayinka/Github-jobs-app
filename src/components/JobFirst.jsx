import React, { useContext } from "react";
import { Box, Text, Link, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const JobFirst = () => {
  const { job } = useContext(GlobalContext);

  return (
    job && (
      <Box className="job-first">
        <Link as={RouterLink} to="/">
          <ArrowBackIcon color="tertiary" marginBottom=".1rem" />
          <Text
            ml={2}
            as="span"
            color="tertiary"
            fontWeight="500"
            fontSize="sm"
          >
            Back to search
          </Text>
        </Link>

        <Heading mt={6} as="h6" color="secondary" fontSize="sm">
          HOW TO APPLY
        </Heading>
        <Text
          className="apply-text"
          mt={2}
          color="primary"
          fontWeight="500"
          fontSize="sm"
          dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
        ></Text>
      </Box>
    )
  );
};

export default JobFirst;
