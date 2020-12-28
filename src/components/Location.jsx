import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Box, Checkbox, Text, Heading, Input } from "@chakra-ui/react";

const Location = () => {
  const { fullTime, setFullTime, setLocation } = useContext(GlobalContext);

  const [localLocation, setLocalLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocalLocation(e.target.value);
    setLocation(e.target.value);
  };

  return (
    <Box>
      <Checkbox
        fontWeight="500"
        color="primary"
        isChecked={fullTime}
        onChange={(e) => setFullTime(e.target.checked)}
      >
        <Text as="span" fontSize="sm">
          Full time
        </Text>
      </Checkbox>

      <Box mt={4}>
        <Heading as="h6" color="secondary" fontSize="sm">
          LOCATION
        </Heading>
        <Input
          w="100%"
          borderRadius="4px"
          bg="white"
          type="text"
          placeholder="City, state, zip code, or country"
          size="sm"
          mt={2}
          className="location-input"
          value={localLocation}
          onChange={(e) => handleLocationChange(e)}
        />
      </Box>
    </Box>
  );
};

export default Location;
