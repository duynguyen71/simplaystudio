import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";

const BambooDancing = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <span>How to Play</span>
      <ListItem>
        Touch down and hold a little bit to increase jump force then release to
        jump, avoid jump on the bamboo poles!
      </ListItem>
    </UnorderedList>
  );
};

export default BambooDancing;
