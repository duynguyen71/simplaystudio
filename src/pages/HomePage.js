import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import GameCard from "../components/GameCard";
import games from "../data/game";
import Hero from "../components/Hero";
import { isAppleProduct } from "../hooks";

const HomePage = () => {
  const [typeIsDone, setTypeIsDone] = useState(false);

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
      pos={"relative"}
      direction={"column"}
      position={"relative"}
      minH={"80vh"}
    >
      <Hero typeIsDone={typeIsDone} setTypeIsDone={setTypeIsDone} />

      <SimpleGrid
        columns={[1, 2, 2, 4]}
        my={["1rem", "4rem"]}
        spacing={["1rem", "2rem", "2.5rem"]}
        width={"90%"}
        maxW={"90rem"}
        mx={"auto"}
        alignItems={"center"}
      >
        {typeIsDone &&
          games.map((game) => (
            <GameCard
              key={game.name}
              downloadUrl={getGameUrl(game)}
              {...game}
            />
          ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HomePage;
