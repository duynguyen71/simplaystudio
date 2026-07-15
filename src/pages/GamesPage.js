import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  VStack,
  HStack,
  Spacer,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
import { useNavigate } from "react-router";
import "./css/games-page.css";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const GamesPage = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.200", "gray.800");

  const openGame = (game) => {
    if (game.path) {
      navigate(`/games/${game.path}`);
      return;
    }

    window.open(game.website, "_blank", "noopener,noreferrer");
  };

  return (
    <Box>
      <Box p={[4, 8]} maxW={"90rem"} mx={"auto"}>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing={["20px", "40px", "50px"]}
        >
          {games.map((game) => {
            return (
              <VStack
                as="button"
                type="button"
                aria-label={`Open ${game.name}`}
                className="game-container"
                cursor={"pointer"}
                spacing={2}
                alignItems={"start"}
                p={2}
                boxShadow={"lg"}
                bgColor={bgColor}
                borderRadius={"md"}
                key={game.path || game.name}
                onClick={() => openGame(game)}
              >
                <Center width={"100%"}>
                  <Image
                    width={"100%"}
                    aspectRatio={1}
                    borderRadius={"50"}
                    objectFit={"cover"}
                    src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                    alt={game.name}
                  />
                </Center>
                <Spacer />
                <HStack px={4} width={"100%"} alignItems={"center"}>
                  <Text
                    fontSize={["sm", "md"]}
                    fontWeight={"500"}
                    letterSpacing={0}
                    textAlign={"left"}
                  >
                    {game.name}
                  </Text>
                  <Spacer />
                  {game.path ? (
                    <ChevronRightIcon boxSize={6} flexShrink={0} />
                  ) : (
                    <ExternalLinkIcon boxSize={5} flexShrink={0} />
                  )}
                </HStack>
              </VStack>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GamesPage;
