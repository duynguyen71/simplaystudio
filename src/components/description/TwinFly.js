import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const TwinFly = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <ListTitle>How to Play</ListTitle>
      <ListItem>
        Use a finger (just ONE finger) to touch on the screen and hold until a
        man flies up then release and touch the screen again for the other man
        flies up too before he hit the floor.
      </ListItem>
      <ListItem>
        Don't hit the floor, don't hit the roof and watch out the flycam which
        can shoot a laser to kill these men.
      </ListItem>
      <ListItem>
        Don't quit, stay on the flight and don't forget to share your score with
        friends.
      </ListItem>
    </UnorderedList>
  );
};

export default TwinFly;
