import {
  Box,
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
import ImageCarousel from "../components/ImageCarousel";
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
        <Box width={"50vw"} boxShadow="lg" flex={7}>
          <CaptionCarousel games={games} />
        </Box>
      </Flex>
      <CustomHeading text={"Top Free Games"} />
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {games.slice(0, 4).map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Flex>
    </Box>
  );
};

export default HomePage;
