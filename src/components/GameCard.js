import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const GameCard = (props) => {
  const { name } = props;

  const navigate = useNavigate();

  return (
    <AspectRatio ratio={1}>
      <Box
        onClick={() => navigate(`/games/${name}`)}
        cursor={"pointer"}
        borderRadius={"md"}
        position="relative"
        backgroundImage={`${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 1.png`}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        transition="0.3s ease-in-out"
      >
        {/* Content */}
        {/* <Box
        w="100%"
        p="1"
        borderRadius={"md"}
        bg="red.600"
        bottom={-5}
        left={2}
        position={"absolute"}
      >
        <Text>{name}</Text>
      </Box> */}
      </Box>
    </AspectRatio>
  );
};

export default GameCard;
