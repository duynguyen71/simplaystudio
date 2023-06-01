import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import games from "../data/game";
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { PUBLIC_IMAGE_URL } from "../hooks";
import CustomHeading from "../components/CustomHeading";
import { motion } from "framer-motion";
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
    <Box p={8} position={"relative"} minH={"80vh"} w={"100%"}>
      <HStack spacing={8}>
        <motion.div
          initial={{ x: -100, y: -100, rotate: -45, scale: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        >
          <Box overflow={"hidden"} borderRadius={"md"} boxSize={"200"}>
            <AspectRatio ratio={1}>
              <Image
                objectFit={"cover"}
                src={`${PUBLIC_IMAGE_URL}/FireworksPlay.png`}
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
