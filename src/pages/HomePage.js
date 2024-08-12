import { Box, Flex, Stack, useColorMode, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import games from "../data/game";
import Hero from "../components/Hero";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { SocialButton } from "../components/Footer";
import socialMediaLinks from "../data/socialMediaLinks";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  isAndroid,
  isIOS,
  isMacOs,
  isWindows,
  isWinPhone,
} from "react-device-detect";
import { isAppleProduct } from "../hooks";
import { motion } from "framer-motion";

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
  const { colorMode, toggleColorMode } = useColorMode();
  const [typeIsDone, setTypeIsDone] = useState(false);

  return (
    <Flex
      pos={"relative"}
      direction={"column"}
      position={"relative"}
      minH={"80vh"}
    >
      <Box
        m={5}
        position={"fixed"}
        top={["none", "6rem"]}
        bottom={[10, "none"]}
        right={["none", 0]}
      >
        <VStack spacing={[3, 7]} alignItems={"center"}>
          <SocialButton
            borderRadius={"100"}
            size={["sm", "md"]}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </SocialButton>
          <SocialButton label={"Discord"} href={socialMediaLinks.discord}>
            <FaDiscord />
          </SocialButton>
          <SocialButton label={"YouTube"} href={socialMediaLinks.youtube}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Tiktok"} href={socialMediaLinks.tiktok}>
            <FaTiktok />
          </SocialButton>
        </VStack>
      </Box>
      <Hero typeIsDone={typeIsDone} setTypeIsDone={setTypeIsDone} />

      <motion.div
      // animate={{ x: 100 }}
      // transition={{ type: "spring", stiffness: 100 }}
      >
        <Stack
          direction={["column", "column", "row"]}
          my={["1rem", "4rem"]}
          spacing={["1rem", "2rem", "1rem", "3rem", "8rem"]}
          width={"95%"}
          mx={"auto"}
          justifyItems={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          {typeIsDone && (
            <motion.div
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
                delay: 0.5,
              }}
              animate={{
                scale: [0.5, 1, 1, 0.5, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              initial="hidden"
            >
              <GameCard
                onClickCustom={() =>
                  window.open("https://fireworksplay.com", "_blank")
                }
                dowloadUrl={
                  isAppleProduct
                    ? games[0].platform.ios.link
                    : games[0].platform.android.link
                }
                {...games[0]}
              />
            </motion.div>
          )}
          {typeIsDone &&
            games.slice(1, 3).map((game, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GameCard
                  key={index}
                  dowloadUrl={
                    isAppleProduct
                      ? game.platform.ios.link
                      : game.platform.android.link
                  }
                  {...game}
                />
              </motion.div>
            ))}
        </Stack>
      </motion.div>
    </Flex>
  );
};

export default HomePage;
