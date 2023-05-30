import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import GameCard from "../components/GameCard";
import CaptionCarousel from "../components/Carousel";

const HomePage = () => {
  return (
    <Box minH={"60vh"} padding={4}>
      <Grid
        // h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Box>
            <Image
              boxShadow={"md"}
              borderRadius={"md"}
              overflow={"hidden"}
              objectFit="cover"
              // maxW={{ base: "100%", sm: "400px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />{" "}
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <GameCard />
        </GridItem>
        <GridItem colSpan={2}>
          <GameCard />
        </GridItem>
        <GridItem colSpan={4}>
          <GameCard />
        </GridItem>
      </Grid>
      <CaptionCarousel />
    </Box>
  );
};

export default HomePage;
