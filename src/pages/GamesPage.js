import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Spacer,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
import { Link as RouterLink } from "react-router-dom";
import "./css/games-page.css";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const GamesPage = () => {
  const bgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box>
      <Box p={[4, 8]} maxW={"90rem"} mx={"auto"}>
        <Heading as="h1" mb={6}>Our Mobile & PC Games</Heading>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing={["20px", "40px", "50px"]}
        >
          {games.map((game) => {
            return (
              <VStack
                as={game.path ? RouterLink : "a"}
                to={game.path ? `/games/${game.path}/` : undefined}
                href={game.path ? undefined : game.website}
                target={game.path ? undefined : "_blank"}
                rel={game.path ? undefined : "noopener noreferrer"}
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
              >
                <Center width={"100%"}>
                  <Image
                    width={"100%"}
                    aspectRatio={1}
                    borderRadius={"50"}
                    objectFit="cover"
                    bg="black"
                    src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                    alt={game.name}
                  />
                </Center>
                <Spacer />
                <HStack px={4} width={"100%"} alignItems={"center"}>
                  <Heading as="h2"
                    fontSize={["sm", "md"]}
                    fontWeight={"500"}
                    letterSpacing={0}
                    textAlign={"left"}
                  >
                    {game.name}
                  </Heading>
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
