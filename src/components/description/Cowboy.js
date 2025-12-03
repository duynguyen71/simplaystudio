import React from "react";
import {
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const Cowboy = () => {
  return (
    <>
      <blockquote>Shoot 'em up!</blockquote>
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <Text>
          Train your eyes, train your hand skills with the cowboy gun shooting
          game (shooting game).
        </Text>
        <Text>
          This shooting game is designed in western game style, cowboy game
          style.
        </Text>
        <Text>
          The weapon being used in this game is a pistol (handgun) with six
          bullets.
        </Text>
        <Text>
          Your mission is to shoot all the targets by aiming and shooting with
          the single tap. The scene is that you are in a saloon and practicing
          your shooting skills.
        </Text>
        <br />
        <ListTitle>Two game modes in shooting game</ListTitle>
        <ListItem>
          Arcade is a classic game mode. What you need to do is shoot all random
          targets and don’t miss any of them. Try to score the highest score as
          your best.
        </ListItem>
        <ListItem>
          Quick Draw (also known as Fast Draw) is the ability to quickly draw a
          handgun and accurately fire it upon a target in the process.
        </ListItem>
        <ListTitle>
          You can also compare your scores with all players around the world.
          The leaderboards are displayed on the board in the saloon.
        </ListTitle>
      </UnorderedList>
    </>
  );
};

export default Cowboy;
