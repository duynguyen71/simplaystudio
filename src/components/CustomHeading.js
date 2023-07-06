import { Text } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ text, color }) => {
  return (
    <Text color={color} fontWeight={"400"} fontSize={["12px", "18 px"]} mb={3}>
      {text}
    </Text>
  );
};

export default CustomHeading;
