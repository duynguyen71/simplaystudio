import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GameCard from "../components/GameCard";
import { CaptionCarousel } from "../components/CaptionCarousel";
import games from "../data/game";
import Hero from "../components/Hero";
import CustomHeading from "../components/CustomHeading";
import BannerText from "../components/BannerText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("In view");
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
  return (
    <Box
      // minH={"100vh"}
      padding={0}
    >
      <Box height={["2vh", "5vh", "5vh"]} />
      {/* Main 1 */}
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        // justifyContent={"space-between"}
        // alignItems={"center"}
      >
        {/* Hero */}
        <Box flex={5}>
          <Hero />
        </Box>
        <Box w={10} />
        {/* Game Hight Light */}
        <Box flex={7}>
          <CaptionCarousel games={games} />
        </Box>
      </Flex>
      {/* End of Main 1 */}

      {/* Main 2 */}
      <Box py={[4, 20]} px={[4, 8]} boxShadow={"lg"}>
        <CustomHeading text={"Our Games"} />
        <Grid templateColumns="repeat(2, 2fr)" gap={[2, 10]}>
          {games.slice(0, 4).map((game, index) => (
            <GridItem w="100%">
              <GameCard key={index} {...game} />
            </GridItem>
          ))}
        </Grid>
      </Box>

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
          <BannerText text={"EXLORING THE"} />
        </motion.div>
        <motion.div animate={animation2}>
          <BannerText text={"COOL FEATURES"} color="yellow" />
        </motion.div>
        <motion.div animate={animation3}>
          <BannerText text={"EVERY WEEK"} color="red" />
        </motion.div>
      </Box>
      {/* End of Main 3 */}
    </Box>
  );
};

export default HomePage;
