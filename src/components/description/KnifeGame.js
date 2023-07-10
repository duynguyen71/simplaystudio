import React from "react";
import { UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const KnifeGame = () => {
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
        The knife game is the game that you stab between the fingers, wherein
        placing the palm of your hand down on a table with fingers apart, using
        a knife such as a pocket or pen knife, or other sharp object, one
        attempts to stab back and forth between the fingers, moving the object
        back and forth, trying to not hit your fingers.
      </ListItem>
      <ListItem>
        Watch out the energy bar is running out. You must stab faster and faster
        as you can to keep it full. When the energy bar is ran out, the knife
        game is over.
      </ListItem>
      <ListItem>
        Avoid to stab on your palm or your fingers - no good for having bleed.
      </ListItem>
      <ListItem>
        This knife game is very dangerous, PLEASE DOT DOT TRY IN REAL LIFE. We
        don't take any responsibility for your injuring.
      </ListItem>
      <ListItem>
        Thank you and wishing you have fun with this knife finger game on your
        mobile device - not in real life!
      </ListItem>
    </UnorderedList>
  );
};

export default KnifeGame;
