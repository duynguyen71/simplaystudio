import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const EggDunk = () => {
  return (
    <>
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={"gray.400"}
        fontSize={"16"}
        letterSpacing={1}
      >
        <span>How to Play</span>
        <ListItem>Drag to aim and release to shoot.</ListItem>
      </UnorderedList>

      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={"gray.400"}
        fontSize={"16"}
        letterSpacing={1}
      >
        <span>GAME FEATURES</span>
        <ListItem>Easy control by one finger</ListItem>
        <ListItem>Arcade mode and level mode</ListItem>
        <ListItem>Many egg skins for fun</ListItem>
        <ListItem>
          Challenging by barrier objects such as wind, cannon, bow, fire
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default EggDunk;
