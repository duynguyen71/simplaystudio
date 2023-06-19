import React from "react";
import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
import { useNavigate } from "react-router";
import "./games-page.css";

const GamesPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box p={8}>
        <SimpleGrid spacing={["10px", "20px", "40px"]} minChildWidth={"40vw"}>
          {games.map((game, index) => {
            return (
              <VStack
                className="game-container"
                // overflow={"hidden"}
                cursor={"pointer"}
                spacing={3}
                alignItems={"start"}
                p={4}
                boxShadow={"lg"}
                key={index}
                onClick={() => navigate(`/games/${game.name}`)}
              >
                <Image
                  borderRadius={"md"}
                  src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                />
                <Text fontWeight={"500"} letterSpacing={2}>
                  {game.name}
                </Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GamesPage;
