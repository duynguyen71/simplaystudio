import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const FireworkBabyDescription = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={"gray.400"}
      fontSize={"16"}
      letterSpacing={1}
    >
      <span>FEATURES:</span>
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
