import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import GameCard from "../components/GameCard";
import { CaptionCarousel } from "../components/CaptionCarousel";
import games from "../data/game";
import Hero from "../components/Hero";
import CustomHeading from "../components/CustomHeading";

const HomePage = () => {
  return (
    <Box minH={"100vh"} padding={4}>
      <Box height={"5vh"} />
      <Flex direction={"row"} justifyContent={"space-between"}>
        {/* Hero */}
        <Box flex={5}>
          <Hero />
        </Box>
        <Box w={10} />
        {/* Game Hight Light */}
        <Box boxShadow="lg" flex={7}>
          <CaptionCarousel games={games} />
        </Box>
      </Flex>
      <Box bg="gray.700" p={4} pb={8} boxShadow={"lg"}>
        <CustomHeading text={"Top Free Games"} />
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          {games.slice(0, 6).map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
