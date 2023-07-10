import { Text } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ text, color }) => {
  return (
    <Text
      color={color}
      fontWeight={"medium"}
      fontSize={["12px", "18px"]}
      mb={3}
    >
      {text}
    </Text>
  );
};

export default CustomHeading;
