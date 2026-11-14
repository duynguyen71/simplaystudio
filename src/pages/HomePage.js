import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GameCard from "../components/GameCard";
import games from "../data/game";
import Hero from "../components/Hero";
import { isAppleProduct } from "../hooks";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const getGameUrl = (game) => {
    if (game.website) return game.website;

    const preferredStore = isAppleProduct() ? "ios" : "android";
    return (
      game.platform?.[preferredStore]?.link ||
      game.platform?.ios?.link ||
      game.platform?.android?.link ||
      game.platform?.steam?.link
    );
  };

  return (
    <Flex
      position="relative"
      direction="column"
      flex="1"
      width="100%"
      justifyContent={{ base: "flex-start", lg: "space-around" }}
      py={{ base: "1rem", lg: "2rem" }}
    >
      <Hero />

      <Flex
        wrap="wrap"
        justify="center"
        mt={{ base: "1rem", lg: 0 }}
        mb={{ base: "1.5rem", lg: 0 }}
        gap={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
        width="94%"
        maxW="112rem"
        mx={"auto"}
        alignItems={"center"}
      >
        {games.map((game, index) => (
          <Box
            key={game.name}
            w={{
              base: "100%",
              sm: "calc((100% - 1.5rem) / 2)",
              md: "calc((100% - 4rem) / 3)",
              xl: "calc((100% - 8rem) / 5)",
            }}
          >
            <motion.div
              key={game.name}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GameCard
                downloadUrl={getGameUrl(game)}
                {...game}
                onClickCustom={
                  game.showcase
                    ? () => navigate(`games/${game.path}`)
                    : undefined
                }
              />
            </motion.div>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePage;
