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
} from "@chakra-ui/react";
import games from "../data/game";
import { PUBLIC_IMAGE_URL } from "../hooks";
import { useNavigate } from "react-router";
import "./games-page.css";
import { BsArrowRight } from "react-icons/bs";

const GamesPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box p={8}>
        <SimpleGrid spacing={["30px", "40px", "50px"]} minChildWidth={"40vw"}>
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
                <Center>
                  <Image
                    borderRadius={"md"}
                    src={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
                  />
                </Center>
                <HStack px={"30px"} width={"100%"}>
                  <Text fontWeight={"500"} letterSpacing={2}>
                    {game.name}
                  </Text>
                  <Spacer />
                  <Button as={BsArrowRight}>s</Button>
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
