import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ListTitle from "./ListTitle";
import { PUBLIC_IMAGE_URL } from "../../hooks";

const Spaceman = () => {
  return (
    <Flex direction={"column"}>
      {/* <Text>Exploring the vast universe by a single tap.</Text> */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <ListTitle>WHAT MAKE THIS GAME IS WORTH A TRY</ListTitle>
        <ListItem>
          Easy to control with one finger. There is no complicated control but
          it is also challenging - the controlling is unlike anything else
          before.
        </ListItem>
        <ListItem>The Solar planets are simulated on your palm.</ListItem>
        <ListItem>
          Light and simple graphics - wait! What is that? Yes it is but it is
          pretty cool and it is worth the performance.
        </ListItem>
        <ListItem>
          Amazing levels await in this game. More planets (levels) even
          something more the Solar system may be added in future updates!
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* CONTROLLING */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/controlling.png`}
          />
          <ListTitle>CONTROLLING</ListTitle>
        </HStack>
        <ListItem>
          There is only one jet engine to fly. To control, players will touch
          down and hold a bit to thrust the left man fly up. Release and repeat
          the steps to wrap turns to control the right man.
        </ListItem>
        <ListItem>
          The controlling is unlike anything else before. Single touch, hold,
          and release at the right time is all you need to do.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* LEVEL */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/level.png`}
          />
          <ListTitle>LEVEL</ListTitle>
        </HStack>
        <ListItem>
          For each completing level you will fly across the next harder levels.
          New tools/equipment also will be found in further levels; along with
          new challenges.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* FLAG */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/flag.png`}
          />
          <ListTitle>FLAG</ListTitle>
        </HStack>
        <ListItem>
          After reaching a planet/moon, you can plan your country's flagpole on
          this planet and take a screenshot to share with everybody.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* FUEL TANK */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/fuelcan.png`}
          />
          <ListTitle>FUEL TANK</ListTitle>
        </HStack>
        <ListItem>
          Fuel tank of the thrust engine is limited, remember to collect the
          supply fuel tanks on your way.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* COIN */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/coin.png`}
          />
          <ListTitle>COIN</ListTitle>
        </HStack>

        <ListItem>
          Coin is one kind of asset that you properly should collect on your
          journey. Coin is used to upgrade the capacity of fuel tanks and much
          more.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
      {/* STAR */}
      <UnorderedList
        spacing={2}
        fontWeight={"300"}
        textColor={useColorModeValue("gray.700", "gray.300")}
        fontSize={"16"}
        letterSpacing={1}
      >
        <HStack>
          <Image
            boxSize={"40px"}
            src={`${PUBLIC_IMAGE_URL}/spaceman/start.png`}
          />
          <ListTitle>STAR</ListTitle>
        </HStack>
        <ListItem>
          Collect stars on the trip, it determines how good you are on each
          complete level.
        </ListItem>
      </UnorderedList>
      <Box height={"4vh"} />
    </Flex>
  );
};

export default Spaceman;
