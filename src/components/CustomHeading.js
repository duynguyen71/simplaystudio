import { Text } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ text }) => {
  return (
    <Text fontWeight={"500"} fontSize={"2xl"} mb={3}>
      {text}
    </Text>
  );
};

export default CustomHeading;
