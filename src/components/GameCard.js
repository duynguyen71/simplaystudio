import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMAGE_URL } from "../hooks";
const GameCard = (props) => {
  const { name, thumb } = props;

  const navigate = useNavigate();

  return (
    <AspectRatio ratio={1}>
      <Box
        bg="gray.900"
        boxShadow={"lg"}
        onClick={() => navigate(`/games/${name}`)}
        cursor={"pointer"}
        borderRadius={"20px"}
        position="relative"
        // backgroundImage={`${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 1.png`}
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
