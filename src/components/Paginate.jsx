import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Center, Flex } from "@chakra-ui/react";

const Paginate = ({ jobsPerPage, totalJobs }) => {
  const { currentAppPage, setCurrentAppPage } = useContext(GlobalContext);

  const pageNumbers = [];
  const pages = Math.ceil(totalJobs / jobsPerPage);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    pages > 1 && (
      <Flex wrap="wrap">
        {pageNumbers.map((page) => (
          <Center
            key={page}
            w="36px"
            h="36px"
            fontSize="14px"
            fontWeight="500"
            cursor="pointer"
            _hover={{ opacity: "0.75" }}
            className={
              currentAppPage === page ? "active-page" : "inactive-page"
            }
            onClick={() => setCurrentAppPage(page)}
          >
            {page}
          </Center>
        ))}
      </Flex>
    )
  );
};

export default Paginate;
