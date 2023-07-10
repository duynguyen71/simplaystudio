import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const DuckHunter = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <ListTitle>How to Play</ListTitle>
      <ListItem>Aim and tap to punch.</ListItem>
      <ListItem>
        Upgrade power levels to generate more amounts of impact force.
      </ListItem>
    </UnorderedList>
  );
};

export default DuckHunter;
