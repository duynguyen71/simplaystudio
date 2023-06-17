import React from "react";
import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
const GamesPage = () => {
  return (
    <Box>
      <Box p={8}>
        <SimpleGrid spacing={"40px"} minChildWidth={"20vw"}>
          {games.map((game, index) => {
            return (
              <VStack
                overflow={"hidden"}
                cursor={"pointer"}
                spacing={3}
                alignItems={"start"}
                p={4}
                boxShadow={"lg"}
                key={index}
              >
                <Image
                  _hover={{
                    scale: 10,
                  }}
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
