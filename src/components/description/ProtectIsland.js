import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const ProtectIsland = () => {
  return (
    <UnorderedList
      spacing={2}
      fontWeight={"300"}
      textColor={useColorModeValue("gray.700", "gray.300")}
      fontSize={"16"}
      letterSpacing={1}
    >
      <span>
        A wonderful island which locates outside the world. There are many big
        animals are living good. Bad guys comes and fire rockets to destroy all
        of them. King Kong, the king of this island is fighting against these
        enemies. All you need to do is help him defense coming missiles.
      </span>
      <ListTitle>How to play</ListTitle>
      <ListItem>
        Tap on left or right side to throw coconut tree to defense the rockets.
        Remember that you should not not miss any of rockets otherwise the
        island will be destroyed.
      </ListItem>
    </UnorderedList>
  );
};

export default ProtectIsland;
