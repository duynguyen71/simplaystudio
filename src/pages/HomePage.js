import { Flex, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import GameCard from "../components/GameCard";
import games from "../data/game";
import Hero from "../components/Hero";
import { isAppleProduct } from "../hooks";

const HomePage = () => {
  const [typeIsDone, setTypeIsDone] = useState(false);

  return (
    <Flex
      pos={"relative"}
      direction={"column"}
      position={"relative"}
      minH={"80vh"}
    >
      <Hero typeIsDone={typeIsDone} setTypeIsDone={setTypeIsDone} />

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
        )}
        {typeIsDone &&
          games.slice(1, 3).map((game, index) => (
            <GameCard
              key={index}
              dowloadUrl={
                isAppleProduct
                  ? game.platform.ios.link
                  : game.platform.android.link
              }
              {...game}
            />
          ))}
      </Stack>
    </Flex>
  );
};

export default HomePage;
