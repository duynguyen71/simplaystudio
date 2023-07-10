import React from "react";
import {
  UnorderedList,
  ListItem,
  OrderedList,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const Basketball = () => {
  return (
    <>
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>How to Play</ListTitle>
        <ListItem>Pick up a ball in allowing area.</ListItem>
        <ListItem>Wipe up to shoot.</ListItem>
        <ListItem>
          Physic, Graphic and Sound are so real, so addictive. This game will
          make you feel like your are in the real game center but it won’t cost
          your pocket because this game is completely FREE.
        </ListItem>
        <ListItem>
          Bring a real Basketball Arcade Machine into your device now.
        </ListItem>
      </UnorderedList>
      <Box height={"1vh"} />
      <OrderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>Game Mode</ListTitle>
        <ListItem>Timer</ListItem>
        <UnorderedList
          spacing={2}
          fontWeight={"300"}
          textColor={useColorModeValue("gray.700", "gray.300")}
          fontSize={"16"}
          letterSpacing={1}
        >
          <ListItem>
            You have 60s to shoot the goal to reach target of score. Every round
            will be harder.
          </ListItem>
          <ListItem>
            Bonus 30 seconds when you score with dunk three times continuously.
          </ListItem>
        </UnorderedList>
        <ListItem>Balls </ListItem>
        <UnorderedList
          spacing={2}
          fontWeight={"300"}
          textColor={useColorModeValue("gray.700", "gray.300")}
          fontSize={"16"}
          letterSpacing={1}
        >
          <ListItem>
            You have 3 balls to shoot until you lose all balls whenever you miss
            a goal the ball will be destroyed.
          </ListItem>
          <ListItem>
            Bonus 1 ball when you score with dunk three times continuously.
          </ListItem>
        </UnorderedList>
      </OrderedList>
      <Box height={"1vh"} />
      <ListTitle>
        You think your can be the best player!? Compare your score in the Game
        Center Leaderboards with all players in around the world :).
      </ListTitle>
    </>
  );
};

export default Basketball;
