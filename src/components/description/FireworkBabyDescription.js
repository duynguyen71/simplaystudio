import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const FireworkBabyDescription = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <ListTitle>Features</ListTitle>
      <ListItem>Tap to explode fireworks</ListItem>
      <ListItem> Change fireworks shape</ListItem>
      <ListItem>Change fireworks color</ListItem>
      <ListItem>Change background</ListItem>
      <ListItem> Drag to draw sparkles strings</ListItem>
      <ListItem>Others options for parents to set up game</ListItem>
    </UnorderedList>
  );
};

export default FireworkBabyDescription;
