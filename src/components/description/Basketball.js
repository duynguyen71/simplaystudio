import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const Basketball = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={"gray.400"}
      fontSize={"16"}
      letterSpacing={1}
    >
      <span>How to Play</span>
      <ListItem>Aim and tap to punch.</ListItem>
      <ListItem>
        Upgrade power levels to generate more amounts of impact force.
      </ListItem>
    </UnorderedList>
  );
};

export default Basketball;
