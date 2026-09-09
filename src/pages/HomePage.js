import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import GameCard from "../components/GameCard";
import games from "../data/game";
import Hero from "../components/Hero";
import { isAppleProduct } from "../hooks";
import { motion, useReducedMotion } from "framer-motion";

const HomePage = () => {
  const [typeIsDone, setTypeIsDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getGameUrl = (game) => {
    if (game.website) return game.website;

    const preferredStore = isAppleProduct() ? "ios" : "android";
    return (
      game.platform?.[preferredStore]?.link ||
      game.platform?.ios?.link ||
      game.platform?.android?.link
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
      <Hero typeIsDone={typeIsDone} setTypeIsDone={setTypeIsDone} />

      <SimpleGrid
        columns={[1, 2, 2, 4]}
        mt={{ base: "1rem", lg: 0 }}
        mb={{ base: "1.5rem", lg: 0 }}
        spacing={["1rem", "1.5rem", "2rem"]}
        width="94%"
        maxW="112rem"
        mx={"auto"}
        alignItems={"center"}
      >
        {typeIsDone &&
          games.map((game, index) => (
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
              <GameCard downloadUrl={getGameUrl(game)} {...game} />
            </motion.div>
          ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HomePage;
