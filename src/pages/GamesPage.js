import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Spacer,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
import { useNavigate } from "react-router";
import "./games-page.css";
import { ChevronRightIcon } from "@chakra-ui/icons";

const GamesPage = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.200", "gray.800");
  return (
    <Box>
      <Box p={[4, 8]}>
        <SimpleGrid
          spacing={["20px", "40px", "50px"]}
          minChildWidth={["30vw", "20vw"]}
        >
          {games.map((game, index) => {
            return (
              <VStack
                className="game-container"
                cursor={"pointer"}
                spacing={2}
                alignItems={"start"}
                p={2}
                boxShadow={"lg"}
                bgColor={bgColor}
                borderRadius={"md"}
                key={index}
                onClick={() => navigate(`/games/${game.path}`)}
              >
                <Center>
                  <Image
                    height={"100%"}
                    aspectRatio={1}
                    backgroundPosition={"center"}
                    backgroundRepeat={"no-repeat"}
                    borderRadius={"md"}
                    backgroundSize={"cover"}
                    src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                  />
                </Center>
                <Spacer />
                <HStack px={"30px"} width={"100%"}>
                  <Text
                    fontSize={["sm", "md"]}
                    fontWeight={"500"}
                    letterSpacing={2}
                  >
                    {game.name}
                  </Text>
                  <Spacer />
                  <Button
                    size={"xl"}
                    bg={"transparent"}
                    as={ChevronRightIcon}
                  />
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
