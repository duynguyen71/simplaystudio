import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import GameCard from "../components/GameCard";
import { CaptionCarousel } from "../components/CaptionCarousel";
import games from "../data/game";
import Hero from "../components/Hero";
import CustomHeading from "../components/CustomHeading";
import BannerText from "../components/BannerText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ImageCarousel } from "../components/ImageCarousel";
import hightlightVideos from "../data/hightlightvideos";
import VideoContainer from "../components/VideoContainer";
import { PUBLIC_HIGHTLIGHTS_URL } from "../hooks";

const HomePage = () => {
  const { ref, inView } = useInView();
  const { ref2, inView2 } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
      animation3.start({
        y: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100px",
      });
      animation2.start({
        x: "100px",
      });
      animation3.start({
        y: "100px",
      });
    }
  }, [inView, animation, animation2, animation3]);

  useEffect(() => {
    if (inView2) {
      animation4.start({
        y: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
    }
    if (!inView2) {
      animation4.start({
        y: "100px",
      });
    }
  }, [inView2, animation4]);
  return (
    <Flex direction={"column"} position={"relative"} minH={"80vh"}>
      <Box height={["2vh", "5vh", "5vh"]} />

      {/* Main 1 */}
      <Flex mx={[0, 4]} direction={["column", "column", "row", "row", "row"]}>
        {/* Hero */}
        <Box alignSelf={"center"} flex={5}>
          <Hero />
        </Box>
        <Box w={5} />
        {/* Game Hight Light */}
        <Box flex={7}>
          <CaptionCarousel games={games} />
        </Box>
      </Flex>
      {/* End of Main 1 */}

      {/* Main 2 */}
      <Flex direction={"column"} my={[4, 8, 10]} px={[4, 8]}>
        <Box height={["4vh", "5vh", "5vh"]}>
          <CustomHeading color={"white.400"} text={"Our Games"} />
        </Box>
        <Grid
          overflowX={"hidden"}
          templateColumns={["repeat(2, 2fr)", "repeat(4, 4fr)"]}
          gap={[2, 10]}
        >
          {games.slice(0, 8).map((game, index) => (
            <GridItem key={index}>
              <GameCard {...game} />
            </GridItem>
          ))}
        </Grid>
        <Box height={"30px"} />

        <Center>
          <Button
            onClick={() => navigate("/games")}
            textColor={useColorModeValue("red.400", "gray.400")}
            letterSpacing={2}
            fontStyle={"normal"}
            fontWeight={"normal"}
            borderColor={"transparent"}
            fontSize={["sm", "md"]}
            alignSelf={"center"}
            alignContent={"center"}
            variant={"outline"}
            textDecoration={"underline"}
          >
            Show More
          </Button>
        </Center>
      </Flex>
      {/* End of Main 2 */}

      {/* Main 3 */}
      <Box
        ref={ref}
        my={[4, 8, 10]}
        alignItems={"center"}
        width={"100%"}
        textAlign={"center"}
        cursor={"pointer"}
      >
        <motion.div animate={animation}>
          <Flex>
            <Spacer />

            <BannerText
              color={useColorModeValue("gray.600", "white")}
              text={"EXLORING"}
            />

            <BannerText
              color={useColorModeValue("gray", "white")}
              isStrokeStyle={true}
              text={"THE"}
            />
            <Spacer />
          </Flex>
        </motion.div>
        <motion.div animate={animation2}>
          <Flex>
            <Spacer />
            <BannerText
              color={useColorModeValue("black", "yellow")}
              isStrokeStyle={true}
              text={"COOL"}
            />
            <BannerText text={"FEATURES"} color="yellow" />
            <Spacer />
          </Flex>
        </motion.div>
        <motion.div animate={animation3}>
          <Flex>
            <Spacer />
            <BannerText text={"EVERY WEEK"} color="red.400" />
            <Spacer />
          </Flex>
        </motion.div>
      </Box>
      {/* End of Main 3 */}

      {/* Main 4 */}
      <ImageCarousel games={games} />
      {/* End of Main 4 */}

      {/* Main 5 */}
      {/* <Box
        my={[4, 8, 10]}
        alignItems={"center"}
        width={"100%"}
        textAlign={"center"}
        cursor={"pointer"}
      >
        <Flex>
          <Spacer />
          <BannerText
            color={useColorModeValue("black", "yellow")}
            text={"GAME"}
          />
          <BannerText isStrokeStyle={true} text={"HIGHLIGHTS"} color="yellow" />
          <Spacer />
        </Flex>
      </Box> */}
      {/* End of Main 5 */}
    </Flex>
  );
};

export default HomePage;
