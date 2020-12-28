import React from "react";
import { Center, Image, Text } from "@chakra-ui/react";

const CompanyLogo = ({ job }) => {
  return (
    <Center
      w="90px"
      h="90px"
      bg={job.company_logo ? "#fff" : "#eee"}
      fontSize="sm"
      color="secondary"
    >
      {job.company_logo ? (
        <Image src={job.company_logo} objectFit="cover" alt="Company Logo" />
      ) : (
        <Text fontSize="xs">not found</Text>
      )}
    </Center>
  );
};

export default CompanyLogo;
