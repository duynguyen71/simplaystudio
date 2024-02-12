import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import games from "../data/game";
import {
  AspectRatio,
  Box,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
  Button,
  Stack,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { PUBLIC_IMAGE_URL, PUBLIC_VIDEO_URL, isAppleProduct } from "../hooks";
import CustomHeading from "../components/CustomHeading";
import { motion } from "framer-motion";
import BouncingDotsLoader from "../components/utils/BouncingDotsLoader";
const GameDetailPage = () => {
  const [isLoading, setLoading] = useState(true);

  // Get game name on param
  const { name } = useParams();

  const game = games.find((game) => game.path === name);

  const navigate = useNavigate();

  useEffect(() => {
    if (!game) {
      navigate("/");
      return;
    }
  }, [game, navigate]);

  if (!game) return <></>;

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
  };
  return (
    <Box position={"relative"} minH={"80vh"} w={"100%"}>
      <VStack
        alignSelf={"start"}
        alignItems={"start"}
        bg="blackAlpha.200"
        m={4}
        borderRadius={"md"}
        boxShadow={"md"}
        py={[4, 5]}
        height={"100%"}
      >
        <Stack
          height={"100%"}
          direction={["column", "row"]}
          px={[2, 10]}
          spacing={4}
        >
          {/* Image */}
          <motion.div
            initial={{ x: -100, y: -100, rotate: -45, scale: 0 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          >
            <Box overflow={"hidden"} borderRadius={"100"} boxSize={"200"}>
              <AspectRatio ratio={1}>
                <Image
                  objectFit={"cover"}
                  src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                />
              </AspectRatio>
            </Box>
          </motion.div>
          {/* End of Image */}

          {/* Game Download */}
          <VStack spacing={1} alignItems={"start"} alignSelf={"start"}>
            <Text fontSize={"2xl"} fontWeight={"500"} letterSpacing={1.5}>
              {game.name}
            </Text>
            {game.shortDescription && (
              <Text color={"gray.400"} fontStyle={"italic"}>
                {game.shortDescription}
              </Text>
            )}
            <ReactStars
              key={game.platform.ios.rating}
              half={true}
              edit={false}
              value={4.5}
              // halfIcon={<i className="fa fa-star-half-alt"></i>}
              size={20}
              activeColor="#ffd700"
            />
            <Box height={"100%"} />
            <Button
              onClick={() =>
                isAppleProduct
                  ? window.open(game.platform.ios.link)
                  : window.open(game.platform.android.link)
              }
              bg={"red.400"}
            >
              Dowload now
            </Button>
          </VStack>
          {/* End of Game Download */}
        </Stack>

        {game.bio && (
          <VStack py={4} px={[2, 10]}>
            <Text textAlign={"start"} alignSelf={"start"}>
              {game.bio}
            </Text>
          </VStack>
        )}
      </VStack>

      {isLoading && game.videos.length > 0 && (
        <Box textAlign={"center"} p={4}>
          <Text color={"red.400"} fontStyle={"italic"}>
            Loading video...
          </Text>
          <BouncingDotsLoader />
        </Box>
      )}

      {/* Game Video */}
      {game.videos && (
        <Stack px={[0, 4]} direction={"row"} spacing={[2, 10]} h={"100%"}>
          {game.videos.map((video, index) => (
            <Box
              key={index}
              maxW={"100%"}
              overflow={"hidden"}
              borderRadius={"md"}
            >
              <video
                onLoadStart={onLoadStart}
                onLoadedData={onLoadEnd}
                onError={onError}
                loop
                controls={false}
                autoPlay
                muted
              >
                <source src={`${PUBLIC_VIDEO_URL}/${video}`} type="video/mp4" />
              </video>
            </Box>
          ))}
        </Stack>
      )}
      {/* End of Game Video */}

      {/* Game Description */}
      <VStack py={[4, 5]} px={[2, 4]} textAlign={"start"} alignItems={"start"}>
        {game.description}
      </VStack>
      {/* End of Game Description */}

      {/* Game Gallery */}
      {game.images.length > 0 && (
        <VStack px={[2, 4]} py={5} alignItems={"start"}>
          <CustomHeading text={"Game Gallery"} />
          <Grid
            templateColumns={["repeat(2 , 2fr)", "repeat(3, 3fr)"]}
            gap={[2, 4]}
          >
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
      )}
      {/* End of Game Gallery */}

      {/* Game Description  */}
    </Box>
  );
};

export default GameDetailPage;
