import React from "react";
import {
  UnorderedList,
  ListItem,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";
import ListTitle from "./ListTitle";

const DuckHunter = () => {
  return (
    <Flex direction={"column"}>
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>
          Duck hunting is a classic hunting game. You will be a duck hunter and
          use many kind of guns to hunt birds as much as possible.
        </ListTitle>
        <ListItem>You only have one chance to kill the bird.</ListItem>
        <ListItem> Do not let any birds fly away.</ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>Features of Duck Hunting:</ListTitle>
        <ListItem> Easy to play</ListItem>
        <ListItem> Challenging and Addictive gameplay</ListItem>
        <ListItem> Many type of guns</ListItem>
        <ListItem> Leaderboard</ListItem>
        <ListItem> Nice graphics and sound effects</ListItem>
        <ListItem> Smooth and optimized for phone performance</ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>How to Play</ListTitle>
        <ListItem>
          With duck hunting game, you will able to be a crazy hunter, take the
          birds down and get rewards.
        </ListItem>
        <ListItem>With 1 bird down you get 1 meat.</ListItem>
        <ListItem>With 1 headshot bird you get 2 meats.</ListItem>
        <ListItem>
          With 3 times headshot you get 1 gold bird. The gold bird give you 4
          meats and 1 gold egg.
        </ListItem>
        <ListItem>
          Do not forget beat your high score and your friends too. By click on
          leaderboard you can compare your score with friends.
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default DuckHunter;
