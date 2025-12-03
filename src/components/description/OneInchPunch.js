import React from "react";
import {
  UnorderedList,
  ListItem,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const OneInchPunch = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <ListTitle>
        Punch tremendous amounts of impact force at extremely close distances.
      </ListTitle>
      <br />
      <Box height={"1vh"} />
      <ListTitle>How to play</ListTitle>
      <ListItem>Aim and tap to punch.</ListItem>
      <ListItem>
        Upgrade power levels to generate more amounts of impact force.
      </ListItem>
    </UnorderedList>
  );
};

export default OneInchPunch;
