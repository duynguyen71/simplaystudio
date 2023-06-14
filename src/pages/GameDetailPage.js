import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import games from "../data/game";
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { PUBLIC_IMAGE_URL } from "../hooks";
import CustomHeading from "../components/CustomHeading";
import { motion, px } from "framer-motion";
const GameDetailPage = () => {
  // Get game name on param
  const { name } = useParams();

  const game = games.find((game) => game.name === name);

  const navigate = useNavigate();

  useEffect(() => {
    if (!game) {
      navigate("/");
      return;
    }
  }, [game, navigate]);

  if (!game) return <></>;
  return (
    <Box
      position={"relative"}
      minH={"80vh"}
      w={"100%"}
      py={[4, 10]}
      px={[2, 10]}
    >
      <Box position={"relative"}></Box>
      <HStack spacing={8}>
        <motion.div
          initial={{ x: -100, y: -100, rotate: -45, scale: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        >
          <Box overflow={"hidden"} borderRadius={"md"} boxSize={"200"}>
            <AspectRatio ratio={1}>
              <Image
                objectFit={"cover"}
                src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
              />
            </AspectRatio>
          </Box>
        </motion.div>

        {/*  */}
        <VStack alignItems={"start"} alignSelf={"start"}>
          <CustomHeading text={"Fireworks Play"} />
          <Text>{game.shortDescription}</Text>
        </VStack>
      </HStack>
      {/* <Box height={"5vh"} /> */}
      {/* Game Upcoming Event */}
      <VStack alignItems={"start"}>
        <CustomHeading text={"Game Gallery"} />
        {/* <Flex alignItems={"center"} justifyContent={"space-around"}>
          <Box bg="blue.200" si
          ze="sm" mr="4"></Box>
        </Flex> */}

        <Grid templateColumns="repeat(2, 2fr)" gap={[2, 2]}>
          {game.images.map((image, index) => (
            <GridItem key={index} w="100%">
              <Box overflow={"hidden"} borderRadius={"md"} w="100%">
                <Image
                  objectFit={"cover"}
                  src={`${PUBLIC_IMAGE_URL}/${image}`}
                />
              </Box>
              {/* <GameCard key={index} {...game} /> */}
            </GridItem>
          ))}
        </Grid>
      </VStack>

      {/* <Box position={"absolute"} width={"100%"} height={"100%"}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          playing
          loop
          muted
          controls={false}
          config={{ youtube: { playerVars: { controls: 0 } } }}
          width="100%"
          height="100%"
        />
      </Box> */}
    </Box>
  );
};

export default GameDetailPage;
