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
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { PUBLIC_IMAGE_URL, PUBLIC_VIDEO_URL } from "../hooks";
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
    <Box
      position={"relative"}
      minH={"80vh"}
      w={"100%"}
      // py={[4, 10]}
      // px={[2, 10]}
    >
      <Box position={"relative"}></Box>

      <VStack
        alignSelf={"start"}
        alignItems={"start"}
        bg="blackAlpha.200"
        m={4}
        borderRadius={"md"}
        boxShadow={"md"}
        py={[4, 5]}
      >
        <HStack px={[2, 10]} spacing={8}>
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
            <ReactStars
              half={true}
              edit={false}
              value={4.5}
              size={20}
              activeColor="#ffd700"
            />
            <Button bg={"green"}>Dowload now</Button>
          </VStack>
        </HStack>

        <VStack px={[2, 10]}>
          <Text textAlign={"start"} alignSelf={"start"}>
            {game.bio}
          </Text>
        </VStack>
      </VStack>
      {/* Game Video */}
      <Box height={"5"} />
      {game.video && (
        <video loop controls={false} autoPlay muted>
          <source src={`${PUBLIC_VIDEO_URL}/${game.video}`} type="video/mp4" />
        </video>
      )}
      {/* End of Game Video */}

      {/* Game Description */}
      <VStack py={[4, 5]} px={[2, 10]} textAlign={"start"} alignItems={"start"}>
        <UnorderedList textColor={"gray.400"} fontSize={"18"} letterSpacing={1}>
          <ListItem>
            Fireworks Pro is a simulation fireworks game. Download the game and
            enjoy realistic graphics, and much more:
          </ListItem>
          <ListItem>
            With FPS mode, you can walk around the town to fire fireworks and
            make some explosions next to your neighbors.{" "}
          </ListItem>
          <ListItem>
            Plenty of fireworks: Sets, Chrysanthemum, Dahlia, Brocade,
            Crossette, Ghost Shell, Strobe, Willow, Horsetail, Palm, Ground,
            Comet, Letter, Number, Shape. It is guaranteed to add more!
          </ListItem>
          <ListItem>Simulate fireworks shows.</ListItem>
          <ListItem>
            {" "}
            Easily walk around the town and play with fireworks stuff.
          </ListItem>
          <ListItem>
            Flexible to customize your fireworks such as: color, height, time,
            trail, size, angle, whistle.
          </ListItem>
          <ListItem>
            {" "}
            Amazing tools: undo, copy, cut when setting up fireworks.
          </ListItem>
          <ListItem>
            Tap fireworks mode which is easy to play by tap on screen - allow
            you relax and reduce stressful.
          </ListItem>
          <ListItem> Realistic fireworks and explosion sounds.</ListItem>
          <ListItem> Real 3D fireworks game.</ListItem>
        </UnorderedList>
      </VStack>
      {/* End of Game Description */}

      {/* Game Gallery */}
      <VStack px={[2, 10]} py={5} alignItems={"start"}>
        <CustomHeading text={"Game Gallery"} />
        <Grid templateColumns="repeat(4, 4fr)" gap={[2, 2]}>
          {game.images.map((image, index) => (
            <GridItem key={index} w="100%">
              <Box overflow={"hidden"} borderRadius={"md"} w="100%">
                <Image
                  objectFit={"cover"}
                  src={`${PUBLIC_IMAGE_URL}/${image}`}
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
      {/* End of Game Gallery */}

      {/* Game Description  */}
      <VStack></VStack>
    </Box>
  );
};

export default GameDetailPage;
