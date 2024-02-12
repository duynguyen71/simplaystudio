import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
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
import hightlightVideos, { hightligtVideos } from "../data/hightlightvideos";
import { PUBLIC_HIGHTLIGHTS_URL } from "../hooks";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";

const HomePage = () => {
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref, inView } = useInView();

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
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
        x: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
      animation5.start({
        x: 0,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
    }
    if (!inView2) {
      animation4.start({
        x: "300px",
      });
      animation5.start({
        x: "-300px",
      });
    }
  }, [inView2, animation4, animation5]);
  return (
    <Flex direction={"column"} position={"relative"} minH={"80vh"}>
      {/* Main 1 */}
      <Flex
        mx={[0, 4]}
        direction={["column", "column", "column", "column", "row"]}
      >
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
      <Box pt={10}>
        <Box>
          <video
            width="100%"
            maxw="600px"
            rounded="md"
            shadow="md"
            outline="none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://dyhsziddrog2s.cloudfront.net/FWAppPreview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
      {/* Main 2 */}
      <Flex direction={"column"} my={[8, 10, 12]} px={[4, 8]}>
        <Box height={["5vh"]}>
          <CustomHeading color={"white.400"} text={"Our Games"} />
        </Box>
        <Grid
          overflowX={"hidden"}
          templateColumns={[
            "repeat(2, 2fr)",
            "repeat(3, 3fr)",
            "repeat(5, 5fr)",
          ]}
          gap={[2, 10]}
        >
          {games.slice(0, 5).map((game, index) => {
            return (
              <GridItem key={index}>
                <GameCard {...game} />
              </GridItem>
            );
          })}
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
        mb={[4, 8, 10]}
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
              color={useColorModeValue("black", "orange")}
              isStrokeStyle={true}
              text={"COOL"}
            />
            <BannerText text={"FEATURES"} color="orange" />
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
      <Box
        ref={ref2}
        my={[4, 8, 10]}
        alignItems={"center"}
        width={"100%"}
        textAlign={"center"}
        cursor={"pointer"}
      >
        <motion.div animate={animation4}>
          <Flex>
            <Spacer />
            <BannerText text={"HIGHLIGHTS"} color="red.400" />
            <BannerText
              text={"OF"}
              color={useColorModeValue("orange", "white")}
            />
            <Spacer />
          </Flex>
        </motion.div>

        <motion.div animate={animation5}>
          <Flex>
            <Spacer />
            <BannerText
              isStrokeStyle={true}
              text={"THE WEEK"}
              color={useColorModeValue("orange", "orange")}
            />
            <Spacer />
          </Flex>
        </motion.div>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "column", "row"]}
        p={[2, 4, 8]}
      >
        {/* {hightlightVideos.map((s, index) => {
          return (
            <Box
              key={index}
              h={"100%"}
              mr={[0, 0, 4]}
              w={["100%", "100%", "50vw"]}
              mb={[2, 4, 8]}
              overflow={"hidden"}
              borderRadius={"md"}
            >
              <video loop controls={false} autoPlay={true} muted>
                <source
                  src={`${PUBLIC_HIGHTLIGHTS_URL}/${s}`}
                  type="video/mp4"
                />
              </video>{" "}
            </Box>
          );
        })} */}
        {hightligtVideos.distribureHightlightVideos.map((s, index) => {
          return (
            <Box
              key={index}
              h={"100%"}
              mr={[0, 0, 4]}
              w={["100%", "100%", "50vw"]}
              mb={[2, 4, 8]}
              overflow={"hidden"}
              borderRadius={"md"}
            >
              <video autoPlay loop muted playsInline>
                <source src={s} type="video/mp4" />
              </video>{" "}
            </Box>
          );
        })}
      </Flex>
      {/* End of Main 5 */}
    </Flex>
  );
};

export default HomePage;
