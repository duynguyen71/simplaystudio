import React from "react";
import { Box, AspectRatio, useColorModeValue, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMAGE_URL } from "../hooks";
const GameCard = (props) => {
  const { name, thumb, path } = props;

  const navigate = useNavigate();

  return (
    <AspectRatio ratio={1}>
      <Box
        bg={useColorModeValue("gray.200", "gray.900")}
        boxShadow={"lg"}
        onClick={() => navigate(`/games/${path}`)}
        cursor={"pointer"}
        borderRadius={"20px"}
        position="relative"
        objectFit={"cover"}
        backgroundImage={
          `${PUBLIC_IMAGE_URL}/${thumb}` ||
          `${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 1.png`
        }
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        transition="0.3s ease-in-out"
      ></Box>
    </AspectRatio>
  );
};

export default GameCard;
