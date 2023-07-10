import { Text } from "@chakra-ui/react";
import React from "react";

const ListTitle = ({ text, children }) => {
  return (
    <Text fontSize={["12px", "18px"]} fontWeight={"medium"}>
      {children}
    </Text>
  );
};

export default ListTitle;
