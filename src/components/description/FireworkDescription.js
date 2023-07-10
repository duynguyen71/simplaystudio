import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";
const FireworkDescription = () => {
  return (
    <>
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>
          Fireworks Pro is a simulation fireworks game. Download the game and
          enjoy realistic graphics, and much more:
        </ListTitle>
        <ListItem>
          With FPS mode, you can walk around the town to fire fireworks and make
          some explosions next to your neighbors.{" "}
        </ListItem>
        <ListItem>
          Plenty of fireworks: Sets, Chrysanthemum, Dahlia, Brocade, Crossette,
          Ghost Shell, Strobe, Willow, Horsetail, Palm, Ground, Comet, Letter,
          Number, Shape. It is guaranteed to add more!
        </ListItem>
        <ListItem>Simulate fireworks shows.</ListItem>
        <ListItem>
          {" "}
          Easily walk around the town and play with fireworks stuff.
        </ListItem>
        <ListItem>
          Flexible to customize your fireworks such as: color, height, time,
          trail, size, angle, whistle.
        </ListItem>
        <ListItem>
          {" "}
          Amazing tools: undo, copy, cut when setting up fireworks.
        </ListItem>
        <ListItem>
          Tap fireworks mode which is easy to play by tap on screen - allow you
          relax and reduce stressful.
        </ListItem>
        <ListItem> Realistic fireworks and explosion sounds.</ListItem>
        <ListItem> Real 3D fireworks game.</ListItem>
      </UnorderedList>
    </>
  );
};

export default FireworkDescription;
