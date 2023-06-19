import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const OneInchPunch = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={"gray.400"}
      fontSize={"16"}
      letterSpacing={1}
    >
      <span>
        Punch tremendous amounts of impact force at extremely close distances.
      </span>
      <span>HOW TO PLAY</span>
      <ListItem>Aim and tap to punch.</ListItem>
      <ListItem>
        Upgrade power levels to generate more amounts of impact force.
      </ListItem>
    </UnorderedList>
  );
};

export default OneInchPunch;
